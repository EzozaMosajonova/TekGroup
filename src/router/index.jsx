import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePages from "../pages/HomePages";
import NewsPage from "../pages/News/News";
import ContactPage from "../pages/Contact/Contact";
import SingleNewsPage from "../pages/SingleNews/SingleNews";
import AboutPage from "../pages/AboutPage/AboutPage";


export const Router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<HomePages/>
            },
             {
                path:"/news",
                element:<NewsPage/>
            },
            {
                path:"/about",
                element:<AboutPage/>
            },
            {
                path:"/contact",
                element:<ContactPage/>
            },
            {
                path:"/news/:id",
                element:<SingleNewsPage/>
            }
        ]
    }
])