import { useEffect, useState } from "react";
import db from "./firebase";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { Link, useNavigate, useParams } from "react-router-dom";

const LogDetails = () => {
    const { id } = useParams(); // this ID comes from the route URL that is defined when the data is fetched in the "Data" page. reference to it can be found in the route /data/:id
    const [fetchedDoc, setFetchedDoc] = useState(null); // for loading screen & to use as display attributes (fetchedDoc.author) etc
    const [deleted, setDeleted] = useState(true); // for "Deleting..." while async function is being executed
    const navigate = useNavigate(); // used for redirecting to different urls

    // fetchedDoc => author | content | created_at | title

    useEffect(() => {
        const fetchDoc = async () => {
            const docReference = doc(db, 'data', id); // "doc" takes in the database, collection, and ID of the document you want to reference.
            const docs = await getDoc(docReference); // basically avoids having to do [collection(db, 'data'), id]
            setFetchedDoc(docs.data());
        }

        fetchDoc();
    }, []);

    const dateConvert = (timestamp) => {
        const date = new Date(timestamp*1000); // necessary because Date uses MILLISECONDS instead of seconds
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}, ${(date.getHours() < 10 ? '0' : '') + date.getHours()}:${(date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}`;
        // keep in mind the solution for displaying hours and minutes over there!
    }

    const handleDelete = async () => {

        setDeleted(false);
        const docReference = doc(db, 'data', id);
        try {
            await deleteDoc(docReference); // deletes doc
            navigate('/data');
        } catch (error) {
            console.log(error);
        }
    }

    if (fetchedDoc === null) {
        return <div className="home"><h2>Loading...</h2></div>;
      }

    return (
        <div className="home-logdata">
            <div className="header-logdata">
                <div>
                    <h3>{fetchedDoc.title}</h3>
                    <p><i>Logged by {fetchedDoc.author}</i></p>
                </div>
                <div>
                    <h4>Date logged: <br /> {dateConvert(fetchedDoc.created_at.seconds)}</h4>
                </div>
            </div>
            <hr />
            <div className="data-content">
                <p>{fetchedDoc.content}</p>
            </div>
            <hr className="margin-adjust-hr-hld" />
            <div className="sp-btw">
                <Link to={"/data"}><button>Back</button></Link>
                {deleted && <button onClick={handleDelete}>Delete Log</button>}
                {!deleted && <p>Deleting...</p>}
            </div>
        </div>
    );
}
 
export default LogDetails;