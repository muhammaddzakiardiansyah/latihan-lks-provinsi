import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";

export const DetailJobVacancyPage = () => {
  const [jobVacancy, setJobVacancy] = useState({});
  const param = useParams();
  const token = localStorage.getItem("token");
  const urlJobVacancy = `http://localhost:8000/api/v1/job_vacancies/${param.id}?token=${token}`;

  useEffect(() => {
    axios.get(urlJobVacancy)
    .then((response) => setJobVacancy(response.data.vacancy))
    .catch((error) => alert(error.response.data.message))
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <header className="jumbotron">
          <div className="container text-center">
            <div>
              <h1 className="display-4">{jobVacancy.company}</h1>
              <span className="text-muted">
                {jobVacancy.address}
              </span>
            </div>
          </div>
        </header>

        <div className="container">
          <div className="row mb-3">
            <div className="col-md-12">
              <div className="form-group">
                <h3>Description</h3>
                {jobVacancy.description}
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <form className="w-100">
              <div className="col-md-12">
                <div className="form-group">
                  <h3>Select position</h3>
                  <table className="table table-bordered table-hover table-striped">
                    <tr>
                      <th width="1">#</th>
                      <th>Position</th>
                      <th>Capacity</th>
                      <th>Application / Max</th>
                      <th
                        rowSpan="4"
                        style={{
                          verticalAlign: "middle",
                          whiteSpace: "nowrap",
                        }}
                        width="1"
                      >
                        <a href="" className="btn btn-primary btn-lg">
                          Apply for this job
                        </a>
                      </th>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>Desain Grafis</td>
                      <td>3</td>
                      <td>6/12</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>Programmer</td>
                      <td>1</td>
                      <td>3/8</td>
                    </tr>
                    <tr className="table-warning">
                      <td>
                        <input type="checkbox" disabled />
                      </td>
                      <td>Manager</td>
                      <td>1</td>
                      <td>22/22</td>
                    </tr>
                  </table>
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <div className="d-flex align-items-center mb-3">
                    <label className="mr-3 mb-0">Notes for Company</label>
                  </div>
                  <textarea
                    className="form-control"
                    cols="30"
                    rows="6"
                    placeholder="Explain why you should be accepted"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
