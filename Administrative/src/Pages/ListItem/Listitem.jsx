import { useEffect, useState } from "react"
import axios from 'axios'
import { toast } from "react-toastify";
import classes from './Listitem.module.css'

export default function Listitem() {

  const[list,setList]=useState([]);

  const fetchalldata=async()=>{
    const response=await axios.get('http://localhost:8080/api/v1/food/lists')
    console.log(response.data)
    if(response.data.success){
      setList(response.data.data)
    }else{
      toast.error('Could not fetched the data')
    }
  }

  useEffect(()=>{
    fetchalldata();
  },[]);

  const  removefooditem=async(foodid)=>{
    const response=await axios.post('http://localhost:8080/api/v1/food/removeitem',{id:foodid});

    await fetchalldata();
  }

  return (
    <>
    <div className={`${classes.list} ${classes.formaction}`}>
      <p>FoodList</p>
      <div className={classes.table}>
        <div className={`${classes.tableformat} ${classes.title}`}>
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return (
            <div key={index} className={classes.tableformat}>
                <img src={'http://localhost:8080/images/'+item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.category} </p>
                <p>₹{item.price} </p>
                <p onClick={()=>removefooditem(item._id)} className={classes.pointer}>X</p>
            </div>
          )
        })}
      </div>
    </div>
    </>
  )
}
