import PropTypes from 'prop-types'

function User(props){

    const welcomeMessage = <h2 className="welcome">Welcome, {props.username}</h2>;
    const deniedMessage = <h2 className="denied">Log in to continue...</h2>

    return (props.isLoggedIn ? welcomeMessage : deniedMessage )

}

User.proptypes = {

    isLoggedIn: PropTypes.bool,
    username: PropTypes.string

}

User.defaultProps = {

    isLoggedIn: false,
    username: 'Guest'

}

export default User