import { Link } from "react-router-dom";




const BlogList = ({blogs, title}) => {
    
    return ( 
        <div className="bl">
            <br /><br /><br />
            <h2>{ title }</h2>
            {blogs.map((blog) => (
            <div className="blog-preview" key = {blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                   <h2>{ blog.title }</h2>
                    <p>by { blog.author }</p>
                </Link>
                
            </div>
         ))}
        </div>
        
     );
}
 
export default BlogList;