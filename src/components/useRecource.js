import {useState, useEffect} from 'react';
import axios from 'axios';

const useResources=resource=>{
  const [resources, setResources] = useState([]);

  const fetchData=async (resource)=>{
    const res = await axios.get(`http://jsonplaceholder.typicode.com/${resource}`);
    setResources(res.data);
  }

  useEffect(()=>{
    fetchData(resource);
  },[resource]);

  return resources;
}

export default useResources;