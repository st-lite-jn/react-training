import { useState } from "react";
import { useEffect } from "react";
import { ColordMeesge } from "./components/ColoredMessage";
import "ress";
import classes from "./scss/style.module.scss";

export const App = () => {
    
    console.log("レンダリング");

    const [ num , setNum ] = useState(0);
    
    useEffect(() => {
        console.log("レンダリングB");
    }, [num] );

    //ボタンを押したときの処理
    const onClickButton = () => {
        setNum(( num ) => num + 1 ) ; 
    }

    const pinkStyle = {
        color:"pink",
        fontSize:"20px"
    }
    return (
        <div className={classes["l-container"]}>
        <h1 style={{color : "red"}}>挨拶</h1>
        <ColordMeesge color="red" fontSize="72px">お元気ですか？</ColordMeesge>
        <p style={pinkStyle}>おげんきです</p>
        <button onClick={onClickButton}>ボタン</button>
        <p>{num}</p>
      </div>
    )
}