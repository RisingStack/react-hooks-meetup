import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fontSize: 10 };
  }

  componentDidMount() {
    console.log(`Font size: ${this.state.fontSize}`);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.fontSize !== this.state.fontSize) {
      console.log(`Font size: ${this.state.fontSize}`);
    }
  }

  render() {
    return (
      <>
        <button
          onClick={() =>
            this.setState({
              fontSize: this.state.fontSize + 3
            })
          }
        >
          Increase hello size
        </button>
        <p style={{ fontSize: `${this.state.fontSize}px` }}>
          Hello, {this.props.name}
        </p>
      </>
    );
  }
}

export default App;
