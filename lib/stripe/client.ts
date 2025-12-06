// STRIPE INTEGRATION DISABLED - Uncomment when ready to implement payments
// import { loadStripe, Stripe } from '@stripe/stripe-js';

// let stripePromise: Promise<Stripe | null>;

// export const getStripe = () => {
//   if (!stripePromise) {
//     stripePromise = loadStripe(
//       process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
//     );
//   }
//   return stripePromise;
// };

export const getStripe = () => {
  console.warn('Stripe is not configured. Please set up Stripe to enable payments.');
  return null;
};
