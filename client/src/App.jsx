// HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";
import LoginLayoutHOC from "./HOC/Login.Hoc";
import DashboardLayoutHOC from "./HOC/Dashboard.Hoc";
import PaymentLayoutHOC from "./HOC/Payment.Hoc";
import AboutusLayoutHOC from "./HOC/Aboutus.Hoc";

// component
import temp from "./components/temp";

// Pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Payment from "./Pages/Payment";
import Dashboard from "./Pages/Dashboard";
import Aboutus from "./Pages/Aboutus";

function App() {
  return (
    <>
      <HomeLayoutHOC path="/" exact component={Home} />
      <LoginLayoutHOC path="/login" exact component={Login} />
      <LoginLayoutHOC path="/signup" exact component={SignUp} />
      <DashboardLayoutHOC path="/dashboard" exact component={Dashboard} />
      <DashboardLayoutHOC path="/aboutus" exact component={Aboutus} />
      <PaymentLayoutHOC path="/payment" exact component={Payment} />
    </>
  );
}

export default App;
