import { Home, Error } from "./pages/index";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/error" element={<Error />} />
        <Route path="/shopping-list" element={<ShoppingList />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
