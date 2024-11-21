Lampadina
===
**Consegna**

Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

**BONUS**

Facciamo accendi e spegni:
- Al primo click la lampadina si accende e nel bottone compare la scritta “Spegni”
- Al secondo click la lampadina si spegne e nel bottone compare la scritta “Accendi”
- E così via...
## Svolgimento
- Nel file HTML ho impostato la pagina e creato un div con all'interno le due immagini e il bottone.
- Nel file CSS ho creato una classe per il Display None da associare inizialmente all'immagine della lampadina accesa.
- Ho creato le const nel file JS per richiamare le due immagini e il bottone da cliccare, utilizzando sia le classi e sia l'ID
- Ho poi utilizzato il metodo addEventListener, per fare in modo che una volta cliccato il bottone, con l'utilizzo delle const create in precedenza, venisse aggiunta la classe HIDE all'immagine della lampadina spenta e venisse rimossa la stessa dall'immagine della lampadina accesa. In questo modo quando si clicca il bottone, sparisce una e compare l'altra, dando alla lampadina , l'impressione di accendersi.
- Per il bonus, ho utilizzato lo stesso metodo visto in classe, cioè ho usato un operatore ternario: 
  - alla costante BTN ho attribuito l'INNER.HTML.
  - Ho dato la condizione che se l'immagine della lampadina spenta avesse avuto una classe di nome HIDE, il bottone avrebbe recitato la parola 'Spegni' , altrimenti la parola 'Accendi'.