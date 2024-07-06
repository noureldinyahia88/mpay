import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PaymentsOverview from "./Pages/PaymentsOverview";
import AddAdmin from "./Pages/AddAdmin";
import MyProfile from "./Pages/MyProfile";
import StaticsPage from "./Pages/StaticsPage";
import LoginPage from "./Pages/LoginPage";
import UserHomePage from "./Pages/userPage/UserHomePage";
import SendMoney from "./Pages/userPage/SendMoney";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import VerifyOtp from "./Pages/userPage/VerifyOtp";
import SignUp from "./Pages/userPage/SignUp";
import ReceiveMoneyAdress from "./Pages/userPage/ResMoney/ReceiveMoneyAdress";
import Chatbot from "./Pages/Chatbot";
import ManageCards from "./Pages/userPage/ManageCards";
import BuyCrypto from "./Pages/userPage/BuyCrypto";
import Deposit from "./Pages/userPage/Deposit";
import Card from "./componet/Ui-User/Card";
import CardNumber from "./Pages/userPage/SendMoneyForms/Card";
import CradNumberSendMoney from "./Pages/userPage/SendMoneyForms/CradNumberSendMoney";
import SendMoneyPhoneNumber from "./Pages/userPage/SendMoneyForms/SendMoneyPhoneNumber";
// import { queryClient } from "./Http/Login";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/PaymentsOverview" element={<PaymentsOverview />} />
          <Route path="/addnewadmin" element={<AddAdmin />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/StaticsPage" element={<StaticsPage />} />
          <Route path="/HomePage" element={<UserHomePage />} />
          <Route path="/SendMoney" element={<SendMoney />} />
          <Route path="/SendMoneyByCard" element={<CradNumberSendMoney />} />
          <Route path="/SendMoneyPhoneNumber" element={<SendMoneyPhoneNumber />} />
          <Route path="/ReceiveMoneyAdress" element={<ReceiveMoneyAdress />} />
          <Route path="/ManageCards" element={<ManageCards />} />
          <Route path="/Chatbot" element={<Chatbot />} />
          <Route path="/BuyCrypto" element={<BuyCrypto />} />
          <Route path="/Deposit" element={<Deposit />} />


          {/* <Route path="/VerifyOtp" element={<VerifyOtp />} /> */}
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
