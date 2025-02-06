import { useNavigate } from "react-router-dom";

const ConfirmationPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-green-600">✅ Booking Confirmed!</h1>
            <p className="mt-4 text-lg">Thank you for booking. You will receive a confirmation email shortly.</p>
            
            <button 
                className="mt-6 bg-blue-900 text-white px-6 py-3 rounded-lg shadow-md"
                onClick={() => navigate("/")}
            >
                Back to Home
            </button>
        </div>
    );
};

export default ConfirmationPage;