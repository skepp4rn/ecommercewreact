import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import { getOneProduct, setProduct } from '../store/actions/getProductsActions';


const ProductDetails = () => {
    const id = useParams().id
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneProduct(id))

        return () => {
            dispatch(setProduct(null))
        }
    }, [dispatch, id])

    const product = useSelector(state => state.getProductsReducer.product);
    
    return (
        <div>
            { product &&

            <div className="container d-flex justify-content-around">
                <div className=" ">
                    <img src={product.image} alt="" className="details-image" />
                </div>
                <div className="details-details py-5"></div>
                <h4>{product.name}</h4>
                <span className="text-red h5">{product.price} ;-</span>
                <p className="mt-5">{product.desc}</p>
                <button className="btn btn-sm">Lägg till i kundvagn</button>
                
            </div>
            }
        </div>
    )
}

export default ProductDetails
