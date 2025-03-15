import React, { useContext } from 'react'
import Pixabay from '../context/PixabayContext'
import InputSearch from './InputSearch';

const FetchdataBycategory = () => {
    const {fetchDataByCategory} = useContext(Pixabay);
  return (
    <div className='conntainer'>
        <div className="row">
        <div className="col-md-12">
              <div className="button-wrap d-flex justify-content-between">
              <button type="button" onClick={()=>fetchDataByCategory('nature')} className="btn btn-primary">Nature</button>
              <button type="button" onClick={()=>fetchDataByCategory('science')} className="btn btn-secondary">Science</button>
              <button type="button" onClick={()=>fetchDataByCategory('health')} className="btn btn-success">Health</button>
              <button type="button" onClick={()=>fetchDataByCategory('computer')} className="btn btn-danger">Computer</button>
              <button type="button" onClick={()=>fetchDataByCategory('food')} className="btn btn-warning">Food</button>
              <button type="button" onClick={()=>fetchDataByCategory('sports')} className="btn btn-info">Sports</button>
              <button type="button" onClick={()=>fetchDataByCategory('travel')} className="btn btn-light">Travel</button>
              <button type="button" onClick={()=>fetchDataByCategory('music')} className="btn btn-dark">Music</button>
              </div>
            </div>
            
            <InputSearch />

        </div>

    </div>
  )
}

export default FetchdataBycategory