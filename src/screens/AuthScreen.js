import { useState } from "react";
import PageLayout from "../common/PageLayout";
import Login from "../components/Login";
import Register from "../components/SignUp";

function AuthScreen() {
    const [screen, setScreen] = useState(true); // true = login, false = register
    return (
        <PageLayout>
            <div>
                <h1 onClick={() => setScreen(!screen)}>AuthScreen</h1>
                {screen ? <Login /> : <Register />}
            </div>
        </PageLayout>
    );
}

export default AuthScreen;
