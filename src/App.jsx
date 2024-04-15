import { useState } from "react";
import "../src/assets/app.css";
import "./App.css";
import "../src/assets/bootstrap-Hhgk6Xlo.css";
import "../src/assets/icons-BCGlsIsy.css";import { Table } from "./components/Table";
1

function App() {
    const [searchValue,setSearchValue] = useState('');
    function handleClick(number){
        let search = document.getElementById('search').value + number;
        setSearchValue(search);
    }
    const clearSearch = ()=>{
        setSearchValue('');
    }
    const validateSearch = ()=>{
        fetch('http://localhost:3000/products?'+ new URLSearchParams({
            reference: searchValue
        })).then(response=>{
            return response.json()
        }).then(response=>{
            if(response.length === 1){
                if(items.some(e=>e.id == response.id)){
                    alert('already added')
                }else{
                    setItems([...items,response[0]])
                }
            }
        }).finally(()=>{
            clearSearch()
        })
    }
    const [items,setItems] = useState([]);
  return (
    <>
    <div className="row">
    <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              <div className="d-flex switch-filter justify-content-between align-items-center">
                <h5 className="m-0">Point de vente</h5>
                <div className="page-title-right">
                  <a href="">
                    <button className="btn btn-soft-success">Ajouter</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-7">
        <div className="card h-100">
          <div className="card-body">
            <div className="row">
              <div className="col-5">
                <div className="input-group">
                  <select name="" id=""  defaultValue={0} className="form-select">
                    <option value="0">
                      Passager
                    </option>
                  </select>
                  <button className="input-group-text btn btn-light">+</button>
                </div>
              </div>
              <div className="col-7">
                <input
                  name=""
                  id="search"
                  className="form-control"
                  rows="1" value={searchValue}
                  onChange={(event) =>setSearchValue(event.target.value)}
                  />
              </div>
                <Table items={items} setItems={setItems} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-5">
        <div className="row">
        <div className="col-4">
                <div className="card py-4" style={{cursor:'pointer'}} onClick={()=>handleClick(7)}>
                    <div style={{pointerEvents:'none'}} className="card-body d-flex align-items-center justify-content-centrt">
                        <h5 className="m-0 text-center w-100" style={{pointerEvents:'none'}}>7</h5>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card py-4" style={{cursor:'pointer'}} onClick={()=>handleClick(8)}>
                    <div style={{pointerEvents:'none'}} className="card-body d-flex align-items-center justify-content-centrt">
                        <h5 className="m-0 text-center w-100" style={{pointerEvents:'none'}}>8</h5>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card py-4" style={{cursor:'pointer'}} onClick={()=>handleClick(9)}>
                    <div style={{pointerEvents:'none'}} className="card-body d-flex align-items-center justify-content-centrt">
                        <h5 className="m-0 text-center w-100" style={{pointerEvents:'none'}}>9</h5>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card py-4" style={{cursor:'pointer'}} onClick={()=>handleClick(4)}>
                    <div style={{pointerEvents:'none'}} className="card-body d-flex align-items-center justify-content-centrt">
                        <h5 className="m-0 text-center w-100" style={{pointerEvents:'none'}}>4</h5>
                    </div>
                </div>
            </div>
        
            <div className="col-4">
                <div className="card py-4" style={{cursor:'pointer'}} onClick={()=>handleClick(5)}>
                    <div style={{pointerEvents:'none'}} className="card-body d-flex align-items-center justify-content-centrt">
                        <h5 className="m-0 text-center w-100" style={{pointerEvents:'none'}}>5</h5>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card py-4" style={{cursor:'pointer'}} onClick={()=>handleClick(6)}>
                    <div style={{pointerEvents:'none'}} className="card-body d-flex align-items-center justify-content-centrt">
                        <h5 className="m-0 text-center w-100" style={{pointerEvents:'none'}}>6</h5>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card py-4" style={{cursor:'pointer'}} onClick={()=>handleClick(1)}>
                    <div style={{pointerEvents:'none'}} className="card-body d-flex align-items-center justify-content-centrt">
                        <h5 className="m-0 text-center w-100" style={{pointerEvents:'none'}}>1</h5>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card py-4" style={{cursor:'pointer'}} onClick={()=>handleClick(2)}>
                    <div style={{pointerEvents:'none'}} className="card-body d-flex align-items-center justify-content-centrt">
                        <h5 className="m-0 text-center w-100" style={{pointerEvents:'none'}}>2</h5>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card py-4" style={{cursor:'pointer'}} onClick={()=>handleClick(3)}>
                    <div style={{pointerEvents:'none'}} className="card-body d-flex align-items-center justify-content-centrt">
                        <h5 className="m-0 text-center w-100" style={{pointerEvents:'none'}}>3</h5>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card bg-soft-danger py-4" style={{cursor:'pointer'}} onClick={()=>clearSearch()}>
                    <div style={{pointerEvents:'none'}} className="card-body d-flex align-items-center justify-content-centrt">
                        <h5 className="m-0 text-center w-100" style={{pointerEvents:'none'}}>Annuler</h5>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card py-4" style={{cursor:'pointer'}} onClick={()=>handleClick(0)}>
                    <div style={{pointerEvents:'none'}} className="card-body d-flex align-items-center justify-content-centrt">
                        <h5 className="m-0 text-center w-100" style={{pointerEvents:'none'}}>0</h5>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card bg-soft-success py-4" style={{cursor:'pointer'}} onClick={()=>validateSearch()} >
                    <div style={{pointerEvents:'none'}} className="card-body d-flex align-items-center justify-content-centrt">
                        <h5 className="m-0 text-center w-100" style={{pointerEvents:'none'}}>Valider</h5>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
