import styled from "styled-components"

const FooterWrapper = styled.footer`
    background-color: #F4E2DE;
    padding: 60px 2vw;
    width: 100%;
    h1 {
        padding: 0;
        margin: 0;
        margin-bottom: 10px;
        font-size: 38px;
        span {
            font-size: 24px;
            font-weight: 400;
        }
    }
    p {
        padding: 0;
        margin: 0;
    }
    div.detail {
        display: flex;
        flex-wrap: wrap;
        padding: 0 10px;
        div.left{
            width: 75px;
            font-weight: bold;
        }
        div.right{
            width: calc(100% - 80px);
        }
    }
`;

export default function Footer() {
    return (
        <FooterWrapper>
            <h1>신지운 <span>Shin Jiun</span></h1>
            <div className="detail">
                <div className="left">GitHub</div>
                <div className="right"><a href="https://github.com/beramo14">https://github.com/beramo14</a></div>
                <div className="left">Contact</div>
                <div className="right">
                    <p>010-4026-2807</p>
                    <p>jiun0104@naver.com</p>
                </div>
            </div>
        </FooterWrapper>
    )
}