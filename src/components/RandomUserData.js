import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const RandomUserData = ({ user }) => {
  useEffect(() => {
    fetchRandom();
  }, []);

  const [randomDataKey, setRandomDataKey] = useState([]);
  const dispatch = useDispatch();

  // Fetch data from backend
  const fetchRandom = async () => {
    const data = await fetch(`/profile/random`);
    const key = await data.json();
    setRandomDataKey(key);
  };

  const handleRandom = () => {
    fetchRandom();
  };

  return (
    <section>
      <h2 className="mt-2">Random User Data</h2>
      <div className="container-fluid p-3 w-50" key={user.id}>
        <div className="card shadow">
          <div className="card-body p-1 text-info mb-3">
            <h4 className="card-title mt-4">
              {randomDataKey} |{" "}
              {user[randomDataKey] === ""
                ? "NA"
                : user[randomDataKey] === user["lastLogin"]
                ? new Date(user[randomDataKey]).toDateString()
                : user[randomDataKey]}
            </h4>
          </div>
        </div>
      </div>
      <input type="submit" onClick={handleRandom} value="New Random Data" />
    </section>
  );
};

export default RandomUserData;
