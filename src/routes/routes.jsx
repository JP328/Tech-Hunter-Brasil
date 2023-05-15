import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "../pages/base";
import Home from "../pages/home";

function StandardRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tech-hunter-brasil" element={<Base/>}>
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default StandardRoutes;