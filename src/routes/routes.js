import config from "../config/";
import HomeScreen from "../../src/components/HomeScreen";
const publicRoutes = [{ path: config.routes.home, component: HomeScreen }];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
