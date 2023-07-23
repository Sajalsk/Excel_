import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Thankyou from '../thankyou';
import ExcelUploader from '../Excel/ExcelUploader';

const MyRoutes = () => {
  return (
    <Routes>
        <Route path='/thankyou' element={<Thankyou/>}/>
        <Route path='/' element={<ExcelUploader/>}/>
    </Routes>
  )
}

export default MyRoutes
