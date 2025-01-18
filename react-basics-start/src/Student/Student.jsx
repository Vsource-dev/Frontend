import styles from './Student.module.css'
import PropTypes from "prop-types"

function Student(props){

    return(
        
        <div className={styles.container}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>School: {props.isStudent ? 'Oo' : 'Hindi'}</p>
        </div>

    )

}
Student.propTypes = {

  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool

}

Student.defaultProps = {

    name: "Guest",
    age: 0,
    isStudent: false

}
export default Student