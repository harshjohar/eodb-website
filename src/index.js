import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AuthScreen from "./screens/AuthScreen";
import Error from "./screens/Error";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomeScreen />} />
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="about" element={<AboutScreen />} />
                    <Route path="contact" element={<ContactScreen/>}/>
                    <Route path="auth" element={<AuthScreen />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
