import React from "react";
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";
import { useSelector } from "react-redux";

function Home() {
  const isLogged = useSelector((state) => state.isLogged);

  return (
    <div>
      <section>
        <div className="container-fluid">
          <h1 className="mt-3">City select</h1>
          <p>Find your favourite cities!</p>
        </div>
      </section>
      {isLogged ? <UserProfile /> : <LoginForm />}
    </div>
  );
}

export default Home;
