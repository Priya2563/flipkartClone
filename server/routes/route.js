import express from 'express';
import { getProducts, getProductById } from '../controller/product-controller.js';
import { userSignup, userLogin } from '../controller/user-controller.js';
// import { addItemInCart } from '../controller/cart-controller.js';
const router = express.Router();

//login & signup
router.post('/signup', userSignup);
router.post('/login', userLogin);
router.get('/products', getProducts);
router.get('/product/:id', getProductById);


export default router;