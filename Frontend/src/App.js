import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Community from "./pages/Community";
import Problems from "./pages/Problems";
import QandA from "./pages/QandA";
import Solutions from "./pages/Solutions";
import ViewAnswers from "./admin/viewAnswers";
import ViewQuestions from "./admin/viewQuestions";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Community />} />
          <Route path="/admin" element={<ViewAnswers />} />
          <Route path="/questions" element={<ViewQuestions />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/qanda" element={<QandA />} />
          <Route path="/solutions" element={<Solutions />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
