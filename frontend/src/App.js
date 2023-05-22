
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import FishArea from "./components/FishArea/FishArea";
import EditPage from "./components/Edit/EditPage";
import AddAreaForm from "./components/AddArea/AddAreaForm";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/add" exact Component={AddAreaForm}></Route>
          <Route path="/" exact Component={FishArea}></Route>
          <Route path="/edit" exact Component={EditPage}></Route>
          <Route path="/edit/:id" exact Component={AddAreaForm}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
