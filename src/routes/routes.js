import config from "../config/";
import HomePage from "../pages/HomePage";
import SubscriptionPage from "../pages/SubscriptionPage";
import ShortPage from "../pages/ShortPage";
import VideoScreen from "../pages/VideoPage";
const publicRoutes = [
  { path: config.routes.home, component: HomePage },
  { path: config.routes.subscriptions, component: SubscriptionPage },
  { path: config.routes.shorts, component: ShortPage },
  { path: config.routes.videos, component: VideoScreen, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
