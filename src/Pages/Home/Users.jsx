/* eslint-disable react/prop-types */

const Users = ({ user }) => {
    console.log(user);

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mt-5">
        <figure>
          <img
            src={user?.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
             {user?.firstName}
            <div className=" ">{user?.lastName}</div>
          </h2>
          <h2>Email : {user?.email}</h2>
          <h2>Address : {user?.address?.address}</h2>
          <h2>Company Name : {user?.company?.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Users;
