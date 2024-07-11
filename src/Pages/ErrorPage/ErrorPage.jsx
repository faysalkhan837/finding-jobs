import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate();
    
    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <div onClick={handleGoBack}>
                <img className="mx-auto" src="https://cdn.dribbble.com/users/469578/screenshots/2597126/404-drib23.gif" alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;