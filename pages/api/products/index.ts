import nc from 'next-connect'
import db from '../../../untils/db'
import Product from '../../../models/Product';

const handler = nc();
handler.get(async (res, req) => {
    await db.connect();
    const products = await Product.find({});
    await db.disconnect();
    res.send(products);
});
export default handler;