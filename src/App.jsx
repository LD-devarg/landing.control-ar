import { Routes, Route } from "react-router-dom";
import Landing from "./layouts/Landing";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
