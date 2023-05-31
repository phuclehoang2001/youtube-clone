import {
  HOME_PLAYLISTS_SUCCESS,
  HOME_PLAYLISTS_FAIL,
  HOME_PLAYLISTS_REQUEST,
} from "../actionType";

const initialState = {
  loading: false,
  playlists: [],
  pageInfo: null,
  error: null,
};

export const homePlaylistsReducer = (prevState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case HOME_PLAYLISTS_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case HOME_PLAYLISTS_SUCCESS:
      return {
        ...prevState,
        loading: false,
        playlists: payload.playlists,
        pageInfo: payload.pageInfo,
        error: null,
      };
    case HOME_PLAYLISTS_FAIL:
      return {
        ...prevState,
        playlists: [],
        loading: false,
        pageInfo: null,
        error: payload,
      };

    default:
      return prevState;
  }
};
