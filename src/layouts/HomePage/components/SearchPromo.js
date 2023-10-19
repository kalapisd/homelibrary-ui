import readpromo from "../../../assets/images/pile-books-wooden-table.jpg";

const SearchPromo = () => {
  return (
    <div>
      <div className="d-none d-lg-block">
        <div className="row g-0 mt-5">
          <div className="col-sm-6 col-md-6">
            <div className=".box1 img">
              <img
                src={`${readpromo}`}
              />
            </div>
          </div>
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>Discover The World of Reading</h1>
              <p className="lead">
                Dive into your extensive library collection for your reading
                pleasure. Whether you're searching for adventure, knowledge, or
                inspiration, this library offers a diverse selection of books to
                explore. From timeless classics to contemporary bestsellers,
                you're sure to find something captivating. Discover and lose
                yourself in the pages of our collection today.
              </p>
              <a className="btn btn-secondary btn-lg text-white" href="#">
                Sign up
              </a>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div
            className="col-4 col-md-4 container d-flex 
                        justify-content-center align-items-center"
          ></div>
          <div className="col-sm-6 col-md-6">
            <div className="col-image-right"></div>
          </div>
        </div>
      </div>

      {/* Mobile SearchPromo */}
      <div className="d-lg-none">
        <div className="container">
          <div className="m-2">
            <div className="col-image-left"></div>
            <div className="mt-2">
              <h1>Discover The World of Reading?</h1>
              <p className="lead">
                Dive into your extensive library collection for your reading
                pleasure. Whether you're searching for adventure, knowledge, or
                inspiration, this library offers a diverse selection of books to
                explore. From timeless classics to contemporary bestsellers,
                you're sure to find something captivating. Discover and lose
                yourself in the pages of our collection today.
              </p>
              <a className="btn btn-secondary btn-sm text-white" href="#">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPromo;
