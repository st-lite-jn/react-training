import styled from "styled-components";

export const StyledComponents = () => {
    return (
        <SContainer>
            <STitle>スタイルコンポーネントです</STitle>
            <SButton>ボタン</SButton>
        </SContainer>
    )
}
const SContainer = styled.div`
    width: 600px;
    margin-right: auto;
    margin-left: auto;
`;
const STitle = styled.p`
    color:blue;
    font-size: 36px;
    font-weight: bold;
`
const SButton = styled.button`
    border: solid 2px red;
    border-radius: 100vh;
    background-color: white;
    color: red;
    &:hover {
        border-color: blue;
        color: blue;
    }
`