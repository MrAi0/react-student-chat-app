import ButtonProps from "./Button.props";
import './Button.css'


export default function Button(props: ButtonProps) {
    return (
        <button className="custom-button" onClick={props.onClick} style={props.style}>
            {props.text}
        </button>
    )
}