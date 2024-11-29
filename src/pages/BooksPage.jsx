import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { books } from "../data/dataset";
export default function BooksPage() {
  // navigate to function logic
  const navigate = useNavigate();
  const NavigateToHome = ()=>{
    navigate('/');
  }
  return (
    <div>
      <div className="card-header">
        <h1>Books</h1>
        {/* <Link to={"/"} className="btn-danger-link">
          Home
        </Link> */}
        <button onClick={NavigateToHome} className="btn-danger-link">Home</button>
      </div>
      <div className="card-grid">
        {books.map((item) => {
          return (
            <div className="card" key={item.id}>
              <img
                src={item.imageLink}
                alt={item.name}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <p>
                <span className="product-detail">Product: </span> {item.name}
              </p>
              <p>
                <span className="product-detail">Price: </span> {item.price}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
