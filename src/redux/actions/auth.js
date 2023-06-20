import firebase from "firebase/compat/app";
import auth from "../../firebase";
import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../actionType";
import request from "../../utils/httpRequests";
export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const provider = new firebase.auth.GoogleAuthProvider();

    provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");
    provider.addScope("https://www.googleapis.com/auth/youtube");
    const res = await auth.signInWithPopup(provider);

    const accessToken = res.credential.accessToken;

    const channelInfo = await request("/channels", {
      params: {
        part: "snippet",
        mine: true,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const profile = {
      name: channelInfo.data.items[0].snippet.title,
      photoURL: channelInfo.data.items[0].snippet.thumbnails.medium.url,
      email: channelInfo.data.items[0].snippet.customUrl,
    };
    // luu data o sessionStorage
    sessionStorage.setItem("yt-access-token", accessToken);
    sessionStorage.setItem("yt-user", JSON.stringify(profile));

    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });

    dispatch({
      type: LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
};

export const logOut = () => async (dispatch) => {
  await auth.signOut();
  dispatch({
    type: LOG_OUT,
  });
  sessionStorage.removeItem("yt-access-token");
  sessionStorage.removeItem("yt-user");
};
