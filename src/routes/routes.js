import config from "../config/";
import HomeScreen from "../../src/components/HomeScreen";
import Subscription from "../../src/components/Subscriptions";
import Short from "../../src/components/Shorts";
const publicRoutes = [
  { path: config.routes.home, component: HomeScreen },
  { path: config.routes.subscriptions, component: Subscription },
  { path: config.routes.shorts, component: Short },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
