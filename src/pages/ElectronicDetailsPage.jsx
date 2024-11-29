import React from "react";
import { electronics } from "../data/dataset";
import { useParams } from "react-router-dom";
export default function ElectronicDetailsPage() {
  const { id } = useParams();
  const item = electronics.find((x) => x.id === +id);
  if(!item){
    return <div style={{paddingTop:'6rem', fontSize:'1.4rem', textAlign:'center'}}>Item Not Found</div>
  }
  return (
    <div className="sidebar">
      <h1>Product Details</h1>
      <div className="sidebar-content">
        <div className="product">
          <img src={item.imageLink} alt={item.name} />
          <p>
            <span className="product-detail">Product: </span> {item.name}
          </p>
          <p>
            <span className="product-detail">Price: </span> {item.price}
          </p>
          <p>
            <span className="product-detail">InStock: </span> {""}
            {item.quantityAvailable}
          </p>
        </div>
      </div>
    </div>
  );
}
