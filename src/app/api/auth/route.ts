import bcrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { serialize } from 'cookie';

const admin = {
  username: process.env.NEXT_PUBLIC_ADMIN_USERNAME,
  password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD,
};

const secret = process.env.NEXT_PUBLIC_JWT_SECRET || "";
const iat = Math.floor(Date.now() / 1000);
const expired = iat + 3600;

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return new Response(JSON.stringify({ message: "Username and password are required" }), {
        status: 400,
      });
    }

    const isUsernameValid = await bcrypt.compare(username, admin.username!);
    if (!isUsernameValid) {
      return new Response(JSON.stringify({ message: "Invalid username" }), {
        status: 401,
      });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password!);
    if (!isPasswordValid) {
      return new Response(JSON.stringify({ message: "Invalid password " }), {
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

    return new Response(JSON.stringify({ message: "Success" }), {
      status: 200,
      headers: { 
        'Set-Cookie': serialized,
      }
    });

  } catch (error) {
    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
    });
  }
}
