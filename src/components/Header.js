import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    
    return (
        <header className= 'header'>
            <h1 style={headingStyle}>{props.title}</h1>
            <Button color = {props.showAddTask ? 'Red' : 'Green'}
            text = {props.showAddTask ? 'Close' : 'Add'} onClick = {props.onAdd} />
           
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Button.defaultProps = {
    color: 'purple',
    text: 'default'
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

//CSS IN JS
const headingStyle = {
    color: 'black', 
    backgroundColor: 'white'
}


//TO CATCH TYPE ERRORS
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header
