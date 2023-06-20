import {
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  HOME_VIDEOS_FAIL,
  SELECTED_VIDEO_REQUEST,
  SELECTED_VIDEO_SUCCESS,
  SELECTED_VIDEO_FAIL,
  SET_RATING_STATUS,
} from "../actionType";

export const homeVideosReducer = (
  prevState = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory: "Tất cả",
  },
  action
) => {
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

export const selectedVideoReducer = (
  prevState = {
    loading: false,
    video: null,
    rating: "none",
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case SELECTED_VIDEO_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case SELECTED_VIDEO_SUCCESS:
      return {
        ...prevState,
        loading: false,
        video: payload,
      };
    case SELECTED_VIDEO_FAIL:
      return {
        ...prevState,
        video: null,
        loading: false,
        error: payload,
      };
    case SET_RATING_STATUS:
      return { ...prevState, rating: payload };
    default:
      return prevState;
  }
};
