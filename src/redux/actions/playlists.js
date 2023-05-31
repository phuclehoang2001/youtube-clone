import {
  HOME_PLAYLISTS_SUCCESS,
  HOME_PLAYLISTS_FAIL,
  HOME_PLAYLISTS_REQUEST,
} from "../actionType";
import request from "../../utils/httpRequests";

export const getPlaylists = () => async (dispatch) => {
  try {
    dispatch({
      type: HOME_PLAYLISTS_REQUEST,
    });
    const { data } = await request("/playlists", {
      params: {
        part: "snippet,contentDetails",
        hl: "vi_VN",
        id: "PLnmXaJYr8TimwOdSFXhESvvQ6enkO0xvE,PLY-AuYi7sTugPLS6_J0oa1wFmWkCExstr",
        pageToken: "",
      },
    });

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
