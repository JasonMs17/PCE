import { withIronSessionApiRoute } from "iron-session/next";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const admin = {
  username: "$2a$12$wS5JsuhSd0gCcKlktJN/pe.cORhBLJUsO68xsqM5tK3Yt.cgsocfC",
  password: "$2a$12$wCefeILgp7lUb5HY15mk5Or0xfd.UNe4zGoPy2GLAAqVXDf9SrVfa",
};

const secret = process.env.JWT_SECRET;

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return new Response(JSON.stringify({ message: "Username and password are required" }), {
        status: 400,
      });
    }

    const isUsernameValid = await bcrypt.compare(username, admin.username);
    if (!isUsernameValid) {
      return new Response(JSON.stringify({ message: "Invalid username or password" }), {
        status: 401,
      });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return new Response(JSON.stringify({ message: "Invalid password or password" }), {
        status: 401,
      });
    }

    const token = jwt.sign({ username }, secret!, { expiresIn: '1h' });

    return new Response(JSON.stringify({ token }), {
      status: 200,
    });

  } catch (error) {
    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
    });
  }
}
