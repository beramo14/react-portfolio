import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    align-items: center;
    padding: 18px 20px;
    background-color: lightgray;
`;

const TypoLogo = styled.span`
    font-size: 1.3em;
    font-weight: bold;
`;

const Navbar = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    margin-left: 60px;
    flex-direction: row;
    flex-wrap: nowrap;
    column-gap: 50px;
`;

const NavItem = styled.li`
    text-decoration: none;
    list-style: none;
    font-size: 1.1em;
    a {
        text-decoration: none;
        color: black;
    }
`;

export default function Header() {
    return (
        <header>
            <Nav>
                <TypoLogo>Shin Jiun</TypoLogo>
                <Navbar>
                    <NavItem>
                        <a href="https://github.com/beramo14" target="_blank" rel="noreferrer noopener">GitHub</a>
                    </NavItem>
                    <NavItem>
                        jiun0104@naver.com
                    </NavItem>
                </Navbar>
            </Nav>
        </header>
    )
}
