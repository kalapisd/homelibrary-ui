import "./App.css";
import { useNavigate, Routes, Route } from "react-router-dom";

import "./fonts/Space_Grotesk/static/SpaceGrotesk-Bold.ttf";
import "./fonts/Space_Grotesk/static/SpaceGrotesk-Light.ttf";
import "./fonts/Space_Grotesk/static/SpaceGrotesk-Medium.ttf";
import "./fonts/Space_Grotesk/static/SpaceGrotesk-Regular.ttf";
import "./fonts/Space_Grotesk/static/SpaceGrotesk-SemiBold.ttf";

import { oktaConfig } from "./lib/oktaConfig.js";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { Security, LoginCallback } from "@okta/okta-react";
import LoginWidget from "./Auth/LoginWidget";

import HomePage from "./layouts/HomePage/HomePage";
import SearchBooksPage from "./layouts/SearchBooksPage/SearchBooksPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const oktaAuth = new OktaAuth(oktaConfig);

export const App = () => {
  const customAuthHandler = () => {
    navigate("/login");
  };

  const navigate = useNavigate();

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    navigate(toRelativeUrl(originalUri || "/", window.location.origin));
  };

  return (
      <Security
        oktaAuth={oktaAuth}
        restoreOriginalUri={restoreOriginalUri}
        onAuthRequired={customAuthHandler}>
      <Navbar />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/search" element={<SearchBooksPage />} />
          <Route path="/login" element={<LoginWidget config={oktaConfig} />} />
          <Route path='/login/callback' component={LoginCallback} />
        </Routes>
      </div>
      <Footer />
      </Security>
  );
};
