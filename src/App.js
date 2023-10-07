import Card from './elements/card/Card';
import Nav from './elements/nav/Nav';
import './App.scss'
import Footer from './elements/footer/Footer';
function App() {
  return (<>
  <Nav/>
  <div className="card-box">
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  </div>
  <Footer/>
  </>
   
   
  );
}

export default App;
