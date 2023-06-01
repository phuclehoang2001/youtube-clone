import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import { homeVideosReducer } from "./reducers/homeVideosReducer";
import { homePlaylistsReducer } from "./reducers/homePlaylistsReducer";
import { homeVideoCategoriesReducer } from "./reducers/homeVideoCategoriesReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
  homePlaylists: homePlaylistsReducer,
  homeVideoCategories: homeVideoCategoriesReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
