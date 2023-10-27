import { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('#212529')
  return (
    <>
     <div className='d-flex justify-content-center align-items-center w-100' style={{height:'100vh'}}>
        <div className="border shadow rounded d-flex justify-content-center align-items-center flex-column w-75" style={{height:'80vh' , backgroundColor: bgColor}}>
            <h2  className='text-light mb-4'>Background Color Change</h2>
            <div className="w-75 d-flex flex-wrap justify-content-evenly align-items-center">
              <button className='btn btn-dark border-light' style={{width:'100px'}} onClick={()=>setBgColor('#212529')}>BLACK</button>
              <button className='btn btn-warning border-light text-light' style={{width:'100px'}} onClick={()=>setBgColor('#ffc107')}>YELOW</button>
              <button className='btn btn-primary border-light' style={{width:'100px'}} onClick={()=>setBgColor('#0d6efd')}>BLUE</button>
              <button className='btn btn-secondary border-light' style={{width:'100px'}} onClick={()=>setBgColor('#6c757d')}>GRAY</button>
              <button className='btn btn-danger border-light' style={{width:'100px'}} onClick={()=>setBgColor('#dc3545')}>RED</button>
              <button className='btn btn-success border-light' style={{width:'100px'}} onClick={()=>setBgColor('#198754')}>GREEN</button>
            </div>
        </div>
     </div>
    </>
  );
}

export default App;
