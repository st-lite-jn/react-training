import { createContext , useState} from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = props => {

    const { children } = props;
    // 管理者フラグ
    const [ isAdmin, setIsAdmin ] = useState(false);


    //動作確認のためのオブジェクトの定義
    //const sampleObj = { sampleValue : "サンプル" };
    // AdminFlagContextの中にProviderがあるのでそれでchildrenを囲む
    // valueの中にグルーバルで扱う実際の値を設定
    return (
        <AdminFlagContext.Provider value={{isAdmin, setIsAdmin}}>
            {children}
        </AdminFlagContext.Provider>
    )
}

