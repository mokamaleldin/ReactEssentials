import { CoreConcept } from "./CoreConcept";
import { CoreConceptsData } from '../data'

export default function CoreConcepts() {
    return (
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
    )
}