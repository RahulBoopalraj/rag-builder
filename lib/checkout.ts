import getStripe from "./getStripe";

export const redirectToCheckout = async (price: number) => {
  try {
      const stripe = await getStripe();

      if (!stripe) throw new Error('Stripe failed to initialize.');

      const checkoutResponse = await fetch('/api/checkout', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            price: price
          }),
      });

      const {sessionId} = await checkoutResponse.json();
      const stripeError = await stripe.redirectToCheckout({sessionId});

      if (stripeError) {
          console.error(stripeError);
      }
  } catch (error) {
      console.error(error);
  }
};