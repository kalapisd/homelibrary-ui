import "./App.css";

import "./fonts/Space_Grotesk/static/SpaceGrotesk-Bold.ttf";
import "./fonts/Space_Grotesk/static/SpaceGrotesk-Light.ttf";
import "./fonts/Space_Grotesk/static/SpaceGrotesk-Medium.ttf";
import "./fonts/Space_Grotesk/static/SpaceGrotesk-Regular.ttf";
import "./fonts/Space_Grotesk/static/SpaceGrotesk-SemiBold.ttf";

import HomePage from "./layouts/HomePage/HomePage";
import AdminPage from "./layouts/AdminPage/AdminPage";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;
