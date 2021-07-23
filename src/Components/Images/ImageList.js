import React from "react";
import classes from './ImageList.module.css'

const usersList=(props)=>{
 
// const loading=props.data.loading;
return <div className={classes.layout}>
    {props.data.message.map((data,key)=>{

     return <div key={key} className={classes.imgthimb}>
       <h4>{data.title}</h4>
       <img className={classes.img} src={data.url} alt="" />
       </div>
    })} 

    </div>

}
export default usersList;