import { Home, Error, Register, ProtectedRoute } from "./pages";
import { Profile, ShoppingList, SharedLayout } from "./pages/dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<ShoppingList />} />
          <Route path="/dashboard/profile" element={<Profile />} />
        </Route>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
