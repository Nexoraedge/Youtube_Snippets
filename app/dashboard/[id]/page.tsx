import IdComponenets from '@/components/IdComponenets';
import { getCardData, getCurrentData } from '@/lib/actions/general.action';
import React from 'react'

const page = async(params:RouteParams) => {
  const pageid  = await params.params;
  const uid:number = parseInt(pageid.id);
  
  const currentDataArray : card_data[] = await getCurrentData(uid);
  const currentData = currentDataArray[0]
   
  
  return (<>
    <IdComponenets {...currentData} />
  </>
  )
}

export default page