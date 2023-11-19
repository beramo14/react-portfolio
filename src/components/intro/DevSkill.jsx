import styled from "styled-components"

const StackWrapper = styled.div`
    width: 100%;
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    row-gap : 5vh;
    column-gap: 30px;
`;

const Stack = styled.div`
    width: 240px;
    background-color: white;
    border-radius: 8px;
    padding: 12px 10px;
    box-shadow: 3px 3px 13px 1px rgb(0 0 0 / 50%);
    h2 {
        text-align: center;
        margin: 0;
        padding: 0;
    }
`;

export default function DevSkill() {

    return (
        <StackWrapper>
            <Stack>
                <h2>BackEnd</h2>
                <ul>
                    <li>Java</li>
                    <li>Spring Boot</li>
                    <li>Spring Framework</li>
                    <li>JSP</li>
                    <li>JPA</li>
                    <li>myBatis(ibatis)</li>
                </ul>
            </Stack>
            <Stack>
                <h2>FrontEnd</h2>
                <ul>
                    <li>HTML</li>
                    <li>JS</li>
                    <li>CSS</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                    <li>React.js</li>
                </ul>
            </Stack>
            <Stack>
                <h2>Database</h2>
                <ul>
                    <li>Oracle</li>
                    <li>MariaDB</li>
                </ul>
            </Stack>
            <Stack>
                <h2>Deployment</h2>
                <ul>
                    <li>AWS</li>
                    <li>Jenkins</li>
                </ul>
            </Stack>
            <Stack>
                <h2>IDE</h2>
                <ul>
                    <li>VSCode</li>
                    <li>SpringToolSuite</li>
                    <li>Eclipse</li>
                </ul>
            </Stack>
            <Stack>
                <h2>Communication</h2>
                <ul>
                    <li>Notion</li>
                    <li>Figma</li>
                    <li>Google docs</li>
                </ul>
            </Stack>
            <Stack>
                <h2>Version Control</h2>
                <ul>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>SVN</li>
                    <li>TortoiseSVN</li>
                </ul>
            </Stack>
        </StackWrapper>
    )
}
