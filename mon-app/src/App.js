import React from 'react';

class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {title: "Hello World !"};
  }

  render() {
    return  <h1 className="text-center text-blue-500 text-3xl">{this.state.title}</h1>;
  }
}

export default App;
