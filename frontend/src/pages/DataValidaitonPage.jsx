import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useState } from "react";
import axios from "axios";
 
export const DataValidationPage = () => {
  const [data, setData] = useState({
    job_category_id: 1,
    job_position: "",
    work_experience: "",
    reason_accepted: "",
  });

  const handleValidation = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const url = `http://localhost:8000/api/v1/validations?token=${token}`;
      const response = await axios.post(url, data);
      alert(response.data.message);
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
          <div className="container">
            <h1 className="display-4">Request Data Validation</h1>
          </div>
        </header>

        <div className="container">
          <form onSubmit={handleValidation}>
            <div className="row mb-4">
              <div className="col-md-6">
                <div className="form-group">
                  <div className="d-flex align-items-center mb-3">
                    <label className="mr-3 mb-0">Job Category</label>
                    <select className="form-control-sm" onChange={(e) => setData({ ...data, job_category_id: e.target.value })}>
                      <option value="1">Computing and ICT</option>
                      <option value="2">Construction and building</option>
                      <option value="3">Animals, land and environment</option>
                      <option value="4">Design, arts and crafts</option>
                      <option value="5">Education and training</option>
                    </select>
                  </div>
                  <textarea
                    className="form-control"
                    cols="30"
                    rows="5"
                    placeholder="Job position sparate with , (comma)"
                    onChange={(e) => setData({ ...data, job_position: e.target.value })}
                  ></textarea>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <div className="d-flex align-items-center mb-3">
                    <label className="mr-3 mb-0">Work Experiences ?</label>
                    <select className="form-control-sm">
                      <option value="yes">Yes, I have</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <textarea
                    className="form-control"
                    cols="30"
                    rows="5"
                    placeholder="Describe your work experiences"
                    onChange={(e) => setData({ ...data, work_experience: e.target.value })}
                  ></textarea>
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <div className="d-flex align-items-center mb-3">
                    <label className="mr-3 mb-0">Reason Accepted</label>
                  </div>
                  <textarea
                    className="form-control"
                    cols="30"
                    rows="6"
                    placeholder="Explain why you should be accepted"
                    onChange={(e) => setData({ ...data, reason_accepted: e.target.value })}
                  ></textarea>
                </div>
              </div>
            </div>

            <button className="btn btn-primary">Send Request</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};
