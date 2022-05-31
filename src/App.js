import Person from "./components/Person";
import Hero from "./components/Hero/Hero";
import Increment from "./components/Increment/Increment";
import User from "./components/user/User";
function App() {
  return (
    <div className="App">
      {/* <MyFunc name='Hamim' profession='Designer'></MyFunc>
      <MyFunc name='Ahamed' profession='Graphics'></MyFunc>
      <MyFunc name='Farjana' profession='Developer'></MyFunc>
      <MyFunc name='Ahanan' profession='Developer'></MyFunc>
      <Person></Person>
      <Hero></Hero>
      <Increment/> */}
      <User></User>
    </div>
  );
}

const personStyle = {
  backgroundColor: 'green',
  border: '2px solid #ddd',
  padding: '30px',
  display: 'inline-Block',
  width: '33.33%',
  margin: 'auto',
  boxSizing: 'border-box'
}
function MyFunc(props){
  return(
    <div className='personStyle' style={personStyle}>
      <h3>My Name is : {props.name}</h3>
      <h4>{props.profession}</h4>
      <button style={{display:'inline-block',padding: '10px 30px',textTransform:'capitalize',cursor: 'pointer'}}>add points</button>
    </div>
  )
}

export default App;
