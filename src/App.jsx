import { CoreConceptsData } from './data'
import Header from "./components/Header/Header"
import { CoreConcept } from "./components/CoreConcept";
import TabButton from './components/TabButton';

function App() {

  function handleSelect() {
    console.log('clicked');
  }

  return (
    <div> 
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Coer Concepts</h2>
          <ul>
            <CoreConcept
              { ...CoreConceptsData[0] }
            />
            <CoreConcept
              { ...CoreConceptsData[1] }
            />
            <CoreConcept
              { ...CoreConceptsData[2] }
            />
            <CoreConcept
              title={ CoreConceptsData[3].title }
              description={ CoreConceptsData[3].description }
              image={ CoreConceptsData[3].image }
            />

          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={ handleSelect }>components</TabButton>
            <TabButton onSelect={ handleSelect }>JSX</TabButton>
            <TabButton onSelect={ handleSelect }>Props</TabButton>
            <TabButton onSelect={ handleSelect }>State</TabButton>
          </menu>
          Dynamic Contect
        </section>
      </main> 
    </div>
  );
}

export default App;
