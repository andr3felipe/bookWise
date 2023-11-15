import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/defaultLayout";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Explorar } from "./pages/Explorar";
import { Profile } from "./pages/Profile";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/inicio" element={<Home />} />
        <Route path="/explorar" element={<Explorar />} />
        <Route path="/perfil" element={<Profile />} />
      </Route>
    </Routes>
  );
}
