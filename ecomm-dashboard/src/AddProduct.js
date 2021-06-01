import Header from "./Header";
import { useState } from "react";

function AddProduct() {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  async function addProduct() {
    console.log(name, file, price, description);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);

    let result = await fetch("http://localhost:8000/api/addproduct", {
      method: "POST",
      body: formData,
    });

    alert("Data has been saved");
  }

  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Add Product Page</h1>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form-control"
          placeholder="name"
        />{" "}
        <br />
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          className="form-control"
          placeholder="file"
        />{" "}
        <br />
        <input
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          className="form-control"
          placeholder="price"
        />
        <br />
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="form-control"
          placeholder="description"
        />
        <br />
        <button onClick={addProduct} className="btn btn-primary">
          Add Product
        </button>
      </div>
    </>
  );
}

export default AddProduct;
