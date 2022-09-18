import './App.css';
import useFetch from './useFetch';

function App() {
  const {data, loading, error, refetch} = useFetch("https://v2.jokeapi.dev/joke/Any");//call the custom hook useFetch in any component

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    console.log(error)
    return <h1>There was an error</h1>
  }
  return (
    <div className="App">
      <h1>
        {data?.setup} : {data?.delivery}
      </h1>
        
        <button onClick={refetch}>Refetch</button>
    </div>
  );
}

export default App;
