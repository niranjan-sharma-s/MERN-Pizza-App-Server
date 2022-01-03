import React, {useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import Error from '../Components/Error'
import Loading from '../Components/Loading'
import Filter from '../Components/Filter'
import { Link } from 'react-router-dom'
import { deletePizza, getAllPizzas } from '../actions/pizzaActions'




const PizzasList = () => {
    const dispatch = useDispatch()
const pizzasState = useSelector(state =>state.getAllPizzasReducer)
    const {pizzas , loading , error} = pizzasState
    

    useEffect(() => {
     dispatch(getAllPizzas())
    }, [dispatch])
    return (
        <div>
           {error && <Error error='someting went wrong'/>}
           {loading && <Loading/>}
           <table className='table table-bordered table-stripped table-responsive-sm '>
               <thead >
                   <tr>
                       <th>Name</th>
                       <th>Prices</th>
                       <th>Category</th>
                       <th>Actions</th>
                   </tr>
               </thead>
               <tbody>
               {pizzas && pizzas.map(pizza => {
                   return <tr>
                       <td>{pizza.name}</td>
                       <td>
                           Small : {pizza.prices[0]['small']} <br />
                           Medium : {pizza.prices[0]['medium']} <br />
                       Large : {pizza.prices[0]['large']}
                       </td>
                       <td>{pizza.category}</td>
                       <td>
                   <Link to={`/admin/editpizza/${pizza._id}`}>
                   <i className='fa fa-edit m-1'></i>
                           </Link>
                           <i className='fa fa-trash m-1' onClick={() => dispatch(deletePizza(pizza._id))}></i>
                       </td>
                   </tr>
               })}
               </tbody>
           </table>
           
           

        </div>
    )
}

export default PizzasList
