import { Route, Routes } from "react-router-dom"
import { LoginPage } from "./pages/LoginPage"
import { DashboardPage } from "./pages/DashboardPage"


function App() {

  return (
    <Routes>
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/dashboard" element={<DashboardPage />} />
    </Routes>
  )
}

export default App
