import "./App.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Pages/Login";
import Island from "./Pages/Island";

function App() {
    return (
        <Router>
            {/* <button className="span1" onClick={useNavigate('/island')}>
                connect
            </button> */}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/island" element={<Island />} />
            </Routes>
        </Router>
    );
}

export default App;