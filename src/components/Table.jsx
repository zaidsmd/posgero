

export const Table = ({items,setItems})=>{
    const deleteRow = (event)=>{
        let key = event.target.closest('tr').dataset.id;
        setItems(items.filter(item => item.id != key))
    }
    const arrayDataItems = items.map(item => 
        <tr key={item.id} data-id={item.id} >
            <td>{item.name}</td>
            <td>
                <input type="text" className="form-control" />
            </td>
            <td>{item.prix}</td>
            <td>
                <button className="btn btn-soft-danger" onClick={(event)=>deleteRow(event)} >Supprimer</button>
            </td>
        </tr>
      )
      const actionsStyle = {
        width:"1%",
        whiteSpace:"nowrap",
      }
    return (
        <div className="col-12">
            <table className="table table-stripped table-bordered" >
                <thead>
                    <tr>
                        <th>Produit</th>
                        <th>Quantite</th>
                        <th>Prix</th>
                        <th style={actionsStyle} >Action</th>
                    </tr>
                </thead>
                <tbody>
                {arrayDataItems}
                </tbody>
            </table>
        </div>
    )
}