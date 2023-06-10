import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import { homeVideosReducer } from "./reducers/videosReducer";
import { selectedVideoReducer } from "./reducers/videosReducer";
import { homePlaylistsReducer } from "./reducers/homePlaylistsReducer";
import { homeVideoCategoriesReducer } from "./reducers/homeVideoCategoriesReducer";
import { videoPlaylistItemsReducer } from "./reducers/videoPlaylistItemsReducer";
import { channelDetailsReducer } from "./reducers/channelReducer";
import { commentListReducer } from "./reducers/commentsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
  homePlaylists: homePlaylistsReducer,
  homeVideoCategories: homeVideoCategoriesReducer,
  videoPlaylistItems: videoPlaylistItemsReducer,
  selectedVideo: selectedVideoReducer,
  channelDetails: channelDetailsReducer,
  commentList: commentListReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
