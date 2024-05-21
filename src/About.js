import img from './AI-ML-4.jpg';

const About = () => {
    return ( 
        <div className="about">
            <h1>KHARAGPUR DATA ANALYTICS GROUP</h1>
            <img src={img} alt="images" style={{width: "50%", height:"50%"}}/>
            <p>The AI and ML group is a vibrant hub of passionate individuals driven by a shared curiosity for the future. With backgrounds in computer science, mathematics, and engineering, they bring diverse perspectives to the table. Their collaborative spirit fosters an environment of experimentation and learning, where complex algorithms are tackled head-on and innovative solutions are constantly brewing. This group is at the forefront of technological advancement, pushing the boundaries of what artificial intelligence and machine learning can achieve.</p>
        </div>
     );
}
 
export default About;