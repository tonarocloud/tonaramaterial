import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Connect from './pages/Connect';
import RentIndex from './pages/rent/index';
import RentPlan from "./pages/rent/Plan";
import RentOperating from "./pages/rent/Operating";
import RentPayment from "./pages/rent/Payment";
import Manage from "./pages/Manage";
import History from "./pages/History";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/connect",
        element: <Connect />
    },
    {
        path: "/rent",
        element: <RentIndex />
    },
    {
        path: "/rent/plan",
        element: <RentPlan />
    },
    {
        path: "/rent/os",
        element: <RentOperating />
    },
    {
        path: "/rent/confirm",
        element: <RentPayment />
    },
    {
        path: "/manage",
        element: <Manage />
    },
    {
        path: "/history",
        element: <History />
    }
]);

export default router;