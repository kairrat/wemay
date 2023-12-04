import { Route, Routes } from "react-router-dom"
import MainPage from "../pages/mainPage"
import NotFoundPage from "../pages/notFoundPage"
import AboutPage from "../pages/AboutPage"
import DiscountCreate from "../pages/discountCreate"
const UNLOGGED_ROUTES = [
    {path:'/', element:<MainPage/>},
    {path:'/about', element:<AboutPage/>},
    {path:'/discount-create', element:<DiscountCreate/>},


]

export default function UnthorizedRoutes() {
    console.log('navigating')

    return (
        <Routes>
            {UNLOGGED_ROUTES.map((item,index) => (
                <Route key={index} path={item.path}  element={item.element} />
            ))}
            <Route path="/*" element={<NotFoundPage/>} />
        </Routes>
    )

}