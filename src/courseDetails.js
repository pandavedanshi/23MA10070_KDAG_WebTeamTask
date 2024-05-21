import { useParams } from "react-router-dom";
import useFetch from './useFetch';

const CourseDetails = () => {

    const { id } = useParams();
    const { Data: cource, isPending, error} = useFetch('http://localhost:3000/cources/' + id);

    return ( 
        

        <div className="course-details">
            { isPending && <div>Loading</div> }
            { error && <div>{ error }</div> }
            { cource && (
                <article>
                    <h2>{ cource.title }</h2>
                    <div>{ cource.description }</div>
                </article>
            )} 
        </div>
     );
}
 
export default CourseDetails;