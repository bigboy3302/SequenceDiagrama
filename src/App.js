import React from 'react';
import Slide from './Slide';

function App() {
  return (
    <main>
      <Slide title="Kāds ir UML diagrammas mērķis?" content="Diagramma parāda sistēmas struktūru vai uzvedību, un tās mērķis ir palīdzēt attīstīt programmatūru." />
      <Slide title="Kad izmantot UML?" content="UML tiek izmantots programmatūras izstrādē, lai attēlotu sistēmas struktūru vai uzvedību." />
      <Slide title="Kādi ir UML elementi?" content="UML diagrammās var ietilpt objekti, aktieri, klases, sekvenču diagrammas un citi." />
      <Slide title="Kā diagramma izskatītos blogā?" content="Blogā varētu būt diagramma, kas parāda attiecības starp autoru, bloga ierakstiem un lasītājiem." />
    </main>
  );
}

export default App;
