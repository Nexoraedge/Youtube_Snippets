import Login_page from '@/components/Login_page'
import { getCurrentData } from '@/lib/actions/general.action'
import React from 'react'


const Login_id = async({params}: {params: {id: string}}) => {
  
  const pageid  =params;
   const uid:number = parseInt(pageid.id);
   let currentData=undefined;
   if (uid !== 0) {
    const currentDataArray = await getCurrentData(uid);
    currentData = currentDataArray?.[0];
  }
   
  return (
    <div>
        <Login_page uid={uid} currentData={currentData}/>
    </div>
  )
}

export default Login_id