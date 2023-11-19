import styled from "styled-components";

import zbroImg from "../../assets/images/project/zbro.gif";
import snsImg from "../../assets/images/project/sns.gif";
import todoImg from "../../assets/images/project/todo.gif";
import boardImg from "../../assets/images/project/board.gif";
import portfolioImg from "../../assets/images/project/portfolio.JPG";



const ProjectRow = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    row-gap: 30px;
    margin: 0 2vw;
`;

const ProjectCard = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 15px 5px;
    border-radius: 8px;
    box-shadow: 3px 3px 13px 1px rgb(0 0 0 / 50%);
    background-color: white;
    justify-content: space-around;
    gap: 6px;
    div.left {
        width: 400px;
        height: 270px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8px;
        }
    }
    div.detail {
        width: 64%;
        min-width: 380px;
        span {
            padding-top : 10px;
            font-size: 14px;
        }
        h2 {
            margin:0;
            padding:0;
            font-size: 26px;
            font-weight: bold;
        }
        p.intro {
            margin: 0;
            padding: 0;
            margin-bottom: 12px;
            font-weight: bold;
        }
        div.ref{
            font-weight: bold;
            font-size: 14px;
            margin-bottom: 10px;
            p {
                margin:0;
            }
        }
        div.description {
            background-color: #e9e9e9;
            word-break: keep-all;
            padding: 5px;
            margin: 2px 0;
            border-radius: 8px;
        }
        ul.use-stack{
            margin: 0;
            padding: 0;
            font-size: 14px;
            li {
                list-style: none;
                div.stack{
                    display: inline-block;
                    font-weight: bold;
                    width: 85px;
                }
                div.stack-detail{
                    display: inline-block;
                    width: calc(100% - 85px)
                }
            }
        }
    }
`;


