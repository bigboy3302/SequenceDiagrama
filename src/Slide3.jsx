export default function Slide3() {
  return (
    <article>
      <h1>UML elementi sekvences diagrammā</h1>
      <p>
        <pre>
{`UML elements                    Apraksts
------------------------------  ---------------------------------------------
Dalībnieki (Actors)            Iesaiste no ārpuses (lietotājs, sistēma, serviss)
Objekti                        Sistēmas komponenti vai klases eksemplāri
Dzīveslīnijas (Lifelines)     Vertikāla līnija, kas apzīmē objekta eksistenci laikā
Ziņojumi (Messages)           Bultas, kas rāda saziņu starp objektiem
Aktivitāšu joslas             Norāda, kad objekts ir aktīvs un izpilda darbību
Atgriešanas ziņojumi          Punktēta līnija, kas rāda rezultāta atgriešanu
Loop / Condition blok         Norāda atkārtojumu vai noteikumu darbības veikšanai`}
        </pre>
      </p>
    </article>
  );
}
