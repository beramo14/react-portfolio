import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import BasicIntro from './components/intro/BasicIntro';
import DevSkill from './components/intro/DevSkill';
import Career from './components/intro/Career';
import Project from './components/intro/Project';
import Footer from './components/Footer';

const Content = styled.div`
  width: 100vw;
  background-color: ${(props)=>props.backgroundColor || "rgba(0, 0, 0, 0)"};
`;

const Intro = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: ${(props)=>props.height || "100px"} 3vw;
`;

const IntroTitle = styled.h1`
  padding: 0;
  margin-top: 0;
  margin-bottom: 30px;
  font-size: 40px;
  color: ${(props)=>props.color || "black"};
`;


function App() {
  return (
    <div className="App">
      <Header/>
      
      <Content>
        <BasicIntro/>
      </Content>

      <Content backgroundColor="#92c461">
        <Intro>
          <IntroTitle>CAREER</IntroTitle>
          <Career/>
        </Intro>
      </Content>

      <Content backgroundColor="#007172">
        <Intro>
          <IntroTitle color="white">DEV SKILL</IntroTitle>
          <DevSkill/>
        </Intro>
      </Content>

      <Content backgroundColor="#e38921">
        <Intro>
          <IntroTitle color="white">PROJECT</IntroTitle>
          <Project/>
        </Intro>
      </Content>

      <Footer/>
    </div>
  );
}

export default App;
