import { Routes, Route } from "react-router-dom";
import { Home, TaskPage, Error } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="task/:id" element={<TaskPage />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
