import {SectionContainer} from './Quarks'
import { Title, Par, Link } from './theme';

function App() {
  return (
    <>
{/* // Used as themed components */}
    <Title>Hello I am the Title components - H1</Title>
    <Title as="h3" max={32} clr="grey">Hello I am the Sub Title components - H3</Title>
    <Par>Hello I am the Par components</Par>
    <Link clr="red">Hello I am the Link components</Link>

{/* // Used as themed components */}
    <SectionContainer>
      <header>
        <h1 className="sectionTitle">Hello I am the Title components - H1</h1>
        <h3 className="sectionSubTitle">Hello I am the Sub Title components - H3</h3>
      </header>

        <p className="sectionPar">
          Hello I am the Par components
        </p>
        <a
          className="sectionLink"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </SectionContainer>
    </>
  );
}

export default App;
