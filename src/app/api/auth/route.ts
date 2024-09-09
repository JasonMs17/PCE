import { connectToDatabase, disconnectFromDatabase } from '@/utils/db';
import bcrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { serialize } from 'cookie';
import User from "@/models/User";

const secret = process.env.JWT_SECRET || "";
const iat = Math.floor(Date.now() / 1000);
const expired = iat + 3600;

export async function POST(request: Request) {
  try {
    await connectToDatabase();

    const { username, password } = await request.json();

    if (!username || !password) {
      return new Response(JSON.stringify({ message: "Username and password are required" }), {
        status: 400,
      });
    }

    const admin = await User.findOne({ username });

    if (!admin) {
      return new Response(JSON.stringify({ message: "Invalid username or password" }), {
        status: 401,
      });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    console.log(isPasswordValid);
    if (!isPasswordValid) {
      return new Response(JSON.stringify({ message: "Invalid username or password" }), {
        status: 401,
      });
    }

    const token = sign(
      {
        username,
      },
      secret,
      {
        expiresIn: expired,
      }
    );

    const serialized = serialize('OurSiteJWT', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: expired,
      path: '/'
    });

    await disconnectFromDatabase();

    return new Response(JSON.stringify({ message: "Success" }), {
      status: 200,
      headers: { 
        'Set-Cookie': serialized,
      }
    });

  } catch (error) {
    await disconnectFromDatabase();

    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
    });
  }
}


