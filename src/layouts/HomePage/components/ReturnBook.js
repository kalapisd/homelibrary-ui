import estaub from "../../../assets/images/EStaubsmall.jpg";

const ReturnBook = () => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="text-center">
        <img src={`${estaub}`} width="200" alt="book" />
        <h6 className="mt-2">Book</h6>
        <p className="fs-6">*Rating here*</p>
        <a className="btn btn-secondary" href="#">
          Details
        </a>
      </div>
    </div>
  );
};

export default ReturnBook;
