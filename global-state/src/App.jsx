import { useContext } from "react";
import { Card } from "./components/Card";
import { AdminFlagContext } from "./components/providers/AdminFlagProvider";

const App = () => {

  // 管理者フラグ
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);

  // 切り替え押下時
  const onClickSwitch = () => setIsAdmin(!isAdmin);
  return (
    <div>
      {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
      <button onClick={onClickSwitch}>切り替え</button>
      <Card isAdmin={isAdmin} />
    </div>
  );
};

export default App;