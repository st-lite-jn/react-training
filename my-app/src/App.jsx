import { ColoredMessage } from "./components/ColoredMessage";
export const App = () => {
    const onClickButton = () => {
        alert("ボタンをクリックしました");
    }
    const headingStyle = {
        color:"red",
        fntSize:"36px"
    }

    const paraStylePink = {
        color:"pink",
        fntSize:"16px"
    }
    return (
        <>
            <h1 style={headingStyle}>Heading H1</h1>
            <ColoredMessage color="blue">おげんきですか？</ColoredMessage>
            <p style={paraStylePink}>Paragraph</p>
            <ColoredMessage color="pink">ぼちぼちでんな</ColoredMessage>
            <button onClick={onClickButton}>ボタン</button>
        </>
       
    );
}