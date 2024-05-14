export const projectReducer = (state = { projects: {} }, action) => {
    switch (action.type) {
      case "ALL_PROJECTS_REQUEST":
        return {
          loading: true
        };
  
      case "ALL_PROJECTS_SUCCESS":
          return {
              ...state,
              loading: false,
              projects: action.payload
          }  
  
      case "ALL_PROJECTS_FAIL":
          return {
              ...state,
              loading: false,
              projects: [],
              error: action.payload
          }
      default:
          return state
    }
  };
  