import { createContext } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = props => {

    const { children } = props;

    //動作確認のためのオブジェクトの定義
    const sampleObj = { sampleValue : "サンプル" };
    // AdminFlagContextの中にProviderがあるのでそれでchildrenを囲む
    // valueのん中にグルーバルで扱う実際の値を設定

    return (
        <AdminFlagContext.Provider value={sampleObj}>
            {children}
        </AdminFlagContext.Provider>
    )
}

