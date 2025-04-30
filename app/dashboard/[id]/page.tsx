import React from 'react'

const page = async(params:RouteParams) => {
  const  {id}  = await params.params;
  
  return (
    <div>ID =
     {id}
    </div>
  )
}

export default page