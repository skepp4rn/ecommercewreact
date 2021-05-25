import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard'
import {getProducts} from '../store/actions/getProductsActions'

const Products = () => {

    const dispatch = useDispatch();
    const getProductsReducer = useSelector(state => state.getProductsReducer.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])


    
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3">
            {
                getProductsReducer && getProductsReducer.map(product => (
                    <ProductCard key={product._id} product={product}/>
                ))
               
                }
            

            </div>
 
        </div>
    )
}


export default Products
