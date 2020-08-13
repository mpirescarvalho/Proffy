import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { Response, Request, NextFunction } from 'express';

export default async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded: any = await promisify(jwt.verify)(
      token,
      '81162edbbc1874fe2417b59d48fd075a1251'
    );
    req.userId = decoded.id;
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}
