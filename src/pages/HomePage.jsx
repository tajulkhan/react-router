import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="container">
        <h1 className="title">Welcome to Ecom</h1>
        <div className="home">
          <img
            className="banner"
            width={400}
            src="https://images.pexels.com/photos/1647978/pexels-photo-1647978.jpeg"
            alt="img"
          />
          <div className="category">
            <h1>Pick your category</h1>
            <div className="links">
              <Link to={"/electronics"} className="link">Electronics</Link>
              <Link to={"/books"} className="link">Books</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
