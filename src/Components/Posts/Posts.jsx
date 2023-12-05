import {useState,useEffect,useContext} from "react";
import { collection, getDocs  } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";

import Heart from "../../assets/Heart";
import { FirebaseContext } from "../../store/Context";
import { PostContext } from "../../store/PostContext";
import "./Posts.css";

function Posts() {
    const [products,setProducts] = useState([]);
    const {firestore} = useContext(FirebaseContext);
    const {setPostDetails} = useContext(PostContext);      
    const navigate = useNavigate()

    useEffect(() =>{
        getDocs(collection(firestore, "products")).then((snapshot)=>{
            const allPost = snapshot.docs.map((doc) => {
                return{... doc.data(),id: doc.id}
              });
              setProducts(allPost)
        })
    },[])
     return (
          <div className="postParentDiv">
               <div className="recommendations">
                    <div className="heading">
                         <span>Fresh recommendations</span>
                    </div>
                    <div className="cards">
                        {
                      products.map((product)=>{
                        return  <div className="card" key = {product.id} onClick={()=>{
                            setPostDetails(product)
                            navigate('/view')
                        }
                        }>
                              <div className="favorite">
                                   <Heart></Heart>
                              </div>
            
                              <div className="image">
                                   <img src={product.url} alt="" />
                              </div>
                              <div className="content">
                                   <p className="rate">&#x20B9;{product.price}</p>
                                   <span className="kilometer">
                                        {product.category}
                                   </span>
                                   <p className="name"> {product.name}</p>
                              </div>
                              <div className="date">
                                   <span>{product.createdAt}</span>
                              </div>
                         </div>
                        })
                        }
                    </div>
               </div>
          </div>
     );
}

export default Posts;
