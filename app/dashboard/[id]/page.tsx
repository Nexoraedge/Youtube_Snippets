import React from 'react'

const page = async(params:RouteParams) => {
  const  {id}  = await params.params;
   
  return (
    <div className='flex justify-center items-center h-screen'>ID =
     {id}
    </div>
  )
}

export default page