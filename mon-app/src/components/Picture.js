import React, { Component, useEffect, useState } from 'react';

function Picture(){

  //const [myTimer, setMyTimer] = useState(null);
  const [images, setImages] = useState([
    'linux_logo.png',
    'linux_logo_red.png',
    'linux_logo_green.png',
    'linux_logo_blue.png'
  ]);

  function ImagesComponent(){
    return images.map((name) => {
      return (
        <img className="w-40 mx-auto" src={name} alt="logo"></img>
      );
    });
  }

  const [image, setImage] = useState(null);

  function handleImageName(event){
    //console.log(event.target.value);
    setImage(event.target.value);
  }

  function addImageName(){
    let newImages = [ ...images, image];
    setImages(newImages);
  }

  useEffect(() => {

    const myTimer = setInterval(() => {
      console.log('Timer appelé');
    }, 1000);

    return () => clearInterval(myTimer);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex item-center justify-between">
        <ImagesComponent />
      </div>
      <div className="mt-5">
        <input type="text" className="border-gray-600 shadow rounded p-3 mr-2 outline-none" onChange={handleImageName} placeholder="linux_logo_yellow.png"/>
        <button type="submit" className="bg-purple-400 text-white rounded p-3" onClick={addImageName}>Inscrire le nom d'une image</button>
      </div>
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
