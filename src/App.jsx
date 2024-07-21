import reactImg from "./assets/react-core-concepts.png"
import componentsImg from './assets/components.png'

const reactDescriptions = ['Fundamental', "Crucial", "Core"]

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

function Header() {
  const des = reactDescriptions[genRandomInt(2)];
  setInterval(des, 1000)
  return (
    <header>
      <img src={ reactImg } alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        { des } React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept({ title, des, image }) {
  return (
    <li>
      <img src={ image } alt="image" />
      <h3>{ title }</h3>
      <p>{ des }</p>
    </li>
  )
}

function App() {
  return (
    <div> 
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Coer Concepts</h2>
          <ul>
            <CoreConcept
              title="mkee"
              des="mkee is the best"
              image={ componentsImg }
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
