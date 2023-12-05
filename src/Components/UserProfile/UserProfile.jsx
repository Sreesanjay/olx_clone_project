import "./UserProfile.css"
export default function UserProfile({logout,displayName}){
  return (
    <div className="user-profile">
      <ul>
        <li className="user_details"><img src="/Profile-Male-PNG.png" alt="" className="profile-img"/><h3>{displayName}</h3></li>
        <li ><span className="view-and-edit-profile">View and edit profile</span></li>
        <hr />
        <li>My ADS</li>
        <li>Buy Business Packages</li>
        <li>Bought Packages and Billing</li>
        <hr />
        <li>help</li>
        <li>Settings</li>
        <hr />
        <li onClick={logout}>Logout</li>
      </ul>
    </div>
  )
}

