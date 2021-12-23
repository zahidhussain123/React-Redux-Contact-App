import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Homepage = () => {
  const Contact = useSelector((state) => state);
  const dispatch = useDispatch()
const handleClick = id =>{
  // e.preventDefault();
  dispatch({type:"DELETE_CONTACT" , payload:id})
  toast.success("Contact Deleted Successfully")

}
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 text-right">
          <Link to="/add" className="btn btn-outline-dark">
            Add Contact
          </Link>
        </div>
        <div className="col-md-10 mx-auto">
          <table className="table table-hover">
            <thead className="text-white bg-dark text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {Contact.map((item, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.number}</td>
                  <td>
                    <Link
                      to={`/edit/${item.id}`}
                      className="btn btn-small btn-primary mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      onClick={()=>handleClick(id)}
                      className="btn btn-small btn-danger mx-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
