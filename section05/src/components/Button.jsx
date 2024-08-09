// const Button = (props) => {
//     console.log(props);
//     return (
//         <button style={{
//             color: props.color
//         }}>{props.text} - {props.color}</button>
//     );
// }

const Button = ({text, color, children}) => {
    return (
        <button style={{
            color: color
        }}>{text} - {color} - {children}</button>
    )
}

Button.defaultProps = {
    color: 'black'
};

export default Button;