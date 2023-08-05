import {
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  HOME_VIDEOS_FAIL,
  SELECTED_VIDEO_REQUEST,
  SELECTED_VIDEO_SUCCESS,
  SELECTED_VIDEO_FAIL,
  VIDEO_RELEVANCE_SUCCESS,
  VIDEO_RELEVANCE_FAIL,
  VIDEO_RELEVANCE_REQUEST,
  SET_RATING_STATUS,
} from "../actionType";
import request from "../../utils/httpRequests";

export const getPopularVideos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });
    const { data } = await request("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "VN",
        maxResults: 6,
        pageToken: getState().homeVideos.nextPageToken,
      },
    });

    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: "Tất cả",
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};

export const getVideoDetails = async (videoId) => {
  const {
    data: { items },
  } = await request("/videos", {
    params: {
      part: "contentDetails,statistics",
      id: videoId,
    },
  });
  return items;
};

export const getChannelDetails = async (channelId) => {
  const {
    data: { items },
  } = await request("/channels", {
    params: {
      part: "snippet",
      id: channelId,
    },
  });
  return items;
};

export const getVideosByKeyword = (keyword) => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });
    const { data } = await request("/search", {
      params: {
        part: "snippet",
        maxResults: 6,
        regionCode: "VN",
        pageToken: getState().homeVideos.nextPageToken,
        q: keyword,
        type: "video",
        safeSearch: "moderate",
      },
    });

    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: keyword,
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};

export const getVideosByCategoryId =
  (category, categoryId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: HOME_VIDEOS_REQUEST,
      });
      const { data } = await request("/videos", {
        params: {
          part: "snippet",
          maxResults: 12,
          regionCode: "VN",
          chart: "mostPopular",
          pageToken: getState().homeVideos.nextPageToken,
          videoCategoryId: categoryId,
          type: "video",
        },
      });

      dispatch({
        type: HOME_VIDEOS_SUCCESS,
        payload: {
          videos: data.items,
          nextPageToken: data.nextPageToken,
          category: category,
        },
      });
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: HOME_VIDEOS_FAIL,
        payload: error.message,
      });
    }
  };

export const getVideoById = (videoId) => async (dispatch) => {
  try {
    dispatch({
      type: SELECTED_VIDEO_REQUEST,
    });
    const { data } = await request("/videos", {
      params: {
        part: "snippet,statistics",
        id: videoId,
      },
    });

    dispatch({
      type: SELECTED_VIDEO_SUCCESS,
      payload: {
        video: data.items[0],
        categoryId: data.items[0].snippet.categoryId,
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: SELECTED_VIDEO_FAIL,
      payload: error.message,
    });
  }
};

export const checkRatingStatus = (videoId) => async (dispatch, getState) => {
  try {
    const { data } = await request("/videos/getRating", {
      params: {
        id: videoId,
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    dispatch({
      type: SET_RATING_STATUS,
      payload: data.items[0].rating,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: SET_RATING_STATUS,
      payload: "none",
    });
  }
};

export const rateVideo = (videoId, rating) => async (dispatch, getState) => {
  try {
    const accessToken = getState().auth.accessToken;

    await request
      .post("/videos/rate", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          id: videoId,
          rating: rating,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  } catch (error) {
    console.log(error.message);
  }
};

export const getRelatedVideosByChannel =
  (channelId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: VIDEO_RELEVANCE_REQUEST,
      });
      const { data } = await request("/search", {
        params: {
          part: "snippet",
          maxResults: 6,
          regionCode: "VN",
          channelId: channelId,
          type: "video",
          safeSearch: "moderate",
        },
      });

      dispatch({
        type: VIDEO_RELEVANCE_SUCCESS,
        payload: {
          videos: data.items,
          nextPageToken: data.nextPageToken,
        },
      });
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: VIDEO_RELEVANCE_FAIL,
        payload: error.message,
      });
    }
  };

export const getRelatedVideos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: VIDEO_RELEVANCE_REQUEST,
    });
    const { data } = await request("/search", {
      params: {
        part: "snippet",
        maxResults: 6,
        type: "video",
        regionCode: "VN",
        relevanceLanguage: "vi",
        safeSearch: "none",
      },
    });

    dispatch({
      type: VIDEO_RELEVANCE_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: VIDEO_RELEVANCE_FAIL,
      payload: error.message,
    });
  }
};

export const getRelatedVideosByRelevance = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: VIDEO_RELEVANCE_REQUEST,
    });
    const { data } = await request("/search", {
      params: {
        part: "snippet",
        maxResults: 6,
        regionCode: "VN",
        type: "video",
        safeSearch: "moderate",
        relevanceLanguage: "vi",
        relatedToVideoId: "T2c7Vy5ng3M",
      },
    });

    dispatch({
      type: VIDEO_RELEVANCE_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: VIDEO_RELEVANCE_FAIL,
      payload: error.message,
    });
  }
};

export const getRelatedVideosByRecent = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: VIDEO_RELEVANCE_REQUEST,
    });
    const { data } = await request("/search", {
      params: {
        part: "snippet",
        maxResults: 6,
        regionCode: "VN",
        type: "video",
        safeSearch: "moderate",
        relevanceLanguage: "vi",
        order: "date",
      },
    });

    dispatch({
      type: VIDEO_RELEVANCE_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: VIDEO_RELEVANCE_FAIL,
      payload: error.message,
    });
  }
};
