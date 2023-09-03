import TextProps from "./Text.props";
import './Text.css'

export default function TextComponent(props: TextProps) {
    return (
        <div className="text-container" style={props.style}>
            <props.textType>{props.textString}</props.textType>
        </div>
    )
}

