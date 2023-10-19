import "./App.css";

import "./fonts/Space_Grotesk/static/SpaceGrotesk-Bold.ttf";
import "./fonts/Space_Grotesk/static/SpaceGrotesk-Light.ttf";
import "./fonts/Space_Grotesk/static/SpaceGrotesk-Medium.ttf";
import "./fonts/Space_Grotesk/static/SpaceGrotesk-Regular.ttf";
import "./fonts/Space_Grotesk/static/SpaceGrotesk-SemiBold.ttf";

import HomePage from "./layouts/HomePage/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
