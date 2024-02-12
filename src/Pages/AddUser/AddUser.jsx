// import Swal from "sweetalert2";

const AddUser = () => {
  const handleAddUser = (event) => {
    event.preventDefault();

    const form = event.target;

    const firstName = form.fName.value;
    const lastName = form.lName.value;
    const email = form.email.value;
    const address = form.address.value;
    const city = form.city.value;
    const company = form.company.value;
    const image = form.photo.value;

    const myUser = {
      firstName,
      lastName,
      email,
      address,
      city,
      company,
      image,
    };
    console.log(myUser);

    // fetch("https://dummyjson.com/users", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(myUser),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  return (
    <div className="bg-[#F4F3F0]">
      <div className=" p-10 md:p-24 max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-5">Add a User</h2>
        <form onSubmit={handleAddUser}>
          <div className="md:flex mb-8">
            <div className="form-control  md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">First Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="fName"
                  placeholder="First Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control  md:w-1/2 md:ml-4 mt-8 md:mt-0">
              <label className="label">
                <span className="label-text font-semibold">Last Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="lName"
                  placeholder="Last Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4 mt-8 md:mt-0">
              <label className="label">
                <span className="label-text font-semibold">Address</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">City</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4 mt-8 md:mt-0">
              <label className="label">
                <span className="label-text font-semibold">Company Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Avatar</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add User"
            className="btn btn-block font-bold bg-blue-200"
          />
        </form>
      </div>
    </div>
  );
};

export default AddUser;
