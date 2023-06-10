import {
  COMMENT_LIST_RELEVANCE_FAIL,
  COMMENT_LIST_RELEVANCE_REQUEST,
  COMMENT_LIST_RELEVANCE_SUCCESS,
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

    default:
      return prevState;
  }
};
