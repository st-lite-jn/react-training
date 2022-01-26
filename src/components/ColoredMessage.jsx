export const ColordMeesge = (props) => {
    const {color , fontSize , children } = props;
    const blueStyle = {
        color,
        fontSize
    }
    return <p style={blueStyle}>{children}</p>
}