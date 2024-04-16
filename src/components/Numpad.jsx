/* eslint-disable-next-line */
export const Numpad = ({setSearchValue, clearSearch,searchValue,validateSearch}) => {
    const  handleClick= (number)=> {
        let search = searchValue + number;
        setSearchValue(search);
      }
  return (
    <>
      <div className="col-4">
        <div
          className="card py-4"
          style={{ cursor: "pointer" }}
          onClick={() => handleClick(7)}
        >
          <div
            style={{ pointerEvents: "none" }}
            className="card-body d-flex align-items-center justify-content-centrt"
          >
            <h4
              className="m-0 text-center w-100"
              style={{ pointerEvents: "none" }}
            >
              7
            </h4>
          </div>
        </div>
      </div>

      <div className="col-4">
        <div
          className="card py-4"
          style={{ cursor: "pointer" }}
          onClick={() => handleClick(8)}
        >
          <div
            style={{ pointerEvents: "none" }}
            className="card-body d-flex align-items-center justify-content-centrt"
          >
            <h4
              className="m-0 text-center w-100"
              style={{ pointerEvents: "none" }}
            >
              8
            </h4>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div
          className="card py-4"
          style={{ cursor: "pointer" }}
          onClick={() => handleClick(9)}
        >
          <div
            style={{ pointerEvents: "none" }}
            className="card-body d-flex align-items-center justify-content-centrt"
          >
            <h4
              className="m-0 text-center w-100"
              style={{ pointerEvents: "none" }}
            >
              9
            </h4>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div
          className="card py-4"
          style={{ cursor: "pointer" }}
          onClick={() => handleClick(4)}
        >
          <div
            style={{ pointerEvents: "none" }}
            className="card-body d-flex align-items-center justify-content-centrt"
          >
            <h4
              className="m-0 text-center w-100"
              style={{ pointerEvents: "none" }}
            >
              4
            </h4>
          </div>
        </div>
      </div>

      <div className="col-4">
        <div
          className="card py-4"
          style={{ cursor: "pointer" }}
          onClick={() => handleClick(5)}
        >
          <div
            style={{ pointerEvents: "none" }}
            className="card-body d-flex align-items-center justify-content-centrt"
          >
            <h4
              className="m-0 text-center w-100"
              style={{ pointerEvents: "none" }}
            >
              5
            </h4>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div
          className="card py-4"
          style={{ cursor: "pointer" }}
          onClick={() => handleClick(6)}
        >
          <div
            style={{ pointerEvents: "none" }}
            className="card-body d-flex align-items-center justify-content-centrt"
          >
            <h4
              className="m-0 text-center w-100"
              style={{ pointerEvents: "none" }}
            >
              6
            </h4>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div
          className="card py-4"
          style={{ cursor: "pointer" }}
          onClick={() => handleClick(1)}
        >
          <div
            style={{ pointerEvents: "none" }}
            className="card-body d-flex align-items-center justify-content-centrt"
          >
            <h4
              className="m-0 text-center w-100"
              style={{ pointerEvents: "none" }}
            >
              1
            </h4>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div
          className="card py-4"
          style={{ cursor: "pointer" }}
          onClick={() => handleClick(2)}
        >
          <div
            style={{ pointerEvents: "none" }}
            className="card-body d-flex align-items-center justify-content-centrt"
          >
            <h4
              className="m-0 text-center w-100"
              style={{ pointerEvents: "none" }}
            >
              2
            </h4>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div
          className="card py-4"
          style={{ cursor: "pointer" }}
          onClick={() => handleClick(3)}
        >
          <div
            style={{ pointerEvents: "none" }}
            className="card-body d-flex align-items-center justify-content-centrt"
          >
            <h4
              className="m-0 text-center w-100"
              style={{ pointerEvents: "none" }}
            >
              3
            </h4>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div
          className="card bg-soft-danger py-4"
          style={{ cursor: "pointer" }}
          onClick={() => clearSearch()}
        >
          <div
            style={{ pointerEvents: "none" }}
            className="card-body d-flex align-items-center justify-content-centrt"
          >
            <h4
              className="m-0 text-center w-100"
              style={{ pointerEvents: "none" }}
            >
              Annuler
            </h4>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div
          className="card py-4"
          style={{ cursor: "pointer" }}
          onClick={() => handleClick(0)}
        >
          <div
            style={{ pointerEvents: "none" }}
            className="card-body d-flex align-items-center justify-content-centrt"
          >
            <h4
              className="m-0 text-center w-100"
              style={{ pointerEvents: "none" }}
            >
              0
            </h4>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div
          className="card bg-soft-success py-4"
          style={{ cursor: "pointer" }}
          onClick={() => validateSearch()}
        >
          <div
            style={{ pointerEvents: "none" }}
            className="card-body d-flex align-items-center justify-content-centrt"
          >
            <h4
              className="m-0 text-center w-100"
              style={{ pointerEvents: "none" }}
            >
              Valider
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};
