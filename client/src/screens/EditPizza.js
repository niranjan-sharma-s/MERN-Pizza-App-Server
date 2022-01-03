import React, {useEffect , useState} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { editPizzaActions, getPizzaById } from '../actions/pizzaActions'
import Error from '../Components/Error'
import Loading from '../Components/Loading'
import Success from '../Components/Success'

const EditPizza = ({match}) => {

    const getPizzaByIdState = useSelector(state => state.getPizzaByIdReducer)
const {loading , error , pizza} = getPizzaByIdState


const editPizzaState = useSelector(state => state.editPizzaReducer)
const {editLoading , editError , editSuccess} = editPizzaState

    const [name, setName] = useState("")
const [smallPrice, setSmallPrice] = useState("")
const [mediumPrice, setMediumPrice] = useState("")
const [largePrice, setLargePrice] = useState("")
const [image, setImage] = useState("")
const [description, setDescription] = useState("")
const [category, setCategory] = useState("")

    const dispatch = useDispatch()
    useEffect(() => {

        if(pizza && pizza._id === match.params.pizzaid){
            setName(pizza.name)
            setImage(pizza.image)
            setDescription(pizza.description)
            setCategory(pizza.category)
            setSmallPrice(pizza.prices[0]['small'])
            setMediumPrice(pizza.prices[0]['medium'])
            setLargePrice(pizza.prices[0]['large'])
        }else{
            dispatch(getPizzaById(match.params.pizzaid))

        }


        
    }, [dispatch , pizza,match.params.pizzaid])

    const formHandler = (e) => {
        e.preventDefault()
        const editedPizza ={
            _id:match.params.pizzaid,
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
        dispatch(editPizzaActions(editedPizza))
    }
    
    return (
        <div>
           
            <div className='text-center shadow-lg p-3 mb-5 bg-white rounded'>

{loading && <Loading/>}
{error && <Error error='something went wrong'/>}
{editSuccess && <Success success="pizza edited successfully"/>}
{editLoading && <Loading/>}
{editError && <Error error="unable to edit pizza"/>}
<form onSubmit={formHandler}action="">
    <input type="text" className="form-control m-1"  placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
    <input type="text"className="form-control m-1"  placeholder="small varient price" value={smallPrice} onChange={(e) => setSmallPrice(e.target.value)}/>
    <input type="text" className="form-control m-1" placeholder="medium varient price" value={mediumPrice} onChange={(e) => setMediumPrice(e.target.value)}/>
    <input type="text" className="form-control m-1" placeholder="large varient price" value={largePrice} onChange={(e) => setLargePrice(e.target.value)}/>
    <input type="text" className="form-control m-1" placeholder="image url" value={image} onChange={(e) => setImage(e.target.value)}/>
    <input type="text" className="form-control m-1" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
    <input type="text" className="form-control m-1" placeholder="category" value={category} onChange={(e) => setCategory(e.target.value)}/>
<button className="btn mt-3" type="submit">Edit Pizza</button>
</form>
</div>
        </div>
    )
}

export default EditPizza
