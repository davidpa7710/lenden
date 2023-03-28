import { Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import Home from "../pages/Home"
import SignUp from "../pages/SignUp"

const RoutesIndex = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    )
}

export default RoutesIndex