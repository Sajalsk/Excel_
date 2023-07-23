import "./App.css";
import {Route,Routes} from 'react-router-dom';
import ExcelUploader from "./Excel/ExcelUploader";
import Thankyou from "./thankyou";

function App() {
  return (
    <>
    <>
      <Routes>
        <Route path='/' element={<ExcelUploader/>}/>
        <Route path='/thankyou' element={<Thankyou/>}/>
    </Routes>
    </>
    </>
  );
}

export default App;
