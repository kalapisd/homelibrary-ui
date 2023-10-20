import background from "../../../assets/images/wallpaper.jpg"; 
import { Link } from "react-router-dom";

const ExploreTopBooks = () => {
  return (
    <div
      className="p-5 mb-4 bg-dark header"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover"
      }}
    >
      <div
        className="container-fluid py-5 text-black 
                d-flex justify-content-center align-items-center"
      >
        <div >
          <h1 className="display-5 fw-bold">Find your next adventure</h1>
          <p className="col-md-8 fs-4 text-black">Where would you like to go next?</p>
          <Link type='button' className='btn btn-light btn-lg text-black' to='/search'>
                        Explore top books</Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreTopBooks;
