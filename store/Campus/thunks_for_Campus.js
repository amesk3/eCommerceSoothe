import { getAllCampus } from "./actions_for_Campus";
import axios from "axios";

export const getCampuses = () => {
  console.log("hitting THUNK");
  return async dispatch => {
    const { data } = await axios.get("/api/campuses");
    dispatch(getAllCampus(data));
  };
};

export default {
  getCampuses
};
