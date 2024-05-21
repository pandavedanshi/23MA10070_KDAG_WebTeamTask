

const Create = () => {

    

    const handleSubmit = (e) => {
          e.preventDefault();
         
    }
    return ( 
        <div className="create">
            
            <form onSubmit={handleSubmit}>
                <label>PLEASE SIGN IN HERE:-</label>
                <br /><br /><br /><br />
                <label>Your Name:</label>
                <input type="text" required />
                <label>Your Email Id:</label>
                <input type="email" required />
                <label>Why do you want to join KDAG ?</label>
                <textarea required></textarea>
                <button>Sign Up</button>
            </form>
        </div>
     );
}
 
export default Create;