

const AddUser = () => {
  const handleAddBook = (event) => {
    event.preventDefault();

    const form = event.target;

    const fName = form.fName.value;
    const lName = form.lName.value;
    const email = form.email.value;
    const address = form.address.value;
    const company = form.company.value;
    const photo = form.photo.value;

    const myBooks = {
      fName,
      lName,
      email,
      address,
      company,
      photo,
    };
    console.log(myBooks);
  };

  return (
    <div className="bg-[#F4F3F0]">
      <div className=" p-10 md:p-24 max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-5">Add a User</h2>
        <form onSubmit={handleAddBook}>
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
