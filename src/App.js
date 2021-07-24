import { useState, Fragment } from "react";
import ImageList from "./Components/Images/ImageList";
import ErrorModal from "./Components/UI/ErrorModal";
import Button from "./Components/UI/Button";


function App() {
  const [enteredImageId, setEnteredImageId] = useState('');
  const [error, setError] = useState('');
  const [fetchedData, setFetchedData] = useState({
    message: []
  });
  const searchChangeHandler = (e) => {
    setEnteredImageId(e.target.value)
  }
  const searchHandler = async (e) => {
    e.preventDefault();
    if (enteredImageId <= 0) {
      setError({
        title: 'Invalid Input',
        message: 'Album id should not be less than or equal to 0'
      })
      return;
    };
    if (enteredImageId.trim().length < 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please input a valid album id number'
      })
      return;
    };
    const url = await `https://find-images-backend.herokuapp.com/id?id=${enteredImageId}`;
    fetch(url).then(result => {
      return result.json();
    })
      .then(data => {
        setFetchedData(data)
      })
  }

  const ErrorHandler = () => {
    setError(null)
  }
  return (<Fragment>
    {error && <ErrorModal
      title={error.title}
      message={error.message}
      onConfirm={ErrorHandler}
    />}
    <div className="search">
      <form onSubmit={searchHandler} className="formsearch">
        <h1>IMAGE ALBUM FINDER</h1>
        <input id='imageId' type="number"
          onChange={searchChangeHandler}
          onConfirm={ErrorHandler}
          placeholder='Search album by id number ...' />
        <Button type="submit" className="searchbtn">Search</Button>
      </form>
    </div>
    <ImageList data={fetchedData} />

  </Fragment>
  )
}
export default App;