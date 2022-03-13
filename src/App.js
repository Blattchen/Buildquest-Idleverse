import "./App.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Pages/Login";
import Island from "./Pages/Island";

function clickMe() {
    // alert("You clicked me!");
    console.log("hello");
}

function App() {
    return (
        <div className="div">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/island" element={<Island />} />
            </Routes>
        </div>
    );
}

export default App;