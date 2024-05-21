
import Home from './Home';
import ParticlesComponent from './comp/party';
import Navbar from './navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import Course from './Course';
import CourseDetails from './courseDetails';
import About from './About';
import Videos from './Videos';

function App() {

  

  return (
    <Router>
       <div className="App">
       <Navbar></Navbar>
      <div className="content">
      <Routes>
        <Route exact path="/" element={ <Home></Home> }></Route>
        <Route path="/create" element={ <Create></Create> }></Route>
        <Route path="/blogs/:id" element={ <BlogDetails></BlogDetails> }></Route>
        <Route path="/cources" element={ <Course></Course> }></Route>
        <Route path="/cources/:id" element={ <CourseDetails></CourseDetails> }></Route>
        <Route path="/about" element={ <About></About> }></Route>
        <Route path="/vedios" element={ <Videos></Videos> }></Route>
      </Routes>
        
      
      <ParticlesComponent id="particles"></ParticlesComponent>     
          
        
      </div>
        
      
      
      
      
    </div>
    
    </Router>
   
  );
}

export default App;
