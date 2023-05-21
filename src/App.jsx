import Header from "./layouts/header/Header";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path={``} element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
