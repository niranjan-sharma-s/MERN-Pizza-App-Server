import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch , useSelector } from 'react-redux'
import { placeOrder } from '../actions/orderActions'
import Loading from './Loading'
import Success from './Success'
import Error from './Error'

const Checkout = ({subTotal}) => {
 
    const orderState = useSelector(state => state.orderReducer)
    const {loading , error , success} = orderState
    const dispatch = useDispatch()
    const handleToken = (token) => {
        dispatch(placeOrder(token,subTotal))

    }
    return (
        <div>
            {loading && <Loading/>}
            {error && <Error error='something went wrong'/>}
            {success && <Success success ='Order placed successfully'/>}
            <StripeCheckout 
            amount ={subTotal*100}
            shippingAddress
            token={handleToken}
            stripeKey='pk_test_51K70MBSInMPkzks1sgCXJ0MxX6dFigvSaV2TEofq6pL5Vqwd1Vzxfxlb6xVCIz8iVvXVqA6AHn8yjG6YGpVPdnGy00139DCqCp'
            currency='INR'>

<button className="btn">Pay Now</button>

            </StripeCheckout>
        </div>
    )
}

export default Checkout
