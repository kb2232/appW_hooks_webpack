import React, {useState} from 'react';
import ResourceList from './ResourceList';

const App = ()=>{

  const [resource, setResource] = useState("posts"); //array destructing
 

  return(
    <div className="flex-container">
        <div className="col-C-C">
          <div className="row-S-S">
            <button className="button" onClick={()=>setResource('posts')}>Post</button>
            <button className="button" onClick={()=>setResource('todos')}>Todos</button>
          </div>
          <ResourceList resource={resource} />
        </div>
    </div>
  );
}

export default App;