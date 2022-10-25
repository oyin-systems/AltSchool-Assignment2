import { Link, Outlet } from "react-router-dom";
import "./Styles.css";

export default function Products() {
  return (
    <>
      <div>
        <h1>This is the Products Route</h1>
        <p>Follow the links below to view available products </p>
      </div>

      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>

      <Outlet />
    </>
  );
}
