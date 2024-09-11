import React, { useState, useMemo } from 'react';
import { Link } from '@tanstack/react-router';
function FileUploadAndExportComponent() {
 return (
    <div >
      <Link to='/durga/certificate1'>
      <button>certificate1</button>
      <br/>
      </Link>
      <Link to='/durga/batches'>
      <button>Bathes</button>
      </Link> 
      <br/>
      <Link to='/durga/studentjourney1'>
      <button>StudentJourney1</button>
      </Link> 
      <br/>
      <Link to='/durga/studentsubmition'>
      <button>studentsubmition</button>
      </Link>  
      </div>
  );
}
export default FileUploadAndExportComponent;