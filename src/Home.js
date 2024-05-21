import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
    const { Data: blogs, isPending, error} = useFetch('http://localhost:3000/blogs')
    
    return ( 
        <div className="home">
            <h2>KHARAGPUR DATA ANALYTICS GROUP</h2>
            { error && <div> { error } </div>}
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="ALL THE COURSE CONTENT IS HERE!!"></BlogList>}
        </div>
        
     );
}
 
export default Home;