import request from "@/lib/axios-config";

export const getAllProjects = () => async (dispatch) => {
  try {
    dispatch({
      type: "ALL_PROJECTS_REQUEST",
    });

    const response = await request.get("/project/projects");

    dispatch({
      type: "ALL_PROJECTS_SUCCESS",
      payload: response.data,
    });

  } catch (error) {
    dispatch({
      type: "ALL_PROJECTS_FAIL",
      payload: error.response.data.error,
    });
  }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: "CLEAR_ERRORS",
  });
};
