import React from 'react'
import { useSelector } from 'react-redux'
import './Cart.css'
import { useDispatch } from 'react-redux'
// import {RemovefromCart} from '../../redux/type/ProductionAction'

const Cart = () => {
    const cart_data = useSelector((state) => state.productdata.cartdata)
    console.log(cart_data);

    const dispatch = useDispatch()

    const totalPrice = cart_data.reduce((prevsValue, currentValue) => {
        return prevsValue + currentValue.price
    }, 0)
    return (


        <>

            <h2 className='text-center'>Cartpage</h2>
            {/* <p>Total Price: {totalPrice}</p> */}
            {cart_data && cart_data.length > 0 && (
                <div className='text-center'><p>Total Price: {totalPrice}</p></div>
            )}




            {cart_data && cart_data.length > 0 ? (cart_data.map((product) => (
                <div className="row border">
                    <div className="col-md-4">
                        <img src={product.image} alt="img" className='img-fluid cart_img' />
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-3">{product.titile}</h4>
                        <h4 className='pt-3'>{product.category}</h4>
                        <h4 className='pt-3'>{product.description}</h4>

                    </div>
                    <div className="col-md-2">
                        <div>Price: {product.price}</div>
                        <button className='btn btn-danger' onClick={() => dispatch(RemovefromCart(product.id))}>Remove</button>
                    </div>
                </div>
            ))) : (<div><h2>Cart is Empty</h2></div>)}
        </>
    )
}

export default Cart
