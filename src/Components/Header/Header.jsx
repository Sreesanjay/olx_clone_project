import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { signOut } from "firebase/auth";

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';

import { FirebaseContext } from "../../store/Context";
import { AuthContext } from '../../store/Context';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import UserProfile from '../UserProfile/UserProfile';


function Header() {
  const { auth } = useContext(FirebaseContext);
  const { user, setUser } = useContext(AuthContext)
  const [showLanguageSelector, setLanguageSelector] = useState(false)
  const [showUserProfile, setShowUserProfile] = useState(false)
  function logout() {
    signOut(auth).then(() => {
      setUser(null)
      setShowUserProfile(false)

    }).catch((error) => {
      alert(error.message)
    });
  }
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <Link to = '/'>
          <OlxLogo></OlxLogo>
          </Link>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search></Search>
          </div>
        </div>
        <div className="language-container">
          <div className="language" onClick={()=>setLanguageSelector((current)=>!current)}>
            <span> ENGLISH </span>
            <Arrow></Arrow>
          </div>
          {showLanguageSelector &&
          <LanguageSelector/>}
        </div>
        <div className="user-profile-container">
        {
            user ? <img src="/Profile-Male-PNG.png" alt="" className='profile-img' onClick={()=>setShowUserProfile(current=>!current)}/> :
        <div className="loginPage">
              <Link to='/login'> Signin</Link>
          <hr />
        </div>
         }
         {showUserProfile &&
            <UserProfile logout = {logout} displayName = {user.displayName}/>  
          }
        </div>
        
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <Link to='/create'><span>Sell</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;