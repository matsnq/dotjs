import { HashRouter } from "frontend-framework";
import History from "./pages/History";
import Notes from "./pages/Notes";

const routes = [
    { path: "/", component: Notes },
    { path: "/history", component: History },
];

export const router = new HashRouter(routes);