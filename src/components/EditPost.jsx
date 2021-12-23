import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditPost = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const { id } = useParams();
  const contact = useSelector((state) => state);
  const dispatch = useDispatch();
  const currId = contact.find((item) => item.id === parseInt(id));
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contact.find(
      (item) => item.id !== parseInt(id) && item.email === email
    );
    const checkNumber = contact.find(
      (item) => item.id !== parseInt(id) && item.number === parseInt(number)
    );

    if (!name || !email || !number) {
      return toast.warning("Plz Fill all Subjects");
    }

    if (checkEmail) {
      return toast.error("This Email is already Exist");
    }

    if (checkNumber) {
      return toast.error("This Number is already taken");
    }

    const data = {
      id: parseInt(id),
      name,
      email,
      number,
    };

    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Contact Updated Succssfully");
    navigate("/");
  };

  useEffect(() => {
    if (currId) {
      setName(currId.name);
      setEmail(currId.email);
      setNumber(currId.number);
    }
  }, [currId]);

  return (
    <div className="container">
      {currId ? (
        <>
          <div className="row">
            <h1 className="display-3 text-center m-2">Edit Contact {id}</h1>
            <div className="col-md-6 shadow mx-auto p-5">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="form-control m-3"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="form-control m-3"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Phone"
                    className="form-control m-3"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Update "
                    className="form-control btn  btn-dark mx-3 "
                  />
                </div>
                <div className="form-group">
                  <Link
                    to="/"
                    className="form-control btn btn-danger mx-3 my-3 "
                  >
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="text-center my-5">Id {id} is not present</h1>
      )}
    </div>
  );
};

export default EditPost;
