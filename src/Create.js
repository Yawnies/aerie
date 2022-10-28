import db from "./firebase.js";
// import { useRef } from "react";
import {collection, addDoc, Timestamp} from 'firebase/firestore';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    // const form = useRef(); // this is the same as querySelector();
    // ref={form} add this to form if used

    // these useStates are meant to store the values while the user is typing them on the form, so we don't have to reference them later. (i think at least xdd)
    const [logtitle, setLogtitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    // btw this can be done without useStates..

    const [adding, setAdding] = useState(false); // for checking whether the adding db warning should display
    const navigate = useNavigate();


    const handleSubmit = async (submitEvent) => {
        submitEvent.preventDefault();
        const now = Timestamp.now();
        setAdding(true);

        const dataObject = {
            title: `${logtitle.trim()}`,
            author: `${author.trim()}`,
            content: `${content.trim()}`,
            created_at: now
        }
        // why the fuck does adding 'content' inside a TEMPLATE STRING conserve the formatting??????

        try {
            setLogtitle('');
            setAuthor('');
            setContent('');
            await addDoc(collection(db, 'data'), dataObject); // in this case 'addDocument' is defined as the response
            navigate('/data');
        } catch (error) {
            console.log(error);
        }
        // form.current.reset();
    }


    return (
        <div className="home">
            <div className="fix-home-h2">
                <h2>Create Data Log</h2>
                <hr />
            </div>
            <form onSubmit={handleSubmit}>
                <p>Log Name</p>
                <input type="text" name="logtitle" placeholder="Log title here..." maxLength={40}
                    value={logtitle} //aka. the INITIAL value is set to be "logtitle", in this case an EMPTY value ''
                    onChange={function(event) { setLogtitle(event.target.value); }} // this is an anon function that sets the content to the target's current value (what was typed in)
                        required />
                <p>Author</p>
                <input type="text" name="author" placeholder="Author name here..." maxLength={20} 
                    value={author} //aka. the INITIAL value is set to be "author", in this case an EMPTY value ''
                    onChange={function(event) { setAuthor(event.target.value); }} // this is an anon function that sets the content to the target's current value (what was typed in)
                        required />
                <p>Content</p>
                <textarea name="content" cols="81" rows="10" placeholder="Log content here..." maxLength={3000} 
                    value={content} //aka. the INITIAL value is set to be "content", in this case an EMPTY value ''. if not updated with setContent it is always locked in to default value
                    onChange={function(event) { setContent(event.target.value); }} // this is an anon function that sets the content to the target's current value (what was typed in)
                        required></textarea>
                {!adding && <button type="submit">Submit</button>}
                {adding && <div className="disabled-button">Adding log to database...</div>}
            </form>
        </div>
    );
}
 
export default Create;