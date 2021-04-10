import React, {useState, useEffect, useRef} from 'react';
import Picture from './components/Picture';

function App() {

  const [title, setTitle] = useState("Hello World !");
  const [show, setShow] = useState(false);
  const isShowInitialize = useRef(false);

  useEffect(() => console.log('Composant App monté'), []);
  useEffect(() => {
    if(isShowInitialize.current){
      console.log('Show mis à jour');
    } else {
      isShowInitialize.current = true;
    }
  }, [show]);

  function handleClick(){
    setShow(!show);
  }

  return (
    <div>
      {console.log('JSX Render')}
      <h1 className="text-4xl text-purple-700 my-5">{title}</h1>
      <button className="bg-purple-900 text-white rounded py-2 px-3"
        onClick={handleClick}>Click me</button>
      {show ? <Picture /> : null}
    </div>
  );
}

/*
class App extends React.Component {
  constructor(props){
      super(props);
      this.state = { show: false, title: "Hello World !" };
      //console.log('Constructeur appelé');
  }

  componentDidMount(){
    //console.log('Composant monté');
    //this.setState({title: "Le composant à bien été monté !"});
  }

  componentDidUpdate() {
      console.log('Composant mis à jour');
  }

  render(){
    //console.log('Render appelé');
    return <div>
      <h1 className="text-4xl text-purple-700 my-5">{this.state.title}</h1>
      <button className="bg-purple-900 text-white rounded py-2 px-3"
        onClick={() => this.setState({show: !this.state.show})}>Click me</button>
      {
        this.state.show?<Picture />: null
      }


    </div>;
  }
}
*/

export default App;
