export const App = () => {
    //ボタンを押したときの処理
    const onClickButton = () => {
        alert();
    }
    const blueStyle = {
        color : "blue",
        fontSize :"20px"
    }
    const pinkStyle = {
        color:"pink",
        fontSize:"20px"
    }
    return (
        <>
        {console.log("TEST")}
        <h1 style={{color : "red"}}>挨拶</h1>
        <p style={blueStyle}>おげんきですか？</p>
        <p style={pinkStyle}>おげんきです！</p>
        <button onClick={onClickButton}>ボタン</button>
      </>
    )
}