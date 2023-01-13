
import Home from './Components/Routes/Home';
import Project from './Components/Routes/Project';
import Contact from './Components/Routes/Contact';
import About from './Components/Routes/About';
import { Route, BrowserRouter, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/project" element={<Project></Project>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/contact" element={<Contact></Contact>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;
