export default interface TextProps {
    textString: string;
    textType: 'h1' | 'h2' | 'p';
    style?: React.CSSProperties;
}