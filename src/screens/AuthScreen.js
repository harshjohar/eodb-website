import { Route, Routes } from "react-router-dom";
import PageLayout from "../common/PageLayout";
import Login from "../components/Login";
import Register from "../components/SignUp";

function AuthScreen() {
    return (
        <PageLayout>
            <div>
                <Routes>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Routes>
            </div>
        </PageLayout>
    );
}

export default AuthScreen;
