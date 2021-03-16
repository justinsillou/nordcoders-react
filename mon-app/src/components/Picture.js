import React, { Component } from 'react';

class Picture extends Component{
  constructor(props){
    super(props);
    this.state = {timer: null};
  }

  componentDidMount(){
    this.setState({timer:
      setInterval(() => {
        console.log('Timer appelé');
      }, 1000)
    });
  }

  componentWillUnmount() {
    console.log('Composant Picture démonté.');
    clearInterval(this.state.timer);
  }

  render() {
    return (
      <img className="w-40 mx-auto" src="linux_logo.png" alt="logo"></img>
    )
  }
}

export default Picture;
