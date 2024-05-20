import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PaymentsOverview from './Pages/PaymentsOverview'
import AddAdmin from './Pages/AddAdmin'
import MyProfile from './Pages/MyProfile'
import StaticsPage from './Pages/StaticsPage'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PaymentsOverview />} />
      <Route path="/addnewadmin" element={<AddAdmin />} />
      <Route path="/MyProfile" element={<MyProfile />} />
      <Route path="/StaticsPage" element={<StaticsPage />} />
      {/* <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin" element={<Admin />} /> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App
