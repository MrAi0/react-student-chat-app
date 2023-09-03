export default interface ButtonProps {
    text: string;
    onClick: () => void;
    isDisabled?: boolean;
    style?: React.CSSProperties;
}