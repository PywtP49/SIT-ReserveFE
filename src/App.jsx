import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RoomBooking from "./RoomBooking";
import ConfirmationPage from "./ConfirmationPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RoomBooking />} />
                <Route path="/confirmation" element={<ConfirmationPage />} />
            </Routes>
        </Router>
    );
}

export default App;