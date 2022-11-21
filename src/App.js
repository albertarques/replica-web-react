import "../src/Styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Pages ----------------------------- */
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Join from "./pages/Join";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/discover" exact element={<Discover />} />
        <Route path="/join" exact element={<Join />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
