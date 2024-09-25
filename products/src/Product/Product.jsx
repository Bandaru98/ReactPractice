import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import { AddtoCart } from '../../redux/type/ProductionAction'

const Product = () => {
    const { id } = useParams()

    const [product, setState] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        getProducts()
    }, [])
    const getProducts = async () => {
        let data = await fetch(`https://fakestoreapi.com/products/${id}`)
        let res = await data.json()
        setState(res)
    }
    return (
        // console.log(Object.keys(state).length)

        <>

        <h2 className='text-center'>Product List</h2>
            {Object.keys(product).length  ? (
                <div className='container'>
                    <div className="row">
                        <div className="col-md-6 mt-2 border">
                            <img src={product.image} alt={product.title} className='img-fluid' />
                        </div>
                        <div className="col-md-6 mt-2 border">
                            <h2 className='pt-3 border'>Title: {product.title}</h2>
                            <div className="mt-3">
                                <span className='bg-info text-light p-2'>Price: {product.price}</span>
                                <p className='mt-3'>{product.description}</p>
                            </div>
                            <div className="mt-3">
                                <button className='btn btn-info px-3 py-2' onClick={() => dispatch(AddtoCart(product))}>AddtoCart</button>
                            </div>

                        </div>

                    </div>

                </div>
            ) : (
                <div><Loading/></div>)}

        </>
    )
}

export default Product
