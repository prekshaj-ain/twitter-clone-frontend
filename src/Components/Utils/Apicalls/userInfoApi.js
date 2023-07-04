import { api as axios } from "../instance";
import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "../userSlice";

export const getUserById = async (dispatch, id) => {
  dispatch(FETCH_START());
  try {
    const response = await axios.get(`/users/${id}`);
    const { _id, username, name, profilePicture } = response.data.data.user;
    dispatch(
      FETCH_SUCCESS({
        userId: _id,
        username,
        name,
        profilePicture,
      })
    );
    console.log(response);
  } catch (err) {
    if (err.response) {
      dispatch(FETCH_FAIL(err.response.data.error));
    } else {
      dispatch(FETCH_FAIL(err));
    }
  }
};
