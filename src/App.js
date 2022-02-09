import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Cities from "./components/Cities";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cities" exact element={<Cities />} />
          <Route exact path="/profile/:id" element={<UserProfile />} />
          <Route path="/login" exact element={<LoginForm />} />
          <Route path="/cities?megye=:id" exact element={<Cities />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
