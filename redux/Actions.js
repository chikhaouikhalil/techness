// GET USER DATA
export const setUserData = (u) => async (dispatch) => {
  dispatch({
    type: "SET_USER_DATA",
    payload: u,
  });
};
