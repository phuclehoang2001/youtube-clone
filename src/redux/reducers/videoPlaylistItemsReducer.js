import {
  VIDEO_PLAYLISTITEMS_FAIL,
  VIDEO_PLAYLISTITEMS_SUCCESS,
  VIDEO_PLAYLISTITEMS_REQUEST,
} from "../actionType";

const initialState = {
  loading: false,
  playlistItems: [],
  pageInfo: null,
  error: null,
};

export const videoPlaylistItemsReducer = (prevState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case VIDEO_PLAYLISTITEMS_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case VIDEO_PLAYLISTITEMS_SUCCESS:
      return {
        ...prevState,
        loading: false,
        playlistItems: payload.playlistItems,
        pageInfo: payload.pageInfo,
        error: null,
      };
    case VIDEO_PLAYLISTITEMS_FAIL:
      return {
        ...prevState,
        playlistItems: [],
        loading: false,
        pageInfo: null,
        error: payload,
      };

    default:
      return prevState;
  }
};
