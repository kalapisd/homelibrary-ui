import background from "../../../assets/images/wallpaper.jpg";
import { StarsReview } from "../../Utils/StarsReview";


//TODO: find default book picture

export const ReturnBook = (props) => {
  const data = props.book.img;

  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3 ">
      <div className="text-center">
        {props.book.img ? (
          <img
            src={`data:image/jpeg;base64,${data}`}
            style={{maxHeight: 200}}
            alt="book"
          />
        ) : (
          <img src={`${background}`} style={{maxWidth: 200}} alt="No book image" />
        )}
        <h6 className="mt-3 display-8">{props.book.title}</h6>
        <p className="book-item mt-3">{props.book.author}</p>
        <div className="mb-2">
          <StarsReview rating={props.book.currentRating} size={20} />
        </div>
        <a className="btn btn-secondary" href="/home">
          Details
        </a>
        </div>
      </div>
  );
};
