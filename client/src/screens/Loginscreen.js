import React , {useState,useEffect} from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { loginUser } from '../actions/userActions';
import Error from '../Components/Error';
import Loading from '../Components/Loading';


const Loginscreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
const loginState = useSelector(state =>state.loginUserReducer)
const {loading , error} = loginState


  useEffect(() => {

if(localStorage.getItem('currentUser')){
  window.location.href="/"
}
  },[])

  const handleLogin = (e) => {
    e.preventDefault()
    const user = {
      email,
      password,
    };
    dispatch(loginUser(user))
   
  }
    return (
            <div>
              <div className="row justify-content-center ">
                <div className="col-5 shadow-lg p-3 mb-5 bg-white rounded ">
                  <h2 className="text-center" style={{ fontSize: "30px" }}>
                    Login
                  </h2>

                 <div className="text-center" >
                   {loading &&(<Loading/>)}
                   </div> 
                  {error && (<Error error="Invalid credentials"/>)}
                  <form>
                  
                    <input
                      type="email"
                      placeholder="email"
                      className="form-control mt-3"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                     
                      required
                    />
                    <input
                      type="password"
                      placeholder="password"
                      className="form-control mt-3"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    
                    <button
                      type="submit"
                      className="btn mt-3 text-uppercase"
                      style={{ width: "100%" }}
                      onClick= {handleLogin}
                    >
                      Login
                    </button>
                    <button
                      type="submit"
                      className="btn mt-3 text-uppercase"
                      style={{ width: "100%" }}
                    >
                    <a style={{color:'white' ,textDecoration:'none'}} href='/register' >New User</a>

                    </button>
                  </form>
                </div>
              </div>
            </div>
          );
    
}

export default Loginscreen
