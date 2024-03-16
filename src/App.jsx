import { Route, Routes } from "react-router-dom";
import Example from "./Example";
import Payed from "./Payed";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Example />} />
      <Route path="/payed/*" element={<Payed />} />
    </Routes>
  );
};

export default App;
