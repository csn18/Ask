import { Navigate} from "react-router-dom";


export const Logout = () => {
    localStorage.removeItem('auth_token')

    return (
        <div>
            <Navigate to='/'/>;

        </div>
    )


}