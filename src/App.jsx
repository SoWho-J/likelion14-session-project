import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";
import Main from "./pages/Main/Main.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/add" element={<></>} />{" "}
          {/* 추후 element에 상품 등록 페이지 들어가야함 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
