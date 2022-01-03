import React ,{ useEffect} from "react"
import { useDispatch , useSelector } from "react-redux"
import { getAllUsers , deleteUser } from "../actions/userActions"
import Error from "../Components/Error"
import Loading from "../Components/Loading"


const UsersList = () => {
  const dispatch =  useDispatch()
  const userState = useSelector(state => state.getAllUsersReducer)
  const {loading , error , users } = userState

  useEffect(() => {
      
    dispatch(getAllUsers())
      
  }, [dispatch])
    return (
        
        <div>
        
            {loading && <Loading/>}
            {error && <Error error='unable to fetch users'/>}
            <table className="table table-striped table-bordered table-responsive-sm">
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user => {
                        return (
                            <tr>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><i className="fa fa-trash" onClick={() =>dispatch(deleteUser(user._id))}> </i></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default UsersList
