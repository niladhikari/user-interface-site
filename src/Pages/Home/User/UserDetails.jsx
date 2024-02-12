import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const userData = useLoaderData();

  useEffect(() => {
    const findData = userData?.users?.find((data) => data.id === parseInt(id));
    setUser(findData || {});
  }, [id, userData]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="card  bg-base-100 shadow-xl mt-5">
        <figure>
          <img  src={user?.image} alt="Shoes" />
        </figure>
        <div className="card-body items-center text-center bg-green-200">
          <Link to={`/`}>
            <h2 className="card-title text-2xl">
              {user?.firstName}
              <div className="text-2xl ">{user?.lastName}</div>
            </h2>
          </Link>
          <h2 className=" md:text-xl "> <span className="font-bold">Email</span> : {user?.email}</h2>
          <h2 className=" md:text-xl "><span className="font-bold">Address</span> : {user?.address?.address}</h2>
          <h2 className=" md:text-xl "><span className="font-bold">City</span> : {user?.address?.city}</h2>
          <h2 className=" md:text-xl "><span className="font-bold">Company Name</span> : {user?.company?.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
