import { Route, Routes } from "react-router-dom"
import { LoginPage } from "./pages/LoginPage"
import { DashboardPage } from "./pages/DashboardPage"
import { DataValidationPage } from "./pages/DataValidaitonPage"
import { JobVacanciesPage } from "./pages/JobVacanciesPage"
import { DetailJobVacancyPage } from "./pages/DetailJobVacancyPage"
import { PrivateRoute } from "./components/Fragments/PrivateRoute"


function App() {

  return (
    <Routes>
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
      <Route exact path="/create-validation" element={<PrivateRoute><DataValidationPage /></PrivateRoute>} />
      <Route exact path="/job-vacancies" element={<PrivateRoute><JobVacanciesPage /></PrivateRoute>} />
      <Route exact path="/detail-job-vacancy/:id" element={<PrivateRoute><DetailJobVacancyPage /></PrivateRoute>} />
    </Routes>
  )
}

export default App
