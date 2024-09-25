import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts()
    }, [])
    const getProducts = async () => {
        let data = await fetch(`https://fakestoreapi.com/products`)
        let res = await data.json()
        setProducts(res)
    }
    // const getProducts = async () => {
    //     let data = await axios.get(`https://fakestoreapi.com/products`)
    //   console.log(data);   
    //     setProducts(data.data)
    // }
    return (
        <>

            {products.length > 0 ? (
                <div className='container'>
                    <div className='row'>
                        {products.map((product) => (
                            <div key={product.id} className="col-md-3">
                                <Link to={`/product/${product.id}`}>
                                    <div className="card my-2">
                                        <img src={product.image} alt={product.title} />

                                        <div className="card-body">
                                            <h5 className='card-title'>{product.title}</h5>
                                            <h6 className='card-text'>{product.description}</h6>
                                            <h3 className='card-text'>{product.price}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div></div>) : (<div><h2>Loading</h2></div>)

            }


        </>
    )
}

export default Products
