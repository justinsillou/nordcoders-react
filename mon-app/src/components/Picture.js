import React, { Component, useEffect, useState } from 'react';

function Picture(){

  //const [myTimer, setMyTimer] = useState(null);

  useEffect(() => {

    const myTimer = setInterval(() => {
      console.log('Timer appelé');
    }, 1000);

    return () => clearInterval(myTimer);
  }, []);

  return (
    <div>
      <img className="w-40 mx-auto" src="linux_logo.png" alt="logo"></img>
    </div>
  );
}

/*
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
*/

export default Picture;
