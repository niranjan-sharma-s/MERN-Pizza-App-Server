import axios from "axios";
export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    const response = await axios.post("/api/users/register", user);
    dispatch({ type: "USER_REGISTER_SUCCESSFUL", payload:response.data});
    setTimeout(() => {
      window.location.href="/login"
    }, 1000);
    
  } catch (error) {
    console.error(error);
    dispatch({ type: "USER_REGISTER_FAILED", payload: error });
  }
};


export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const response = await axios.post("/api/user/login", user);
    dispatch({ type: "USER_LOGIN_SUCCESSFUL", payload: response.data });
    localStorage.setItem('currentUser', JSON.stringify(response.data))
    window.location.href="/"
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: error });
    

  }
  
};

export const logoutUser = () =>dispatch => {
  localStorage.removeItem('currentUser')
  window.location.href='/login'
}


export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: "GET_USERS_REQUEST" });

  try {
    const response = await axios.get(`/api/users/getallusers`);
    dispatch({ type: "GET_USERS_SUCCESSFUL", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_USERS_FAILED", payload: error });
  }
};

export const deleteUser = (userId) => async (dispatch) => {
   try {
    
    const response = await axios.delete(`/api/users/deleteuser` , userId)
    console.log(response) 
    alert('User deleted')
     //window.location.reload()
   } catch (error) {
    alert("Unable to delete User")
    console.log(error)
   }
}