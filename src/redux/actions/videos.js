import { HOME_VIDEOS_REQUEST } from "../actionType";
import request from "../../utils/httpRequests";
export const getPopularVideos = () => async (dispatch) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });
    const res = await request("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "VN",
        maxResults: 20,
        pageToken: "",
      },
    });

    console.log(res);
  } catch (error) {}
};
