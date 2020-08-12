import { Request, Response } from 'express';
import db from '../database/connection';
import bcrypt from 'bcryptjs';

export default class UserController {
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const users = await db('users').select('*').where('id', '=', id);

    if (users.length == 0) {
      return response.status(404).json({ error: 'User not found' });
    }

    return response.json(users[0]);
  }

  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const userExists = await db('users').select('*').where('email', '=', email);

    if (userExists.length > 0) {
      return response.status(400).json({ error: 'User already exists' });
    }

    const password_hash = await bcrypt.hash(password, 8);

    const ids = await db('users').insert({ name, email, password_hash });

    const id = ids[0];

    return response.json({ id, name, email });
  }
}
