import { Home, Error, Register } from "./pages/index";
import { Profile, ShoppingList, SharedLayout } from "./pages/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/shopping-list" element={<ShoppingList />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
