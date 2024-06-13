import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Contact from './pages/Contact';
import UserDashboard from './pages/UserDashboard';
import Admin from './pages/Admin';
import ForgotPassword from './pages/ForgotPassword';
import VerifyOtp from './pages/VerifyOtp';
import UpdatePassword from './pages/UpdatePassword';
import SuperAdminLogin from './pages/SuperAdminLogin';
import SuperAdminSignup from './pages/SuperAdminSignup';
import VerifySuperAdmin from './pages/VerifySuperAdmin';
import NotFound from './components/NotFound';
import VerifyForgotPassword from './pages/VerifyForgotPassword';

function App() {
  return (
       <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<UserDashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/forgotpassword/verify" element={<VerifyForgotPassword/>} />
        <Route path="/updatepassword" element={<UpdatePassword />} />
        <Route path="/verifyotp" element={<VerifyOtp />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/superadmin/login" element={<SuperAdminLogin />} />
        <Route path="/superadmin/signup" element={<SuperAdminSignup />} />
        <Route path="/superadmin/verify" element={<VerifySuperAdmin />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
