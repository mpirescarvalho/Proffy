import { Request, Response } from 'express';
import db from '../database/connection';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default class SessionController {
  async create(request: Request, response: Response) {
    const { email, password } = request.body;

    const users = await db('users').select('*').where('email', '=', email);

    if (users.length === 0) {
      return response.status(401).json({ error: 'User not found' });
    }

    const user = users[0];

    if (!(await bcrypt.compare(password, user.password_hash))) {
      return response.status(401).json({ error: 'Password does not match' });
    }

    const { id, name, avatar, whatsapp, bio } = user;

    return response.json({
      user: {
        id,
        name,
        email,
        whatsapp,
        avatar,
        bio,
      },
      token: jwt.sign({ id }, '81162edbbc1874fe2417b59d48fd075a1251', {
        expiresIn: '7d',
      }),
    });
  }
}
