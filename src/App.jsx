import { ColordMeesge } from "./components/ColoredMessage";
export const App = () => {
    //ボタンを押したときの処理
    const onClickButton = () => {
        alert();
    }

    const pinkStyle = {
        color:"pink",
        fontSize:"20px"
    }
    return (
        <>
        {console.log("TEST")}
        <h1 style={{color : "red"}}>挨拶</h1>
        <ColordMeesge color="red" fontSize="72px">お元気ですか？</ColordMeesge>
        <p style={pinkStyle}>おげんきです</p>
        <button onClick={onClickButton}>ボタン</button>
      </>
    )
}