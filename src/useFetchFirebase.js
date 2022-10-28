import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import db from "./firebase";

const useFetchFirebase = () => {
    const gdb = db;
    const [dataArray, setDataArray] = useState(null); //setstate for updating the array that gets displayed
    const [idArray, setIdArray] = useState(null);

    useEffect(() => { // useEffect for something that gets executed only once on component load

        const fetchData = async () => {
            const arr = [];
            const arrId = [];
            const q = query(collection(gdb, 'data'), orderBy('created_at', 'desc')); // this is a query, used to grab the collection and sort the results by created date in descending order
            try {
                const fetchedData = await getDocs(q); // query gets used here, everything works fine as well
                fetchedData.forEach(doc => {
                    arr.push(doc.data());
                    arrId.push(doc.id);
                });
                setDataArray(arr);
                setIdArray(arrId);
                console.log(dataArray);
            } catch (error) {
                console.log(error);
            }

            return null;
        }

        fetchData();
    }, []);
    
    return { dataArray, idArray };
}
 
export default useFetchFirebase;