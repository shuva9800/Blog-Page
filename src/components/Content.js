import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Loading from './Loading';

export default function Content() {
    const{loading,desc}=useContext(AppContext);
    // let data1=desc[0].tages[0];
    // console.log(data1);
  return (
    <div className='wrapper'>
        <div className='content'>
        {
            loading?

            (<Loading/>):
            (desc.length===0)?(<div>
                <h1>Context is Not Found</h1>
            </div>):
            (desc.map((item)=>(<div key={desc.id}>
               <h1>{item.title}</h1>
                <p>By {item.auther} on {item.category}</p>
                <span>Posted On{item.date}</span>
                <br/>

                <p>{item.content}</p>
                <span>{item.tags.map((link,index)=>(<span key={index}>{`#${link}`}</span>))}</span>
            </div>)))
        }
    </div>
    </div>
  )
}
