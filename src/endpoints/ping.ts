import { Request, Response } from "express";

export default async function pingPong(
  req: Request,
  res: Response
): Promise<void> {
  try {
    res.send('Pong!');
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
