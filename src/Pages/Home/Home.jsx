import useGetUser from "../Hooks/useGetUser";
import Users from "./Users";

const Home = () => {
  const [usersData] = useGetUser();

  return (
    <div className="">
      <div className="grid md:grid-cols-2 gap-10 lg:grid-cols-3 max-w-7xl mx-auto">
        {usersData?.users?.map((user) => (
          <Users key={user.id} user={user}></Users>
        ))}
      </div>
    </div>
  );
};

export default Home;
