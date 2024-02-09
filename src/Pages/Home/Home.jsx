/* eslint-disable no-const-assign */
import { useEffect, useState } from "react";
import Banner from "./Banner";
import Users from "./Users";

const Home = () => {
  const [usersData, setUsersData] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsersData(data.users);
        setFilteredUsers(data.users);
      });
  }, []);

  const handleSearch = (searchQuery) => {
    const filtered = usersData.filter((user) =>
      user.firstName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="">
      <Banner handleSearch={handleSearch}></Banner>
      <div className="grid md:grid-cols-2 gap-10 lg:grid-cols-3 max-w-7xl mx-auto mt-10">
        {filteredUsers.map((user) => (
          <Users key={user.id} user={user}></Users>
        ))}
      </div>
    </div>
  );
};

export default Home;
