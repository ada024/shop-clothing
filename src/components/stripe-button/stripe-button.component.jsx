import React from 'react';
import StripeCheckout from "react-stripe-checkout";


const StripeButtonButton =({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51KJceRHTR71TOgmyHKc151sUTP1nJ1OwzyLvOTmpLYLV3UGh6McilPWcfumKipryJD61Uox8upGOOJonBCuFSkON00fqiHCUKq'


   const onToken = token => {
        console.log(token);
        alert('Payment Successful!');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Shop clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeButtonButton;
