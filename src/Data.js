import useFetchFirebase from "./useFetchFirebase";
import { Link } from "react-router-dom";

const Data = () => {

    const { dataArray: data, idArray: id } = useFetchFirebase();
    
    const dateConvert = (timestamp) => {
        const date = new Date(timestamp*1000); // necessary because Date uses MILLISECONDS instead of seconds
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}, ${(date.getHours() < 10 ? '0' : '') + date.getHours()}:${(date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}`;
        // keep in mind the solution for displaying hours and minutes over there!
    }


    if (data === null) {
        return <div className="home"><h2>Loading...</h2></div>;
      }
    
    if (data.length === 0) {
        return <div className="home">
                <h2 className="p-nomargin">No data.</h2>
                <p>To add new data, use the CREATE option.</p>

                </div>;
    }

    return (
        <div className="home-data">
            {data.map((document, index) => (// adds a div for each document, linking to a page with the ID according to the index position they are in
                <Link to={`/data/${id[index]}`}>
                    <div className="doc-box" key={id[index]}>
                        <div>
                            <h3>{document.title}</h3>
                            <p>by {document.author}</p>
                        </div>
                        <div>
                            <h4>{dateConvert(document.created_at.seconds)}</h4>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
 
export default Data;