import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages/Home"));
const Chats = lazy(() => import("./pages/Chats"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));

function App() {
    return (
        <>
            <Router>
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/chats" element={<Chats />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </Suspense>
            </Router>
        </>
    );
}

export default App;
