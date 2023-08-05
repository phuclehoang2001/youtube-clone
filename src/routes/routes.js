import config from "../config/";
import HomePage from "../pages/HomePage";
import SubscriptionPage from "../pages/SubscriptionPage";
import ShortPage from "../pages/ShortPage";
import VideoPage from "../pages/VideoPage";
import SearchPage from "../pages/SearchPage";
const publicRoutes = [
  { path: config.routes.home, component: HomePage },
  { path: config.routes.subscriptions, component: SubscriptionPage },
  { path: config.routes.shorts, component: ShortPage },
  { path: config.routes.search, component: SearchPage },
  { path: config.routes.videos, component: VideoPage, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
