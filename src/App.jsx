import { useState } from "react";
import "../src/assets/app.css";
import "./App.css";
import "../src/assets/bootstrap-Hhgk6Xlo.css";
import { Table } from "./components/Table";
import { Numpad } from "./components/Numpad";
import axios from "axios";
import ReactSelectAsync from "react-select/async";
import { Total } from "./components/Total";
import '../src/assets/icons.css'

function App() {
  const [searchValue, setSearchValue] = useState("");
  const clearSearch = () => {
    setSearchValue("");
  };
  const validateSearch = () => {
    axios
      .get("products", {
        params: {
          reference: searchValue,
        },
      })
      .then((response) => {
        populateData(response);
      });
  };
  //eslint-disable-next-line
  const validateSearchById = (id) => {
    axios.get("products/" + id).then((response) => {
      populateData(response);
    });
  };
  const populateData = (response) => {
    if (response.data.length === 1) {
      if (items.some((item) => item.id == response.data[0].id)) {
        let allItems = items.map((item) =>
          item.id == response.data[0].id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setItems(allItems);
      } else {
        setItems([...items, response.data[0]]);
      }
    }
    clearSearch();
  };
  const [items, setItems] = useState([]);
  return (
    <>
      <div className="row m-0 stretch-h-100">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <div className="d-flex switch-filter justify-content-between align-items-center">
                  <h5 className="m-0">Point de vente</h5>
                  <div className="page-title-right"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-7">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-5">
                  <div className="input-group flex-nowrap">
                    <div className="w-100">
                      <ReactSelectAsync
                        classNames={{
                          control: () => "border-light shadow-none",
                          option: (state) => {
                            return state.isFocused
                              ? "bg-primary text-white"
                              : state.isSelected
                              ? "bg-soft-primary text-white"
                              : state.isDisabled
                              ? "bg-soft-light text-muted"
                              : "";
                          },
                          singleValue: (state) => {
                            state.isFocused ? "bg-primary" : "bg-light";
                          },
                        }}
                        cache={false}
                        loadOptions={async (inputValue) => {
                          const response = await axios.get("clients", {
                            params: {
                              name_like: "^" + inputValue,
                            },
                          });
                          return response.data.map((client) => ({
                            value: client.id,
                            label: client.name,
                          }));
                        }}
                      />
                    </div>
                    <button className="input-group-text btn btn-light">
                      +
                    </button>
                  </div>
                </div>
                <div className="col-7">
                  <input
                    name=""
                    id="search"
                    className="form-control"
                    rows="1"
                    placeholder="Rechercher un produit..."
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-7 d-flex">
          <div className="card col-12">
            <div className="card-body">
              <div className="row h-100">
                <Table items={items} setItems={setItems} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="row">
            <Numpad
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              clearSearch={clearSearch}
              validateSearch={validateSearch}
            />
          </div>
        </div>
        <div className="col-4">
          <Total items={items} setItems={setItems} />
        </div>
      </div>
    </>
  );
}

export default App;
