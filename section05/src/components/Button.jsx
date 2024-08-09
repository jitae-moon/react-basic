// const Button = (props) => {
//     console.log(props);
//     return (
//         <button style={{
//             color: props.color
//         }}>{props.text} - {props.color}</button>
//     );
// }

const Button = ({text, color, children}) => {
    // 이벤트 객체로 전달
    const onClickButton = (e) => {
        // Todo
        console.log(e);
    }

    return (
        <button 
        // onClick={() => {
        //     alert(text);
        // }}
        onClick={onClickButton}
        // onMouseEnter={onClickButton}
        style={{
            color: color
        }}>{text} - {color} - {children}</button>
    )
}

Button.defaultProps = {
    color: 'black'
};

export default Button;