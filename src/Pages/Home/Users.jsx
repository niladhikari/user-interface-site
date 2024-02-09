/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Users = ({ user }) => {


  return (
    <div>
      <div className="card md:h-[500px] bg-base-100 shadow-xl mt-5">
        <figure>
          <img  src={user?.image} alt="Shoes" />
        </figure>
        <div className="card-body bg-blue-200  rounded-xl">
          <Link to={`/details/${user.id}`}>
            <h2 className="card-title">
              {user?.firstName}
              <div className=" ">{user?.lastName}</div>
            </h2>
          </Link>
          <h2>Email : {user?.email}</h2>
          <h2>Address : {user?.address?.address}</h2>
          <h2>Company Name : {user?.company?.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Users;
