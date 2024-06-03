import { useContext } from "react";
import { AuthContext } from "../../Component/AuthContext/AuthProvider";


const MyProfile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{user.name}</h2>
    <p className="font-medium">{user.role}</p>
    <p className="font-medium">{user.email}</p>
    <p className="font-medium">{user.phone}</p>

  </div>
  <figure><img src={user?.image} alt="Shoes" /></figure>
</div>
        </div>
    );
};

export default MyProfile;