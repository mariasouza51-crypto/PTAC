
function App() {
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
