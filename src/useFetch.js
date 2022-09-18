import { useEffect, useState } from 'react'
import axios  from 'axios'

function useFetch(url) {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect (() => {
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
    }, [url]);//the dependency we pass is only the url because if the url changes we want to request the new data
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