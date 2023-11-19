import styled from "styled-components";
import bannerImage from "../../assets/images/banner.jpg"

/*높이 */
const BASICINTRO_HEIGHT=700;

const BasicIntroWrapper = styled.div`
    width: 100%;
    position: relative;
    height: ${BASICINTRO_HEIGHT}px;
    background-image: url(${bannerImage});
    background-size: cover;
    background-position: center;
`;

const ShortIntro = styled.div`
    color: white;
    position: absolute;
    left: 9vw;
    top: 50%;
    width: 100%;
    word-break: keep-all;
    transform: translateY(-50%);
    font-weight: bold;
    h1{
        margin-top: -20px;
        font-size: 48px;
    }
    h3 {
        font-size: 34px;
        padding: 0;
        margin: 0;
        margin-bottom: 4px;
    }
    div {
        font-weight: normal;
    }
`;

const IntroBackground = styled.div`
    background-color: rgba(0,0,0,0.6);
    position: absolute;
    width: 100%;
    height: ${BASICINTRO_HEIGHT}px;
`;

export default function BasicIntro() {
    return (
        <>
            <BasicIntroWrapper>
                <IntroBackground/>
                <ShortIntro>
                    <h1>FrontEnd & BackEnd.</h1>
                    <h3>FullStack 웹 개발자 신지운입니다.</h3>
                    <div>
                        항상 새로운 지식을 탐구하는 데 열정적인 개발자입니다.
                    </div>
                </ShortIntro>
            </BasicIntroWrapper>
        </>
    )
}