export default function Project() {
    return (
        <>
            <ProjectRow>
                <ProjectCard>
                    <div className="left">
                        <img src={zbroImg} alt="ZBRO GIF"/>
                    </div>
                    <div className="detail">
                        <span>팀 프로젝트(국비교육과정)</span>
                        <h2>지브로</h2>
                        <p className="intro">1인가구 생활공간 중계서비스</p>
                        <div className="ref">
                            <p>GitHub : <a href="https://github.com/beramo14/ZBRO" target="_blank" rel="noreferrer noopener">github.com/beramo14/ZBRO</a></p>
                            <p>Demo : <a href="https://zbro.beramo.kr/" target="_blank" rel="noreferrer noopener">zbro.beramo.kr</a></p>
                            <p>Docs : <a href="https://beramo1144.notion.site/ZBRO-2819ab9d9ede4ed989f61a989079fbb1?pvs=4" target="_blank" rel="noreferrer noopener">Notion</a></p>
                        </div>
                        <div className="description">
                            국비교육과정 동안 진행했던 마지막 프로젝트이자 첫 팀 프로젝트입니다.<br/><br/>

                            4명으로 구성된 팀으로 각자 BackEnd, FrontEnd 나누지 않고 기능별로 나누어 개발을 진행하였습니다.<br/>

                            저는 개발팀장을 맡아 기능 명세서 작성, 개발 현황 파악, DB 설계, 주요 기능 개발 등의 역할을 수행하였습니다.<br/>
                            이외에 문서작업, 리포지토리 관리 또한 같이 병행하였습니다.
                        </div>
                        <ul className="use-stack">
                            <li>
                                <div className="stack">FrontEnd</div>
                                <div className="stack-detail">HTML, CSS, JS, jQuery, Bootstrap, Thymeleaf</div>
                            </li>
                            <li>
                                <div className="stack">BackEnd</div>
                                <div className="stack-detail">Spring boot, JPA, MariaDB</div>
                            </li>
                        </ul>
                    </div>
                </ProjectCard>
                <ProjectCard>
                    <div className="left">
                        <img src={snsImg} alt="spting-sns GIF"/>
                    </div>
                    <div className="detail">
                        <span>개인 프로젝트(국비교육과정)</span>
                        <h2>Spring SNS</h2>
                        <p className="intro">Spring boot를 사용하여 만든 SNS</p>
                        <div className="ref">
                            <p>GitHub : <a href="https://github.com/beramo14/spring-sns" target="_blank" rel="noreferrer noopener">github.com/beramo14/spring-sns</a></p>
                            <p>Demo : <a href="https://sns.beramo.kr/" target="_blank" rel="noreferrer noopener">sns.beramo.kr</a></p>
                        </div>
                        <div className="description">
                            국비교육과정 중에 진행했던 첫 개인 프로젝트입니다.<br/>
                            프로그램 개발에서 문서 작성이 얼마나 중요한지 깨닫게 되었습니다.
                        </div>
                        <ul className="use-stack">
                            <li>
                                <div className="stack">FrontEnd</div>
                                <div className="stack-detail">HTML, CSS, JS, jQuery, Bootstrap, Thymeleaf</div>
                            </li>
                            <li>
                                <div className="stack">BackEnd</div>
                                <div className="stack-detail">Spring boot, JPA, MariaDB</div>
                            </li>
                        </ul>
                    </div>
                </ProjectCard>
                <ProjectCard>
                    <div className="left">
                        <img src={todoImg} alt="react-todo GIF"/>  
                    </div>
                    <div className="detail">
                        <span>개인 프로젝트</span>
                        <h2>react-todo</h2>
                        <p className="intro">React를 사용하여 만든 ToDo-List</p>
                        <div className="ref">
                            <p>GitHub : <a href="https://github.com/beramo14/react-todo" target="_blank" rel="noreferrer noopener">github.com/beramo14/react-todo</a></p>
                        </div>
                        <div className="description">
                            React 학습 중 복습 삼아 제작한 Todo List입니다.
                        </div>
                        <ul className="use-stack">
                            <li>
                                <div className="stack">FrontEnd</div>
                                <div className="stack-detail">HTML, CSS, JS, React.js</div>
                            </li>
                        </ul>
                    </div>
                </ProjectCard>
                <ProjectCard>
                    <div className="left">
                        <img src={boardImg} alt="react-board GIF"/>
                    </div>
                    <div className="detail">
                        <span>개인 프로젝트</span>
                        <h2>react-board</h2>
                        <p className="intro">React와 Spring boot를 사용하여 만든 게시판</p>
                        <div className="ref">
                            <p>GitHub : <a href="https://github.com/beramo14/react-board" target="_blank" rel="noreferrer noopener">github.com/beramo14/react-board</a></p>
                        </div>
                        <div className="description">
                            React학습을 마무리 후 첫 개인 프로젝트입니다.<br/>
                            FrontEnd는 React, BackEnd은 Spring boot를 사용하여 제작하였습니다.
                        </div>
                        <ul className="use-stack">
                            <li>
                                <div className="stack">FrontEnd</div>
                                <div className="stack-detail">HTML, CSS, JS, Bootstrap, React.js, axios, react-router</div>
                            </li>
                            <li>
                                <div className="stack">BackEnd</div>
                                <div className="stack-detail">Spring boot, JPA, MariaDB</div>
                            </li>
                        </ul>
                    </div>
                </ProjectCard>
                <ProjectCard>
                    <div className="left">
                        <img src={portfolioImg} alt="react-protfolio"/>
                    </div>
                    <div className="detail">
                        <span>개인 프로젝트</span>
                        <h2>react-portfolio</h2>
                        <p className="intro">포트폴리오 </p>
                        <div className="ref">
                            <p>GitHub : <a href="https://github.com/beramo14/react-portfolio" target="_blank" rel="noreferrer noopener">github.com/beramo14/react-portfolio</a></p>
                            <p>URL : <a href="https://beramo.kr/" target="_blank" rel="noreferrer noopener">beramo.kr</a></p>
                        </div>
                        <div className="description">
                            현재 보고 있는 웹 페이지입니다.<br/>
                            React를 사용하여 제작한 웹 포트폴리오입니다.<br/>
                            styled-components를 같이 사용하여 디자인하였습니다.
                        </div>
                        <ul className="use-stack">
                            <li>
                                <div className="stack">FrontEnd</div>
                                <div className="stack-detail">HTML, CSS, JS, Bootstrap, React.js, styled-components</div>
                            </li>
                        </ul>
                    </div>
                </ProjectCard>
            </ProjectRow>
        </>
    )
}