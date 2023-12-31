import { useOktaAuth } from "@okta/okta-react";
import { Link } from "react-router-dom";

import calendar from "../../../assets/images/calendar.jpg";

const Calendar = () => {
  const { authState } = useOktaAuth();

  return (
    <div className="container my-5">
      <div className="row p-4 align-items-center border shadow-lg">
        <div className="col-lg-7 p-3">
          <h1 className="display-4 fw-bold">Eager to Uncover New Releases?</h1>
          <p className="lead">
            Mark and Track Upcoming Releases! Stay in the loop with the latest
            titles across genres, ensuring you never miss the next must-read.
            Whether you're a bookworm, a book club enthusiast, or simply looking
            for your next great read, we've got you covered. Explore new
            releases and stay connected with the world of literature.
          </p>
          <div className="d-grid gap-2 justify-content-md-start mb-4 mb-lg-3">
            {authState?.isAuthenticated ? (
              <Link
                to="/messages"
                type="button"
                className="btn main-color btn-lg px-4 me-md-2 fw-bold text-white"
              >
                Go to your calendar
              </Link>
            ) : (
              <Link className="btn main-color btn-lg text-white" to="/login">
                Sign up
              </Link>
            )}
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1 shadow-lg box-1 img">
          <img src={`${calendar}`} alt="calendar" />
        </div>
      </div>
    </div>
  );
};
export default Calendar;
