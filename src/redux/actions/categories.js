import {
  HOME_CATEGORIES_SUCCESS,
  HOME_CATEGORIES_FAIL,
  HOME_CATEGORIES_REQUEST,
} from "../actionType";
import request from "../../utils/httpRequests";

export const getVideoCategories = () => async (dispatch) => {
  try {
    dispatch({
      type: HOME_CATEGORIES_REQUEST,
    });
    const { data } = await request("/videoCategories", {
      params: {
        part: "snippet",
        hl: "vi_VN",
        regionCode: "VN",
        maxResults: 12,
      },
    });

    dispatch({
      type: HOME_CATEGORIES_SUCCESS,
      payload: {
        categories: data.items,
      },
    });
  } catch (error) {
    dispatch({
      type: HOME_CATEGORIES_FAIL,
      payload: error.message,
    });
  }
};
