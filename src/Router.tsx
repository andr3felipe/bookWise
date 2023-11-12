import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/defaultLayout";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Explorar } from "./pages/Explorar";

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/inicio" element={<Home />} />
        <Route path="/explorar" element={<Explorar />} />
      </Route>
    </Routes>
  );
}
