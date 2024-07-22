import { useState } from 'react';
import { CoreConceptsData, EXAMPLES } from './data'
import Header from "./components/Header/Header"
import { CoreConcept } from "./components/CoreConcept";
import TabButton from './components/TabButton';

function App() {
  const [tabContent, setTabContent] = useState(1);

  function handleSelect(selctedButton) {
    setTabContent(selctedButton);
  }

  return (
    <> 
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Coer Concepts</h2>
          <ul>
            { CoreConceptsData.map((content, index) =>
              <CoreConcept
                key={ index }
                { ...CoreConceptsData[index] }
              />
            ) }
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={ tabContent === 1 } tabContent onSelect={ () => handleSelect(1) }>components</TabButton>
            <TabButton isSelected={ tabContent === 2 } onSelect={ () => handleSelect(2) }>JSX</TabButton>
            <TabButton isSelected={ tabContent === 3 } onSelect={ () => handleSelect(3) }>Props</TabButton>
            <TabButton isSelected={ tabContent === 4 } onSelect={ () => handleSelect(4) }>State</TabButton>
          </menu>
          { !tabContent ? <p>Select a tab to view the content</p> :
            <div id="tab-content">
              <h3>{ EXAMPLES[tabContent].title }</h3>
              <p>{ EXAMPLES[tabContent].description }</p>
              <pre>
                <code>
                  { EXAMPLES[tabContent].code }
                </code>
              </pre>
            </div> }
        </section>
      </main> 
    </>
  );
}

export default App;
