import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryDetails from "./CountryDetails";
import CountryList from "./CountryList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountryList />}></Route>
        <Route path="/country/:cca3" element={<CountryDetails />}></Route>
        <Route path="/app" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
