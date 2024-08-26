import CheckoutEvent from '@/components/checkout/checkoutEvent';
import CheckoutHeader from './_components/checkoutHeader';
import CheckoutForm from './_components/checkoutForm';

export default function Checkout() {
  return (
    <section className='bg-white'>
      <CheckoutHeader />
      <CheckoutForm/>
      {/* <CheckoutEvent/> */}
    </section>
  );
}
