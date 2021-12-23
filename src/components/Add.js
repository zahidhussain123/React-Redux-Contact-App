import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Add = () => {
    let navigate = useNavigate();
  const Contact = useSelector((state) => state);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = Contact.find((item) => item.email === email);
    const checkNumber = Contact.find(
      (item) => item.number === parseInt(number)
    );

    if (!name || !email || !number) {
      return toast.warning("Plz Fill all Subjects");
    }

    if (checkEmail && email) {
      return toast.error("This Email is already Exist");
    }

    if (checkNumber && number) {
      return toast.error("This Number is already taken");
    }

    const data = {
      id: Contact[Contact.length - 1].id + 1,
      name,
      email,
      number,
    };

    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Contact Added Succssfully");
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="display-3 text-center m-2">Add Contact</h1>
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
                value="Add "
                className="form-control btn btn-block btn-dark mx-3 "
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
