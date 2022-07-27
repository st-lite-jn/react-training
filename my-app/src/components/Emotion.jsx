/** コンポーネントファイルの中に CSS を書く方法 */
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
    // scssの書き方がそのまま可能な書き方
    const containerStyle = css`
        border: solid 1px #aaa;
        border-radius: 20px;
        padding: 8px;
        margin: 8px;
        display: flex;
        justify-content: space-around;
        align-items: center;
  `;
    // インラインスタイルの書き方
    const titleStyle = css({
        margin: 0,
        color: "#aaa",
    });

    return (
        <div css={containerStyle}>
            <p css={titleStyle}>Emotion です </p>
            <SButton>ボタン</SButton>
        </div>
    )
};
// styled-componentsの書き方
const SButton = styled.button`
border: solid 2px yellow;
border-radius: 100vh;
background-color: white;
color: yellow;
&:hover {
    border-color: green;
    color: green;
}
`