import React, { useContext } from 'react'
import Pixabay from '../context/PixabayContext'
import InputSearch from './InputSearch';

const FetchdataBycategory = () => {
    const {fetchDataByCategory} = useContext(Pixabay);
  return (
    <div className='conntainer'>
        <div className="row">
        <div className="col-md-12">
              <div className="button-wrap d-flex justify-content-around flex-wrap">
              <button type="button" onClick={()=>fetchDataByCategory('nature')} className="btn mt-3 btn-primary">Nature</button>
              <button type="button" onClick={()=>fetchDataByCategory('science')} className="btn mt-3 btn-secondary">Science</button>
              <button type="button" onClick={()=>fetchDataByCategory('health')} className="btn mt-3 btn-success">Health</button>
              <button type="button" onClick={()=>fetchDataByCategory('computer')} className="btn mt-3 btn-danger">Computer</button>
              <button type="button" onClick={()=>fetchDataByCategory('food')} className="btn mt-3 btn-warning">Food</button>
              <button type="button" onClick={()=>fetchDataByCategory('sports')} className="btn mt-3 btn-info">Sports</button>
              <button type="button" onClick={()=>fetchDataByCategory('travel')} className="btn mt-3 btn-light">Travel</button>
              <button type="button" onClick={()=>fetchDataByCategory('music')} className="btn mt-3 btn-dark">Music</button>
              </div>
            </div>
            
            <InputSearch />

        </div>

    </div>
  )
}

export default FetchdataBycategory