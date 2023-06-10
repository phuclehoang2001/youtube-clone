import {
  COMMENT_LIST_RELEVANCE_FAIL,
  COMMENT_LIST_RELEVANCE_REQUEST,
  COMMENT_LIST_RELEVANCE_SUCCESS,
  COMMENT_LIST_TIME_FAIL,
  COMMENT_LIST_TIME_REQUEST,
  COMMENT_LIST_TIME_SUCCESS,
  CREATE_COMMENT_FAIL,
  CREATE_COMMENT_SUCCESS,
} from "../actionType";
import request from "../../utils/httpRequests";

export const getCommentsOfVideoById = (videoId) => async (dispatch) => {
  try {
    dispatch({
      type: COMMENT_LIST_RELEVANCE_REQUEST,
    });
    const { data } = await request("/commentThreads", {
      params: {
        part: "snippet",
        videoId: videoId,
        order: "relevance",
        maxResults: 10,
      },
    });

    dispatch({
      type: COMMENT_LIST_RELEVANCE_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: COMMENT_LIST_RELEVANCE_FAIL,
      payload: error.message,
    });
  }
};

export const getLatestCommentsOfVideoById = (videoId) => async (dispatch) => {
  try {
    dispatch({
      type: COMMENT_LIST_TIME_REQUEST,
    });
    const { data } = await request("/commentThreads", {
      params: {
        part: "snippet",
        videoId: videoId,
        order: "time",
        maxResults: 10,
      },
    });

    dispatch({
      type: COMMENT_LIST_TIME_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: COMMENT_LIST_TIME_FAIL,
      payload: error.message,
    });
  }
};

export const addComment = (videoId, text) => async (dispatch, getState) => {
  try {
    const obj = {
      snippet: {
        videoId: videoId,
        topLevelComment: {
          snippet: {
            textOriginal: text,
          },
        },
      },
    };

    await request.post("/commentThreads", obj, {
      params: {
        part: "snippet",
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });

    dispatch({
      type: CREATE_COMMENT_SUCCESS,
    });
    setTimeout(() => dispatch(getCommentsOfVideoById(videoId)), 3000);
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: CREATE_COMMENT_FAIL,
      payload: error.message,
    });
  }
};
