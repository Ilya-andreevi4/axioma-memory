import { Routes, Route } from "react-router-dom";
import StartPage from "@/pages/StartPage";
import GamePage from "@/pages/GamePage";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/GamePage" element={<GamePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
