
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


  //ex3

  console.log("A");

  setTimeout(() => console.log("B"), 0);

  Promise.resolve()
    .then(() => console.log("C"))
    .then(() => console.log("D"));

  console.log("E");

  return (
    <div>
      <h1>Exercício 3 - Event Loop</h1>
      <p>Confira a ordem de execução no console.</p>
    </div>
  );


  //ex4

    for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
  }

  console.log("Fim do loop");

  return (
    <div>
      <h1>Exercício 4 - Event Loop</h1>
      <p>Confira a ordem de execução no console.</p>
    </div>
  );

//ex5
  async function exemploAsync() {
    console.log("Dentro da função: antes do await");

    await null;

    console.log("Dentro da função: depois do await");
  }

  console.log("A");

  exemploAsync();

  console.log("B");

  return (
    <div>
      <h1>Exercício 5 - Event Loop</h1>
      <p>Confira a ordem de execução no console.</p>
    </div>
  );