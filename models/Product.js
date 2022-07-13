import { products } from '../untils/data';
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: { type: Number, require: true },
    slug: { type: String, require: true, unique: true },
    name: { type: String, require: true },
    category: { type: String, require: true },
    image: { type: String, require: true },
    price: { type: Number, require: true },
    rating: { type: Number, require: true, default: 0 },
    numReview: { type: String, require: true, default: 0 },
    countInStock: { type: String, require: true, default: 0 },
    brand: { type: String, require: true },
    description: { type: String, require: true }
}, {
    timestamps: true,
});
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;
