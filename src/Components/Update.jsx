import { updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { Link } from "react-router-dom";

const Update = () => {
  const { user, setName, setPhoto } = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("uname");
    const photo = form.get("uphoto");
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        alert("Updated Successfully!!!");
        console.log(user);
        setName(name);
        setPhoto(photo);
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {/* <div className="w-[700px] mx-auto shadow-2xl px-24 py-12 rounded-2xl mb-12 space-y-5">
        <div className="flex justify-center gap-5">
          <h2 className="text-3xl font-bold">Name : </h2>
          <h2 className="text-3xl font-bold">{user.displayName}</h2>
        </div>
        <div className="flex justify-center gap-5">
          <h2 className="text-3xl font-bold">Email : </h2>
          <h2 className="text-3xl font-bold">{user.email}</h2>
        </div>
        <div className="flex justify-center gap-5">
          <h2 className="text-3xl font-bold">Name : </h2>
          <h2 className="text-3xl font-bold">{user.displayName}</h2>
        </div>
      </div> */}
      <div>
      <form onSubmit={handleUpdate} className="card-body w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Updated Name</span>
                </label>
                <input
                  name="uname"
                  type="text"
                  placeholder={user.displayName}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Updated Photo Url</span>
                </label>
                <input
                  name="uphoto"
                  type="text"
                  placeholder="Updated Photo Url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-600 text-white text-xl hover:text-black">
                  Update
                </button>
              </div>
            </form>
      </div>

      <h2 className="text-3xl font-bold text-center mb-5">
        Update Your Profile
      </h2>
      <div className="hero py-8  bg-base-200">
        <div className="hero-content flex-col w-full">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleUpdate} className="card-body w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Updated Name</span>
                </label>
                <input
                  name="uname"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Updated Photo Url</span>
                </label>
                <input
                  name="uphoto"
                  type="text"
                  placeholder="Updated Photo Url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-600 text-white text-xl hover:text-black">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Update;
