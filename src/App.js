import logo from './logo.svg';
import './App.css';
import Intro from './components/intro/Intro';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Link} from 'react-router-dom';
import Menu from './components/sidebar/Sidebar';
import Playlist from './components/main/playlist/Playlist';
import Watch from './components/main/watch/Watch.js'
import PreviewChannel from './components/PreviewChannel/PreviewChannel.js'
import Home from './components/Anex/Home.js'
import Marah from './components/PreviewChannel/marah/Marah.js'
import Firas from './components/PreviewChannel/firas/Firas.js'
import Oussema from './components/PreviewChannel/oussema/Oussema.js'
import Ilyes from './components/PreviewChannel/ilyes/Ilyes.js'
import MarahAndroid from './components/main/watch/Marah/watch/MarahAndroid'
import Iyed from './components/PreviewChannel/iyed/Iyed.js'
import OussemaUx from './components/main/watch/Oussama/watch/OussemaUx'
import Ilyess from './components/main/watch/ilyess/watch/Ilyess'
import Adidaslogo from './components/main/watch/Oussama/watch/Adidaslogo'
import Ous2 from './components/main/watch/Oussama/watch/Ous2.js'
import Webb from './components/main/watch/Oussama/watch/Webb-1'
import ClubRobotique from './components/main/watch/Marah/watch/ClubRobotique'
import Firasweb from './components/main/watch/Firas/watch/Firasweb.js'
import FirasReact from './components/main/watch/Firas/watch/FirasReact.js'
import IyedWeb from './components/main/watch/iyed/watch/IyedWeb'
import Yezzi from './components/main/watch/Firas/watch/Yezzi.js'
function App() {

  
  return (
   

    <Router>

    <div className="App">
      <div>

<Switch> 
<Route  exact path="/">
  
     
       <Intro/>  
 
  </Route>
  <Route  exact path="/IyedWeb">
  <Header/> 
     <div className="fixe">
      <Menu  calledFromApp="true" />   
       <IyedWeb/>  
       
 </div> 
  </Route>
  <Route  exact path="/FirasReact">
  <Header/> 
     <div className="fixe">
      <Menu  calledFromApp="true" />   
       <FirasReact/>  
       
 </div> 
  </Route>
  
   
  <Route  exact path="/yezzi">
  <Header/> 
     <div className="fixe">
      <Menu  calledFromApp="true" />   
       <Yezzi/>  
       
 </div> 
  </Route>
  <Route  exact path="/Firasweb">
  <Header/> 
     <div className="fixe">
      <Menu  calledFromApp="true" />   
       <Firasweb/>  
       
 </div> 
  </Route>
  <Route  exact path="/ClubRobotique">
  <Header/> 
     <div className="fixe">
      <Menu  calledFromApp="true" />   
       <ClubRobotique/>  
       
 </div> 
  </Route>

  <Route  exact path="/Iyed">
  <Header/> 
     <div className="fixe">
      <Menu  calledFromApp="true" />   
       <Iyed/>  
       
 </div> 
  </Route>
  <Route  exact path="/Ilyess">
  <Header/> 
     <div className="fixe">
      <Menu  calledFromApp="true" />   
       <Ilyess/>  
       
 </div> 
  </Route>
  
  <Route  exact path="/ilyes">
  <Header/> 
     <div className="fixe">
      <Menu  calledFromApp="true" />   
       <Ilyes/>  
 </div> 
  </Route>
<Route  exact path="/oussama">
  <Header/> 
     <div className="fixe">
      <Menu  calledFromApp="true" />   
       <Oussema/>  
       
 </div> 
  </Route>
  <Route  exact path="/OussemaWeb">
  <Header/> 
     <div className="fixe">
      <Menu  calledFromApp="true" />   
       <Webb/>  
       
 </div> 
  </Route>
  <Route  exact path="/ous2">
  <Header/> 
     <div className="fixe">
      <Menu  calledFromApp="true" />   
       <Ous2/>  
       
 </div> 
  </Route>
  <Route  exact path="/Adidaslogo">
  <Header/> 
     <div className="fixe">
      <Menu  calledFromApp="true" />   
       <Adidaslogo/>  
       
 </div> 
  </Route>
  <Route  exact path="/OussemaUx">
  <Header/> 
     <div className="fixe">
      <Menu  calledFromApp="true" />   
       <OussemaUx/>  
       
 </div> 
  </Route>
  
  <Route  exact path="/firas">
  <Header/> 
     <div className="fixe">
      <Menu  calledFromApp="true" />   
       <Firas/>  
 </div> 
  </Route>

  <Route  exact path="/marah">
  <Header/> 
     <div className="fixe">
      <Menu  calledFromApp="true" />   
       <Marah/>  
       
 </div> 
  </Route>
  <Route  exact path="/MarahAndroid">
  <Header/> 
     <div className="fixe">
      <Menu  calledFromApp="true" />   
       <MarahAndroid/>  
       
 </div> 
  </Route>

  <Route  exact path="/Home">
<Home/>
  </Route>

  
  <Route exact path="/main">
     <Header/> 
     <div className="fixe">
      <Menu  calledFromApp="true" />   
      <Main />
     </div>
  </Route>


 <Route exact path="/watch">
   <Header/> 
   <div className="fixe">
     <Menu/>
     <Watch />
    
   </div>
 </Route>


 <Route exact path="/PreviewChannel">
   <Header/> 
   <div className="fixe">
     <Menu value="text" text2="hello world" />
     <PreviewChannel /> 
   </div>
 </Route>
 
</Switch>

</div>
</div>

</Router> 
);

}

export default App;
