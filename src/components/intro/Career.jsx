import styled from "styled-components";


const CareerTable = styled.table`
    width: 100%;
    padding: 5px 0;
    background-color: white;
    border: 0;
`;

    
const CareerTd = styled.td`
    padding: 0 10px;
    font-size: 14px;
    width: ${(props)=>props.width || "10%"};
    text-align: ${(props)=>props.center?"center":"left"};
    ul {
        margin: 6px 0;
    }
    b, span {
        font-size: 16px;
    }
`;

export default function Career() {
    return (
        <>
            <CareerTable>
                <tbody>
                    <tr>
                        <CareerTd width="15%" center>
                            2019.01 ~ 2021.03<br/>
                            <b>(2년 3개월)</b>
                        </CareerTd>
                        <CareerTd width="25%" center>
                            <b>㈜동북아생물다양성연구소</b><br/>
                            <span>(IT사업본부, 연구원)</span>
                        </CareerTd>
                        <CareerTd width="60%">
                            <ul>
                                <li>Java 웹(spring framework, jsp) 개발 및 유지보수</li>
                                <li>웹 프론트엔드(HTML, CSS, JS, JQuery, Bootstrap) 개발 및 유지보수</li>
                                <li>DB(Oracle) 및 WAS서버 관리</li>
                            </ul>
                        </CareerTd>
                    </tr>
                </tbody>
            </CareerTable>
        </>
    )
}
