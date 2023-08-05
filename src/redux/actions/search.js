import {
  SEARCH_SUGGESTIONS_SUCCESS,
  SEARCH_SUGGESTIONS_REQUEST,
  SEARCH_SUGGESTIONS_FAIL,
} from "../actionType";
import request from "../../utils/httpRequests";

export const searchByKeyword = (keyword) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SEARCH_SUGGESTIONS_REQUEST,
    });
    const { data } = await request("/search", {
      params: {
        part: "snippet",
        maxResults: 20,
        regionCode: "VN",
        relevanceLanguage: "vi",
        q: keyword,
        type: "channel,video",
        safeSearch: "moderate",
      },
    });

    dispatch({
      type: SEARCH_SUGGESTIONS_SUCCESS,
      payload: {
        results: data.items,
        nextPageToken: data.nextPageToken,
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: SEARCH_SUGGESTIONS_FAIL,
      payload: error.message,
    });
  }
};
