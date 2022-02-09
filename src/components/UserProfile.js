import React, { useEffect, useState } from "react";
import { resetUserRecord, userRegister } from "../actions";
import { useDispatch } from "react-redux";
import { isLogged } from "../actions";
import { Link } from "react-router-dom";
import RandomUserData from "./RandomUserData";

const UserProfile = () => {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState([]);
  const dispatch = useDispatch();

  // Fetch data from backend
  const fetchItem = async () => {
    const data = await fetch(`/profile`);
    const item = await data.json();
    dispatch(userRegister(item));
    setItem(item);
  };

  const handleLogout = () => {
    dispatch(isLogged());
    dispatch(resetUserRecord());
    return (
      <div>
        <Link to="/"></Link>
      </div>
    );
  };

  return (
    <section>
      <h3 className="mt-2">User Profile</h3>
      <div className="container-fluid p-3 w-50" key={item.id}>
        <div className="card shadow">
          <div className="card-body p-1 text-info mb-3">
            <h4 className="card-title mt-3">Name: {item.name}</h4>
            <p className="card-text">Email: {item.email}</p>
            <p className="card-text">
              Last login: {new Date(item.lastLogin).toDateString()}
            </p>
            <p className="card-text">
              <i>User id: {item.id}</i>
            </p>
          </div>
        </div>
      </div>
      <input type="submit" onClick={handleLogout} value="Log Out" />
      <RandomUserData user={item} />
    </section>
  );
};

export default UserProfile;
