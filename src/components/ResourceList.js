import React from 'react';
import useResources from './useRecource';

const ResourceList = (props)=>{
  return(
    <ul>
      {useResources(props.resource).map(({id,title})=><li key={id}>{title}</li>)}
    </ul>
  )
}

export default ResourceList;