import ExploreTopBooks from "./components/ExploreTopBooks";
import Carousel from "./components/Carousel";
import SearchPromo from "./components/SearchPromo";
import Calendar from "./components/Calendar";

const HomePage = () => {
  return (
    <div>
      <ExploreTopBooks />
      <Carousel />
      <SearchPromo/>
      <Calendar/>
    </div>
  );
};

export default HomePage;
