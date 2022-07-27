/** @jsxImortSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
    // scssの書き方がそのまま可能な書き方
    const containerStyle = css`
    width:600px;
    margin-right:auto;
    margin-left:auto;
    border:solid 2px #999;
`;
    //インラインスタイルの書き方
    const titleStyle = css({
        fontSize:"36px",
        marginTop:"40px",
        color:"#999"
    });

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
    return (
        <div css={containerStyle}>
            <p css={titleStyle}>Emoitonです</p>
            <SButton>ボタン</SButton>
        </div>
    )
}