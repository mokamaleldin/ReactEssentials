import { EXAMPLES } from '../data'
import { useState } from 'react';
import TabButton from './TabButton';
import Section from './Section';
import Tabs from './Tabs';

export default function Examples() {
    const [tabContent, setTabContent] = useState(1);

    function handleSelect(selctedButton) {
        setTabContent(selctedButton);
    }    
    return (
        <Section title={ 'Examples' } id="examples">
            <Tabs
                buttonsContainer="menu"
                buttons={ <>
                    <TabButton isSelected={ tabContent === 1 } onClick={ () => handleSelect(1) }>components</TabButton>
                    <TabButton isSelected={ tabContent === 2 } onClick={ () => handleSelect(2) }>JSX</TabButton>
                    <TabButton isSelected={ tabContent === 3 } onClick={ () => handleSelect(3) }>Props</TabButton>
                    <TabButton isSelected={ tabContent === 4 } onClick={ () => handleSelect(4) }>State</TabButton>
                </> }
            >

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
            </Tabs>


        </Section>
    )
}