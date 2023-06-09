import {
  COMMENT_LIST_RELEVANCE_FAIL,
  COMMENT_LIST_RELEVANCE_REQUEST,
  COMMENT_LIST_RELEVANCE_SUCCESS,
  COMMENT_LIST_TIME_FAIL,
  COMMENT_LIST_TIME_SUCCESS,
  COMMENT_LIST_TIME_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAIL,
} from "../actionType";
export const commentListReducer = (
  prevState = {
    loading: false,
    comments: null,
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case COMMENT_LIST_RELEVANCE_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case COMMENT_LIST_RELEVANCE_SUCCESS:
      return {
        ...prevState,
        loading: false,
        comments: payload,
      };
    case COMMENT_LIST_RELEVANCE_FAIL:
      return {
        ...prevState,
        comments: null,
        loading: false,
        error: payload,
      };

    case COMMENT_LIST_TIME_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case COMMENT_LIST_TIME_SUCCESS:
      return {
        ...prevState,
        loading: false,
        comments: payload,
      };
    case COMMENT_LIST_TIME_FAIL:
      return {
        ...prevState,
        comments: null,
        loading: false,
        error: payload,
      };
    case CREATE_COMMENT_SUCCESS:
      return {
        ...prevState,
        comments: [payload.comment, ...prevState.comments],
      };
    case CREATE_COMMENT_FAIL:
      return {
        ...prevState,
        loading: false,
        error: payload,
      };

    default:
      return prevState;
  }
};
