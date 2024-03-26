import { useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import axios from "axios";

export const LoginPage = () => {
  const [data, setData] = useState({
    id_card_number: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const url = "http://127.0.0.1:8000/api/v1/auth/login";
    try {
      const response = await axios.post(url, data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name", response.data.name);
      location.href = '/dashboard';
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    <>
    <Navbar />
    <main>
      <header className="jumbotron">
        <div className="container text-center">
          <h1 className="display-4">Job Seekers Platform</h1>
        </div>
      </header>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="card card-default" onSubmit={handleLogin}>
              <div className="card-header">
                <h4 className="mb-0">Login</h4>
              </div>
              <div className="card-body">
                <div className="form-group row align-items-center">
                  <div className="col-4 text-right">ID Card Number</div>
                  <div className="col-8">
                    <input type="text" className="form-control" onChange={(e) => setData({ ...data, id_card_number: e.target.value })} />
                  </div>
                </div>
                <div className="form-group row align-items-center">
                  <div className="col-4 text-right">Password</div>
                  <div className="col-8">
                    <input type="password" className="form-control" onChange={(e) => setData({ ...data, password: e.target.value })} />
                  </div>
                </div>
                <div className="form-group row align-items-center mt-4">
                  <div className="col-4"></div>
                  <div className="col-8">
                    <button className="btn btn-primary">Login</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
};
