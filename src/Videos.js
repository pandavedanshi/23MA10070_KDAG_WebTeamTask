import img2 from './mL2.jpg';
import img3 from './img3.jpeg';
import img4 from './img4.jpeg'

const Videos = () => {
    

    return ( 
        <div className="videos">
            <h2>THE REFERENCES ARE PROVIDED HERE:</h2>
             <img src={img2} alt=""  style={{width: "50%", height:"50%"}}/>
             <br />
            <a href="https://youtu.be/ukzFI9rgwfU?si=4Z-hjSpsn3N0_jJf" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    fontSize: '30px',
                    cursor: "pointer",
                    
                }}>Reference on Machine Learning</a>
                <br /><br /><br /><br />
                <img src={img3} alt=""  style={{width: "50%", height:"50%"}}/> <br />
            <a href="https://youtu.be/ad79nYk2keg?si=7ZcDDpJi__AJcE8J" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    fontSize: '30px',
                    cursor: "pointer",
                    margin: '20px'
                }}>Reference on Artificial intelligence</a>
                <br /><br /><br /><br />
                <img src={img4} alt=""  style={{width: "50%", height:"50%"}}/> <br />
            <a href="https://youtu.be/37x5dKW-X5U?si=qRNM1gnSuCePxupl" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    fontSize: '30px',
                    cursor: "pointer"
                }}>Reference on Data Analytics</a>
        </div>
     );
}
 
export default Videos;