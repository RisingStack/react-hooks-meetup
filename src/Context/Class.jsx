import React from "react";
import NameContext from "./Context";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fontSize: 10 };
  }

  render() {
    return (
      <NameContext.Consumer>
        {name => (
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
              Hello, {name}
            </p>
          </>
        )}
      </NameContext.Consumer>
    );
  }
}

export default App;
