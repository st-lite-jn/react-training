

const style = {
  width: "100px",
  padding: "6px",
  borderRadius: "8px",
};

export const EditButton = props => {
  // Context内のisAdminを取得
  const { isAdmin } = props;

  return (
    <button style={style} disabled={!isAdmin}>
      編集
    </button>
  );
};