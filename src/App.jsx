import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Investment from "./Components/Dasboard/Investment"
import Home  from "./Components/Dasboard/Home";
import {Support} from "./Components/Dasboard/Support";
import {Security} from "./Components/Dasboard/Security";
import {Tesla} from "./Components/Dasboard/Tesla";
import Navbar from "./Components/NavBar/Nav";
import SideBar from "./Components/Dasboard/SideBar";
import Exchange from "./Components/Dasboard/Exchange";
import TradeView from "./Components/Dasboard/TradeView";
import Rewards from "./Components/Dasboard/Rewards";
import InvestmentsPlan from "./Components/Dasboard/InvestmentsPlan"
import MyWallet from "./Components/Dasboard/MyWallet"

function App() {
  return (
    
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Investment" element={<Investment />} />
          <Route path="/Security" element={<Security />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/Tesla" element={<Tesla />} />
          <Route path="/SideBar" element={<SideBar />} />
          <Route path="/Exchange" element={<Exchange />} />
          <Route path="/TradeView" element={<TradeView />} />
          <Route path="/Rewards" element={<Rewards />} />
          <Route path="/InvestmentsPlan" element={<InvestmentsPlan />} />
          <Route path="/MyWallet" element={<MyWallet />} />
        </Routes>
      </Router>
    
  );
}

export default App;

