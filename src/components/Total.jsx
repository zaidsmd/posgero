/*eslint-disable*/
export const Total = ({ items, setItems }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
            <div className="col-12 d-flex justify-content-between align-items-center">
                <h4 className="m-0" >Total :</h4>
                <h4 className="m-0" >{items.reduce((a, b) => a + b.quantity * b.prix, 0).toFixed(2)} MAD</h4>
            </div>
            <div className="col-12 d-flex justify-content-between align-items-center">
                <h4 className="m-0">Nombre d'articles :</h4>
                <h4 className="m-0"> {items.reduce((a, b) => a + b.quantity, 0)}</h4>
            </div>
        </div>
      </div>
    </div>
  );
};
