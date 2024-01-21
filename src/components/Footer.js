import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'

export default function Footer() {
  const{currentpage,totalpage,recentpage} =useContext(AppContext);
  return(
    <div className='footer'>
        <div>
          {
            currentpage>1 &&(<button onClick={()=>recentpage(currentpage-1)}>previous</button>)
          
          }
          {
            currentpage<totalpage &&(<button onClick={()=>recentpage(currentpage+1)}>Next</button>)
          }
        </div>
        <p> page {currentpage} of {totalpage}</p>
    </div>
  )
}
