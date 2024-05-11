
const secretKey="sk_test_51OmafmGEW2D85ow9ck3gd16v3qB3I8rmwhicTjm2MsjoGokyZ9psonQr6IZqMXM6gdDsZAb8mE1GlcCWnaHNAQla008tD8JpA4"
const stripe = require("stripe")(secretKey);

const PaymentController={
    payment:async (req, res) => {
        const { products } = req.body;
        const lineItems = products.map((product) => (
            {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.title,
            },
            unit_amount: Math.round(product.price * 100),
          },
          quantity: product.count,
        }
        ));
      
      
      
        try {
          const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `http://localhost:3001/success`,
          });
      
          res.status(200).json({ id: session.id });
        } catch (error) {
          console.log(error);
          res.status(400).json({ error: "Server error." });
        }
      }
}
module.exports = PaymentController;