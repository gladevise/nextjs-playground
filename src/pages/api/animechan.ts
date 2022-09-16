import { NextApiRequest, NextApiResponse } from 'next';
export default async function animechan(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(`https://animechan.vercel.app/api/random`);
  const quote = await response.json();
  res.json({
    ...quote,
  });
}
