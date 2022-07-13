// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mongodb from '../../untils/db'


type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await mongodb.connect();
  await mongodb.disconnect();
  res.status(200).json({ name: 'John Doe' })
}
