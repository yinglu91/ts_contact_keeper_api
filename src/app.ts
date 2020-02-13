import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

const add = (a: number, b: number): number => a + b;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  console.log(add(4, 6));
  res.send('Hello');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
