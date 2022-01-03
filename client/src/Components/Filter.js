import React, {useState }
 from 'react'
 import {useDispatch } from 'react-redux'
import { filterPizzas } from '../actions/pizzaActions'

 const Filter = () => {

    const [searchKey , setSearchKey] = useState("")
    const [category , setCategory]= useState("all")
    const dispatch = useDispatch()
    return (
        <div className='container'>
            <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded ">
                <div className="col-md-3 ">
                    <input value ={searchKey} 
                    onChange={(e) => {setSearchKey(e.target.value)}}type="text" className='w-100 form-control border border-dark' placeholder='Search Pizza' />

                </div>
                <div className="col-md-3 ">
                    <select value ={category}  onChange={(e) => {setCategory(e.target.value)}}className="form-control w-100 border border-dark">
                    <option value="all">All</option>
                        <option value="veg">Veg</option>
                        <option value="nonveg">Non-Veg</option>
                    </select>
                </div>
                <div className="col-md-3 ">
                    <button className='btn w-100 border border-dark' onClick={() => dispatch(filterPizzas(searchKey,category))}>Filter</button>
                </div>
            </div>
        </div>
    )
}

export default Filter
