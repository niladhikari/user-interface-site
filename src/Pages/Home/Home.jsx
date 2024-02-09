import { useEffect, useState } from "react";
import Banner from "./Banner";
import Users from "./Users";

const Home = () => {
  const [usersData, setUsersData] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [sortOption, setSortOption] = useState("");

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

  const handleSort = (event) => {
    const option = event.target.value;
    setSortOption(option);
    let sortedUsers = [...filteredUsers];

    switch (option) {
      case "name":
        sortedUsers.sort((a, b) => a.firstName.localeCompare(b.firstName));
        break;
      case "email":
        sortedUsers.sort((a, b) => a.email.localeCompare(b.email));
        break;
      case "company":
        // Assuming there's a property called 'company' in user data, adjust accordingly
        sortedUsers.sort((a, b) => a.company.name.localeCompare(b.company.name));
        break;
      default:
        break;
    }

    setFilteredUsers(sortedUsers);
  };

  return (
    <div className="">
      <Banner handleSearch={handleSearch} />
      <div className="flex justify-center mx-10 my-5">
        <label className="mr-2 md:text-2xl font-bold">Sort by : </label>
        <select
          value={sortOption}
          onChange={handleSort}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="company">Company</option>
        </select>
      </div>
      <div className="grid md:grid-cols-2 gap-10 lg:grid-cols-3 max-w-7xl mx-auto mt-10">
        {filteredUsers.map((user) => (
          <Users key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Home;
