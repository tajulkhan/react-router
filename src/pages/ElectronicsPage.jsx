import React from "react";
import { electronics } from "../data/dataset";
import { Link } from "react-router-dom";
export default function ElectronicsPage() {
  return (
    <div>
      <div className="card-header">
        <h1>Electronic</h1>
        <Link to={"/"} className="btn-danger-link">
          Home
        </Link>
      </div>
      <div className="card-grid">
        {electronics.map((item) => {
          return <div className="card" key={item.id}>
            <img src={item.imageLink} alt={item.name} />
            <p>
                <span className="product-detail">Product: </span> {item.name}
            </p>
            <p>
                <span className="product-detail">Price: </span> {item.price}
            </p>
            <Link className="btn-link" to={`/electronics/${item.id}`}> View Product</Link>
          </div>;
        })}
      </div>
    </div>
  );
}
