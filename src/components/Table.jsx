 //eslint-disable-next-line
export const Table = ({ items, setItems }) => {
    const fitContentStyle = {
        width: "12%",
        whiteSpace: "nowrap",
        flexWrap:"nowrap",
        justifyContent:"center"
      };
  const setQuantity = (id, value) => {
 //eslint-disable-next-line
    let allItems = items.map((item) =>
      item.id == id ? { ...item, quantity: value } : item
    );
    setItems(allItems);
  };
  const deleteRow = (event) => {
    let key = event.target.closest("tr").dataset.id;
     //eslint-disable-next-line
    setItems(items.filter((item) => item.id != key));
  };
   //eslint-disable-next-line
  const arrayDataItems = items.map((item) => (
    <tr key={item.id} data-id={item.id}>
      <td>{item.name}</td>
      <td  style={{ minWidth: "70px","maxWidth":"100px", "whiteSpace":"nowrap" }} >
        <div className="input-group" >
        <button className=" btn btn-soft-danger input-group-text" onClick={() => setQuantity(item.id, item.quantity - 1)} >-</button>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => setQuantity(item.id, e.target.value)}
            className="form-control"
          />
          <button className=" btn btn-soft-success input-group-text" onClick={() => setQuantity(item.id, item.quantity + 1)} >+</button>
        </div>
      </td>
      <td style={fitContentStyle} >{item.prix} MAD</td>
      <td style={fitContentStyle} >{(item.quantity * item.prix).toFixed(2)} MAD</td>
      <td style={fitContentStyle}>
        <button
          className="btn btn-sm btn-soft-danger"
          onClick={(event) => deleteRow(event)}
        >
          <i className="fa fa-trash"></i>
        </button>
      </td>
    </tr>
  ));
  return (
    <div className="col-12 mt-3 h-100 ">
      <table className="table table-stripped table-hover table-bordered rounded-top overflow-hidden" id="products-table">
        <thead>
          <tr className="bg-primary">
            <th className="text-white">Produit</th>
            <th className="text-white">Quantite</th>
            <th className="text-white">Prix</th>
            <th className="text-white" >Total</th>
            <th className="text-white" >
              Action
            </th>
          </tr>
        </thead>
        <tbody>{arrayDataItems}</tbody>
      </table>
    </div>
  );
};
