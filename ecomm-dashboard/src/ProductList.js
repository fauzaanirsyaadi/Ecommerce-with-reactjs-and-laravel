import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Header from "./Header";

function ProductList() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    let result = await fetch("http://localhost:8000/api/list");
    result = await result.json();
    setData(result);
  }, []);
  console.warn("result", data);
  return (
    <div>
      <Header />
      <div className="col-sm-8 offset-sm-2">
        <h1>Product List</h1>
        <Table>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Price</td>
            <td>Description</td>
            <td>Image</td>
          </tr>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <img
                  width="50px"
                  src={"http://localhost:8000/" + item.file_path}
                />
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}
export default ProductList;
