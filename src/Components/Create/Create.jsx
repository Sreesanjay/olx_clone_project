import { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ref, uploadBytes,getDownloadURL  } from "firebase/storage";
import {addDoc,collection} from 'firebase/firestore'

import {FirebaseContext,AuthContext} from "../../store/Context"
import './Create.css';

const Create = () => {
  const [name,setName] = useState('');
  const [category,setCategory] = useState('');
  const [price,setPrice] = useState('');  
  const [image,setImage] = useState('');  

  const {storage, firestore} = useContext(FirebaseContext)
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)
  const date = new Date()


  function handleSubmit(){
    const storageRef = ref(storage, `/images/${image.name}`);
    uploadBytes(storageRef, image).then((snapshot) => {
        console.log(user)
        getDownloadURL(storageRef).then((url) => {
            addDoc(collection(firestore, "products"), {
                userId: user.uid,
                name,
                category,
                price,
                url,
                createdAt: date.toDateString()
              }).then(() => {
                navigate('/')
              })
        })
      });
  }
  return (
      <div>
        <div className="centerDiv">
            <label htmlFor="name">Name</label>
            <br/>
            <input
              className="input"
              type="text"
              id="name"
              name="Name"
              onChange={(e)=>setName(e.target.value)}
              placeholder='product name'

            />
            <br />
            <br />
            <label htmlFor="category">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="category"
              name="category"
              onChange={(e)=>setCategory(e.target.value)}
              placeholder='category'
            />
            <br />
            <br />
            <label htmlFor="price">Price</label>
            <br />
            <input className="input" type="number" onChange={(e)=>setPrice(e.target.value)} id="price" name="Price" />
            <br />
          <br />
          {image && <img alt="Posts" width="200px" height="200px" src={ URL.createObjectURL(image)}></img>}
            <br />
            <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
            <br />
            <button className="uploadBtn" onClick={handleSubmit}>upload and Submit</button>
        </div>
      </div>
  );
};

export default Create;