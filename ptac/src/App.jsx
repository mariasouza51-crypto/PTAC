
function App() {
    //ex1
  console.log("A");

  setTimeout(() => console.log("B"), 0);

  console.log("C");

  return (
    <div>
      <h1>Exercício 1 - Event Loop</h1>
      <p>Confira a ordem de execução no console.</p>
    </div>
  );
}

export default App;

//ex2


  console.log("A");

  setTimeout(() => {
    console.log("B");
  }, 200);

  console.log("C");

  setTimeout(() => {
    console.log("D");
  }, 0);

  console.log("E");

  return (
    <div>
      <h1>Exercício 2 - Event Loop</h1>
      <p>Confira a ordem de execução no console.</p>
    </div>
  );
