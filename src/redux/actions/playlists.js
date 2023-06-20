import {
  HOME_PLAYLISTS_SUCCESS,
  HOME_PLAYLISTS_FAIL,
  HOME_PLAYLISTS_REQUEST,
  VIDEO_PLAYLISTITEMS_REQUEST,
  VIDEO_PLAYLISTITEMS_SUCCESS,
  VIDEO_PLAYLISTITEMS_FAIL,
} from "../actionType";
import request from "../../utils/httpRequests";

export const getPlaylists = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_PLAYLISTS_REQUEST,
    });
    const { data } = await request("/playlists", {
      params: {
        part: "snippet,contentDetails",
        hl: "vi_VN",
        mine: true,
        pageToken: "",
        maxResults: 2,
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    for (const playlist of data.items) {
      await request("/playlistItems", {
        params: {
          part: "snippet",
          playlistId: playlist.id,
          maxResults: 1,
          pageToken: "",
        },
        headers: {
          Authorization: `Bearer ${getState().auth.accessToken}`,
        },
      }).then((item) => {
        playlist.playlistItem = item.data;
      });
    }
    dispatch({
      type: HOME_PLAYLISTS_SUCCESS,
      payload: {
        playlists: data.items,
        pageInfo: data.pageInfo,
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: HOME_PLAYLISTS_FAIL,
      payload: error.message,
    });
  }
};

export const getItemsByPlaylistId =
  (playlistId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: VIDEO_PLAYLISTITEMS_REQUEST,
      });
      const { data } = await request("/playlistItems", {
        params: {
          part: "snippet",
          playlistId: playlistId,
          maxResults: 10,
          pageToken: "",
        },
        headers: {
          Authorization: `Bearer ${getState().auth.accessToken}`,
        },
      });
      dispatch({
        type: VIDEO_PLAYLISTITEMS_SUCCESS,
        payload: {
          playlistItems: data.items,
          pageInfo: data.pageInfo,
        },
      });
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: VIDEO_PLAYLISTITEMS_FAIL,
        payload: error.message,
      });
    }
  };
