import './Users.css'
import {NavLink} from "react-router-dom";

export function User(props) {
    return (
        <NavLink className='user-link' to={{
            pathname: `/accounts/${props.user.id}`,
            userProps: {name: "This is a passed prop"},
        }}>
            <div className='image-user'>
                <img src={props.user.photo} alt=""/>
            </div>
            <div className="info-user">
                <h4>@{props.user.username}</h4>
                <p>{props.user.first_name}</p>
                <p>{props.user.last_name}</p>
            </div>
        </NavLink>

    )
}