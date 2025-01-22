
function Greeting(props) {
    // eslint-disable-next-line react/prop-types
    return <h1>Hello, {props.name}</h1>
}

// Greeting.propTypes = {
//     name: PropTypes.string.isRequired,
// }

export default Greeting