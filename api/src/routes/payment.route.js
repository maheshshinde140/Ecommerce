import express from 'express';
import { createOrder, handleWebhook, verifyPayment } from '../controller/payment.controller.js';


const router = express.Router();

router.post('/create-order', createOrder);
router.post('/verify-payment', verifyPayment);
router.post('/webhook', handleWebhook);

export default router;