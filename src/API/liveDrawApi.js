import axios from './axios'
import { fetchCart } from '../Redux/cart/cartActions'

const handleError = (err) => {
    const error = err.response
    if (error) throw error.data
    throw err
}

const fetchLiveDrawVideoLink = () => {
    return axios.get('api/live-draw/')
        .then(res => res.data)
        .catch(handleError)
}

export default fetchLiveDrawVideoLink;