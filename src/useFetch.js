import { useEffect, useState } from 'react'
import axios  from 'axios'

function useFetch(url) {

    const [data, setData] = useState(null)// data is initialized to null because no all the time we know the exact type of the data, Sometimes it might be an array, object
    const [loading, setLoading] = useState(false)//loading will be a booloean 
    const [error, setError] = useState(null)

    useEffect (() => {
        setLoading(true);//before we make an api request we set loading to true
        axios
            .get(url)//call our api
            .then((response) => {
                setData(response.data);//dealing with data, setting the data equal to response, sedning our data the data we get from the request
        })
        .catch((err) => {
            setError(err);//catch any error that occur in our api request
        })
        .finally(() => {
            setLoading(false)//setLoading to false (after the promise was resolved)irregardless of get the data wass successfull or there was na error
        })
    }, [url]);//useEffect needs dependenyc array [],the dependency we pass is only the url because if the url changes we want to request the new data

    //function to refect the data without reloading the page    
    const refetch = () => {
        setLoading(true);
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {
            setLoading(false)//setLoading to false (after the promise was resolved)irregardless of get the data wass successfull or there was na error
        })
    }

    return {data, loading, error, refetch}//return the three state (data, loading, error) that we created as an object
}

export default useFetch