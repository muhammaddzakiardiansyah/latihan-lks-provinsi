import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

export const DashboardPage = () => {
  const [validation, setValidation] = useState({});
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const url = `http://localhost:8000/api/v1/validations?token=${token}`;

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => setValidation(response.data.validation))
      .catch((error) => {
        setLoading(false);
        alert(error.response.data.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <header className="jumbotron">
          <div className="container">
            <h1 className="display-4">Dashboard</h1>
          </div>
        </header>

        <div className="container">
          <section className="validation-section mb-5">
            <div className="section-header mb-3">
              <h4 className="section-title text-muted">My Data Validation</h4>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card card-default">
                  <div className="card-header">
                    <h5 className="mb-0">Data Validation</h5>
                  </div>
                  <div className="card-body">
                    <Link to={"/create-validation"}>
                      <p className="btn btn-primary btn-block">
                        + Request validation
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              {/* <div className="col-md-4">
                <div className="card card-default">
                  <div className="card-header border-0">
                    <h5 className="mb-0">Data Validation</h5>
                  </div>
                  <div className="card-body p-0">
                    <table className="table table-striped mb-0">
                      <tr>
                        <th>Status</th>
                        <td>
                          <span className="badge badge-info">Pending</span>
                        </td>
                      </tr>
                      <tr>
                        <th>Job Category</th>
                        <td className="text-muted">-</td>
                      </tr>
                      <tr>
                        <th>Job Position</th>
                        <td className="text-muted">Web Developer</td>
                      </tr>
                      <tr>
                        <th>Reason Accepted</th>
                        <td className="text-muted">-</td>
                      </tr>
                      <tr>
                        <th>Validator</th>
                        <td className="text-muted">-</td>
                      </tr>
                      <tr>
                        <th>Validator Notes</th>
                        <td className="text-muted">-</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div> */}

              {}
              <div className="col-md-4">
                <div className="card card-default">
                  <div className="card-header border-0">
                    <h5 className="mb-0">Data Validation</h5>
                  </div>
                  <div className="card-body p-0">
                    <table className="table table-striped mb-0">
                      <tr>
                        <th>Status</th>
                        <td>
                          <span className="badge badge-success">
                            {validation.status}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th>Job Category</th>
                        <td className="text-muted">
                          {validation.job_category}
                        </td>
                      </tr>
                      <tr>
                        <th>Job Position</th>
                        <td className="text-muted">
                          {validation.job_position}
                        </td>
                      </tr>
                      <tr>
                        <th>Reason Accepted</th>
                        <td className="text-muted">
                          {validation.reason_accepted}
                        </td>
                      </tr>
                      <tr>
                        <th>Validator</th>
                        <td className="text-muted">{validation.validator}</td>
                      </tr>
                      <tr>
                        <th>Validator Notes</th>
                        <td className="text-muted">
                          {validation.validator_notes}
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="validation-section mb-5">
            <div className="section-header mb-3">
              <div className="row">
                <div className="col-md-8">
                  <h4 className="section-title text-muted">
                    My Job Applications
                  </h4>
                </div>
                {validation ? (
                  <div className="col-md-4">
                    <Link to={"/job-vacancies"}>
                      <p href="" className="btn btn-primary btn-lg btn-block">
                        + Add Job Applications
                      </p>
                    </Link>
                  </div>
                ) : (
                  " "
                )}
              </div>
            </div>
            <div className="section-body">
              <div className="row mb-4">
                <div className="col-md-12">
                  <div className="alert alert-warning">
                    Your validation must be approved by validator to applying
                    job.
                  </div>
                </div>

                {/* <div className="col-md-6">
                <div className="card card-default">
                  <div className="card-header border-0">
                    <h5 className="mb-0">PT. Maju Mundur Sejahtera</h5>
                  </div>
                  <div className="card-body p-0">
                    <table className="table table-striped mb-0">
                      <tr>
                        <th>Address</th>
                        <td className="text-muted">
                          Jln. HOS. Cjokroaminoto (Pasirkaliki) No. 900, DKI
                          Jakarta
                        </td>
                      </tr>
                      <tr>
                        <th>Position</th>
                        <td className="text-muted">
                          <ul>
                            <li>
                              Desain Grafis{" "}
                              <span className="badge badge-info">Pending</span>
                            </li>
                            <li>
                              Programmer{" "}
                              <span className="badge badge-info">Pending</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <th>Apply Date</th>
                        <td className="text-muted">September 12, 2023</td>
                      </tr>
                      <tr>
                        <th>Notes</th>
                        <td className="text-muted">I was the better one</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card card-default">
                  <div className="card-header border-0">
                    <h5 className="mb-0">PT. Maju Mundur Sejahtera</h5>
                  </div>
                  <div className="card-body p-0">
                    <table className="table table-striped mb-0">
                      <tr>
                        <th>Address</th>
                        <td className="text-muted">
                          Jln. HOS. Cjokroaminoto (Pasirkaliki) No. 900, DKI
                          Jakarta
                        </td>
                      </tr>
                      <tr>
                        <th>Position</th>
                        <td className="text-muted">
                          <ul>
                            <li>
                              Desain Grafis{" "}
                              <span className="badge badge-success">Accepted </span>
                            </li>
                            <li>
                              Programmer{" "}
                              <span className="badge badge-danger">Rejected</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <th>Apply Date</th>
                        <td className="text-muted">September 12, 2023</td>
                      </tr>
                      <tr>
                        <th>Notes</th>
                        <td className="text-muted">-</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div> */}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};
