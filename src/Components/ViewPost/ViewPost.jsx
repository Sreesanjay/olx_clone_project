import {useContext, useEffect, useState} from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import  {PostContext}  from '../../store/PostContext';
import {FirebaseContext} from '../../store/Context';
import './ViewPost.css';
function View() {
    const [user,setUser] = useState({username:'',phone:''})
    const {postDetails} = useContext(PostContext)
    const {firestore} = useContext(FirebaseContext)
    const {userId} = postDetails
    useEffect(()=>{
        const ref = collection(firestore , 'users')
        const q = query(ref, where("id", "==", `${userId}`))
        getDocs(q).then((snapshot)=>{
            snapshot.forEach((doc)=>{
                setUser({...doc.data()})
            })
        })

    },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{user.username}</p>
          <p>{user.phone}</p>
        </div>
      </div>
    </div>
  );
}
export default View;