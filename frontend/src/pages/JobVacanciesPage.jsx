import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

export const JobVacanciesPage = () => {
  const [jobVacancy, setJobVacancy] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const url = `http://localhost:8000/api/v1/job_vacancies?token=${token}`;

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {setJobVacancy(response.data.vacancies)})
      .catch((error) => alert(error.response.data.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <header className="jumbotron">
          <div className="container">
            <h1 className="display-4">Job Vacancies</h1>
          </div>
        </header>

        <div className="container mb-5">
          <div className="section-header mb-4">
            <h4 className="section-title text-muted font-weight-normal">
              List of Job Vacancies
            </h4>
          </div>

          <div className="section-body">
            {loading ? (
              <div>Loading</div>
            ) : (
              jobVacancy.map((item, index) => {
                return (
                <article className="spot" key={index}>
                  <div className="row">
                    <div className="col-5">
                      <h5 className="text-primary">{item.company}</h5>
                      <span className="text-muted">
                        {item.address}
                      </span>
                    </div>
                    <div className="col-4">
                      <h5>Available Position (Capacity)</h5>
                      {item.available_position.map((item, index) => {
                        return (
                          <span className="text-muted" key={index}>
                            {item.position} ({item.capacity}){', '}
                          </span>
                        )
                      })}
                    </div>
                    <div className="col-3">
                      <Link to={`/detail-job-vacancy/${item.id}`}>
                      <button className="btn btn-danger btn-lg btn-block text-decoration-none">
                        Detail / Apply
                      </button>
                      </Link>
                    </div>
                  </div>
                </article>
                )
              })
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

{
  /* <article className="spot unavailable">
              <div className="row">
                <div className="col-5">
                  <h5 className="text-primary">PT. Maju Mundur Sejahtera</h5>
                  <span className="text-muted">
                    Ds. Abdullah No. 31, DKI Jakarta
                  </span>
                </div>
                <div className="col-4">
                  <h5>Available Position (Capacity)</h5>
                  <span className="text-muted">
                    Desain Grafis (3), Programmer (1), Manager (1)
                  </span>
                </div>
                <div className="col-3">
                  <div className="bg-success text-white p-2">
                    Vacancies have been submitted
                  </div>
                </div>
              </div>
            </article> */
}
