import React from 'react';

class App extends React.Component {
  constructor(props){
      super(props);
      this.state = { show: false };
  }

  render(){
    return <div>
      <button className="bg-purple-900 text-white rounded py-2 px-3"
        onClick={() => this.setState({show: !this.state.show})}>Click me</button>
      {
        this.state.show ?
        <img className="w-40 mx-auto" src="linux_logo.png"></img>
        : null
      }


    </div>;
  }
}

export default App;
