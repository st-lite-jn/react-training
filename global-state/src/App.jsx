import { useState } from "react";
import { Card } from "./components/Card";

const App = () => {

  // 管理者フラグ
  const [ isAdmin, setIsAdmin ] = useState(false);

  // 切り替え押下時
  const onClickSwitch = () => {
    console.log(isAdmin);
    setIsAdmin(!isAdmin)
  
  } 



  return (
    <div>
      {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
      <button onClick={onClickSwitch}>切り替え</button>
      <Card isAdmin={isAdmin} />
    </div>
  );
};

export default App;