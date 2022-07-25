import { useState , useEffect } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { CSSModule } from "./components/cssModule";

export const App = () => {

    // Stateの定義
    const [num , setNum] = useState(0);
    //ボタンを押したときにStateをカウントアップ
    const onClickButton = () => {
        setNum(( prev ) => prev + 1);
    }
    const headingStyle = {
        color:"red",
        fntSize:"36px"
    }

    const paraStylePink = {
        color:"pink",
        fntSize:"16px"
    }
    
    useEffect(() =>{
        console.log("レンダリングされました");
    },[num]);

    return (
        <>
            <h1 style={headingStyle}>Heading H1</h1>
            <CSSModule />
            <ColoredMessage color="blue">おげんきですか？</ColoredMessage>
            <p style={paraStylePink}>Paragraph</p>
            <ColoredMessage color="pink">ぼちぼちでんな</ColoredMessage>
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>
        </>
       
    );
}