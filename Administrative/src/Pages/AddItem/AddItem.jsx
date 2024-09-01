import { useState } from 'react';
import { assets } from '../../assets/assets';
import classes from './Additem.module.css';
import axios from 'axios'

export default function AddItem() {

  const [uploadImg,setUploadImg]=useState(false);
  const[data,setData]=useState({
    name:"",
    description:"",
    price:"",
    category:"salad"
  })

  const onhanldechange=(e)=>{
    const name=e.target.name;
    const val=e.target.value;
    setData(data=>({...data,[name]:val}))
  }

  // const uri="";


  const onhandlesubmit = async (e) => {
    e.preventDefault();
  
    // try {
      const formdata = new FormData();
      formdata.append("name", data.name);
      formdata.append("description", data.description);
      formdata.append("price", Number(data.price));
      formdata.append("category", data.category);
      formdata.append("image", uploadImg);
  
      // const response = await fetch.post(`http://localhost:8080/api/v1/food/add`, formdata);

      const response =await fetch('http://localhost:8080/api/v1/food/add', {
        method: 'POST',
        body: JSON.stringify(formdata)
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
  
    //   if (response.data.success) {
    //     setData({
    //       name: "",
    //       description: "",
    //       price: "",
    //       category: "Salad"
    //     });
    //     setUploadImg(null);
    //   } else {
    //     console.error("Error:", response.data.message);
    //   }
    // } catch (error) {
    //   console.error("There was an error submitting the form:", error.response ? error.response.data : error.message);
    // }
  };
  

  return (
    <div className={classes.additem}>
      <form className={classes.formaction} onSubmit={onhandlesubmit}>
        <div className={`${classes.addimg} ${classes.formaction}`}>
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={ uploadImg?URL.createObjectURL(uploadImg):assets.upload} alt="Upload" />
          </label>
          <input onChange={(e)=>setUploadImg(e.target.files[0])} type="file" id="image" hidden required />
        </div>
        <div className={`${classes.addprod} ${classes.formaction}`}>
          <p>Product Name</p>
          <input onChange={onhanldechange} value={data.name} type="text" name="name" placeholder="Type Food Item Name" />
        </div>
        <div className={`${classes.adddesc} ${classes.formaction}`}>
          <p>Product Description</p>
          <textarea
            name="description"
            rows="6"
            placeholder="Write Something About Food Item"
            required
          ></textarea>
        </div>
        <div className={classes.addcategory}>
          <div className={`${classes.addcate} ${classes.formaction}`}>
            <p>Product Category</p>
            <select name="category" onChange={onhanldechange} >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="SandWich">SandWich</option>
              <option value="Cake">Cake</option>
              <option value="Pasta">Pasta</option>
            </select>
          </div>
          <div className={`${classes.addprice} ${classes.formaction}`}>
            <p>Product Price</p>
            <input onChange={onhanldechange} value={data.price}  type="number" name="price" placeholder="100" />
          </div>
        </div>
        <button type="submit" className={classes.addbtn}>
          Add Food Item
        </button>
      </form>
    </div>
  );
}
