import request from "@/lib/axios-config";
  
//Login
export const login = (user) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_USER_REQUEST" });

    console.log(user)

    const { data } = await request.post(`auth/login`, user);

      dispatch({
        type: "LOGIN_USER_SUCCESS",
        payload: data.user,
      });

      localStorage.setItem("accessToken", data.accessToken);


  } catch (error) {
    dispatch({
      type: "LOGIN_USER_FAIL",
      payload: error.response,
    });
  }
};

//Register
export const register = (user) => async (dispatch) => {
  try {
    dispatch({
      type: "REGISTER_USER_REQUEST",
    });

    const { data } = await request.post(`auth/register`, user);

      dispatch({
        type: "REGISTER_USER_SUCCESS",
        payload: data.user,
      });
      
      localStorage.setItem("accessToken", data.accessToken);

  } catch (error) {
    dispatch({
      type: "REGISTER_USER_FAIL",
      payload: error.response.data.message,
    });
  }
};

//Update Profile
export const updateProfile = (user) => async(dispatch) => {

  try {
    dispatch({
      type: "UPDATE_PROFILE_REQUEST",
    });

    const { data } = await request.put(`/profile/update`, user);
    
    dispatch({
      type: "UPDATE_PROFILE_SUCCESS",
      payload: true,
    });

  } catch (error) {
    console.log(error)
    dispatch({
      type: "UPDATE_PROFILE_FAIL",
      payload: error.response.data.error,
    });
  }
}

export const updateInterests = (interests) =>  async(dispatch) => {
  try {
    dispatch({
      type: "UPDATE_PROFILE_REQUEST",
    });

    console.log(interests)
    const { data } = await request.put(`/profile/addinterests`, interests);
    
    dispatch({
      type: "UPDATE_PROFILE_SUCCESS",
      payload: true,
    });

  } catch (error) {
    console.log(error)
    dispatch({
      type: "UPDATE_PROFILE_FAIL",
      payload: error.response.data.error,
    });
  }
}

export const updateSkills = (skills) =>  async(dispatch) => {
  try {
    dispatch({
      type: "UPDATE_PROFILE_REQUEST",
    });

    // console.log(skills)
    const { data } = await request.put(`/profile/addskills`, skills);
    
    dispatch({
      type: "UPDATE_PROFILE_SUCCESS",
      payload: true,
    });

  } catch (error) {
    console.log(error)
    dispatch({
      type: "UPDATE_PROFILE_FAIL",
      payload: error.response.data.error,
    });
  }
}

export const updateProject = (project) =>  async(dispatch) => {
  try {
    dispatch({
      type: "UPDATE_PROFILE_REQUEST",
    });

    console.log(project)
    const { data } = await request.put(`/profile/updateproject`, project);
    
    dispatch({
      type: "UPDATE_PROFILE_SUCCESS",
      payload: true,
    });

  } catch (error) {
    console.log(error)
    dispatch({
      type: "UPDATE_PROFILE_FAIL",
      payload: error.response.data.error,
    });
  }
}

//Load user
export const loadUser = () => async (dispatch) => {
  try{
    dispatch({
      type: "LOAD_USER_REQUEST"
    })

    const {data} = await request.get(`/profile/me`);
    console.log(data);

    dispatch({
      type: "LOAD_USER_SUCCESS",
      payload: data.user
    })

  }catch(error){
    console.log(error)
    dispatch({
      type: "LOAD_USER_FAIL",
      payload: error.response.data.error
    })
  }
}

//Logout
export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOGOUT_REQUEST"
    })

    localStorage.removeItem("accessToken")

    dispatch({
      type: "LOGOUT_SUCCESS"
    })

  } catch (error) {
    dispatch({
      type: "LOGOUT_FAIL",
      payload: "Logout request failed"
    })
  }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
      type: "CLEAR_ERRORS"
  })
}