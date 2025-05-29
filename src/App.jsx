import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StandList } from "./features/catalog/components/StandList";
import { AppointmentScheduler } from "./features/networking/components/AppointmentScheduler";
import { PaymentGateway } from "./features/transactions/components/PaymentGateway";
import { HeatMap } from "./features/analytics/components/HeatMap";
import { TopNav } from "./components/navigation/TopNav";
import { BottomNav } from "./components/navigation/BottomNav";
import { Logo } from "./components/layout/Logo";
import "./styles/layout.css";

function App() {
  return (
    <Router>
      <div className="main-container">
        <TopNav />
        <Logo />
        <main className="main-content">
          <Routes>
            <Route path="/stands" element={<StandList />} />
            <Route path="/appointments" element={<AppointmentScheduler />} />
            <Route path="/payments" element={<PaymentGateway />} />
            <Route path="/analytics" element={<HeatMap />} />
            <Route path="/" element={<StandList />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;