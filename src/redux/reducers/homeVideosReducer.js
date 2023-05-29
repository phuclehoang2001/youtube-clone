import {
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  HOME_VIDEOS_FAIL,
} from "../actionType";

const initialState = {
  videos: [],
  loading: false,
  nextPageToken: null,
  activeCategory: "Tất cả",
};

export const homeVideosReducer = (prevState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case HOME_VIDEOS_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case HOME_VIDEOS_SUCCESS:
      return {
        ...prevState,
        videos:
          prevState.activeCategory === payload.category
            ? [...prevState.videos, ...payload.videos]
            : payload.videos,
        loading: false,
        nextPageToken: payload.nextPageToken,
        activeCategory: payload.category,
      };
    case HOME_VIDEOS_FAIL:
      return {
        ...prevState,
        videos: [],
        loading: false,
        nextPageToken: null,
        error: payload,
      };

    default:
      return prevState;
  }
};
