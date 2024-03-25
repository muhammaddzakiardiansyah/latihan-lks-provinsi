import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const LoginPage = () => {
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
            <form className="card card-default">
              <div className="card-header">
                <h4 className="mb-0">Login</h4>
              </div>
              <div className="card-body">
                <div className="form-group row align-items-center">
                  <div className="col-4 text-right">ID Card Number</div>
                  <div className="col-8">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="form-group row align-items-center">
                  <div className="col-4 text-right">Password</div>
                  <div className="col-8">
                    <input type="password" className="form-control" />
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
