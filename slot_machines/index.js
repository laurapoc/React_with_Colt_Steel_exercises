/*jshint esversion: 6 */

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Slot Machines!</h1>
        <Machines emoji={3} />
        <Machines emoji={3} />
        <Machines emoji={3} />

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
