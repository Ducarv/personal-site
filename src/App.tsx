import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ExperiencesPage } from "./pages/Experiences";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ServicesPage from "./pages/Services";
import ToolsPage from "./pages/Tools";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="experience" element={<ExperiencesPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="tools" element={<ToolsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
