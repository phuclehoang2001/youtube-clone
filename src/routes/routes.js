import config from "../config/";
import HomePage from "../pages/HomePage";
import SubscriptionPage from "../pages/SubscriptionPage";
import ShortPage from "../pages/ShortPage";
const publicRoutes = [
  { path: config.routes.home, component: HomePage },
  { path: config.routes.subscriptions, component: SubscriptionPage },
  { path: config.routes.shorts, component: ShortPage },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
