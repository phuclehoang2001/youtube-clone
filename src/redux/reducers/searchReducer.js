import {
  SEARCH_SUGGESTIONS_SUCCESS,
  SEARCH_SUGGESTIONS_REQUEST,
  SEARCH_SUGGESTIONS_FAIL,
} from "../actionType";
export const searchReducer = (
  prevState = {
    loading: false,
    results: [],
    pageToken: null,
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_SUGGESTIONS_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case SEARCH_SUGGESTIONS_SUCCESS:
      return {
        ...prevState,
        loading: false,
        results: payload.results,
        pageToken: payload.nextPageToken,
        error: null,
      };
    case SEARCH_SUGGESTIONS_FAIL:
      return {
        ...prevState,
        results: [],
        loading: false,
        error: payload,
      };
    default:
      return prevState;
  }
};
