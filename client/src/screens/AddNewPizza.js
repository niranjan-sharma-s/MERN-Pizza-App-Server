
import React, {useState } from 'react'
import {useDispatch , useSelector} from'react-redux'
import { adNewPizzaActions } from '../actions/pizzaActions'
import Error from '../Components/Error'
import Loading from '../Components/Loading'
import Success from '../Components/Success'

const AddNewPizza = () => {
    const dispatch = useDispatch()
    const addPizzaState = useSelector(state => state.addNewPizzaReducer)
const {loading , error , success} = addPizzaState
    const [name, setName] = useState("")
const [smallPrice, setSmallPrice] = useState("")
const [mediumPrice, setMediumPrice] = useState("")
const [largePrice, setLargePrice] = useState("")
const [image, setImage] = useState("")
const [description, setDescription] = useState("")
const [category, setCategory] = useState("")

const formHandler = (e) => {
    e.preventDefault()
    const pizza ={
        name,
        image,
        description,
        category,
        prices:{
            small : smallPrice,
            medium : mediumPrice,
            large : largePrice
        }
    }
    dispatch(adNewPizzaActions(pizza))
}

    return (
        <div>
            <div className='text-center shadow-lg p-3 mb-5 bg-white rounded'>

                {loading && <Loading/>}
                {error && <Error error='something went wrong'/>}
                {success && <Success success="pizza added"/>}
                <form onSubmit={formHandler}action="">
                    <input type="text" className="form-control m-1"  placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="text"className="form-control m-1"  placeholder="small varient price" value={smallPrice} onChange={(e) => setSmallPrice(e.target.value)}/>
                    <input type="text" className="form-control m-1" placeholder="medium varient price" value={mediumPrice} onChange={(e) => setMediumPrice(e.target.value)}/>
                    <input type="text" className="form-control m-1" placeholder="large varient price" value={largePrice} onChange={(e) => setLargePrice(e.target.value)}/>
                    <input type="text" className="form-control m-1" placeholder="image url" value={image} onChange={(e) => setImage(e.target.value)}/>
                    <input type="text" className="form-control m-1" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <input type="text" className="form-control m-1" placeholder="category" value={category} onChange={(e) => setCategory(e.target.value)}/>
                <button className="btn mt-3" type="submit">Add Pizza</button>
                </form>
            </div>
        </div>
    )
}

export default AddNewPizza
