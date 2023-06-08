import {
  CHANNEL_DETAILS_FAIL,
  CHANNEL_DETAILS_REQUEST,
  CHANNEL_DETAILS_SUCCESS,
  SET_SUBSCRIPTION_STATUS,
} from "../actionType";
import request from "../../utils/httpRequests";

export const getChannelDetailsById = (channelId) => async (dispatch) => {
  try {
    dispatch({
      type: CHANNEL_DETAILS_REQUEST,
    });
    const { data } = await request("/channels", {
      params: {
        part: "snippet,statistics,contentDetails",
        id: channelId,
      },
    });

    dispatch({
      type: CHANNEL_DETAILS_SUCCESS,
      payload: data.items[0],
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: CHANNEL_DETAILS_FAIL,
      payload: error.message,
    });
  }
};

export const checkSubscriptionStatus =
  (channelId) => async (dispatch, getState) => {
    try {
      const { data } = await request("/subscriptions", {
        params: {
          part: "snippet",
          forChannelId: channelId,
          mine: true,
        },
        headers: {
          Authorization: `Bearer ${getState().auth.accessToken}`,
        },
      });

      dispatch({
        type: SET_SUBSCRIPTION_STATUS,
        payload: data.items.length !== 0,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
