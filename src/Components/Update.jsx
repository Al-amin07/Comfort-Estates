import { updateProfile } from "firebase/auth";

import { ToastContainer } from "react-toastify";
import { useContext, useEffect } from "react";
import { AuthContext } from "./Provider/AuthProvider";


const Update = () => {
  const { user, setName, setPhoto, photo, name } = useContext(AuthContext);

  useEffect(() => {
    document.title = "Update Profile | Comfort Estate";
  }, [])
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
    
      <h2 className="text-3xl font-bold text-center mb-5">
        Update Your Profile
      </h2>
      <div className="hero py-8  bg-base-200">
        <div className="hero-content flex-col w-full">
          <div className="card shrink-0 w-full max-w-lg shadow-2xl pt-5 bg-base-100">
         
            <form onSubmit={handleUpdate} className="card-body w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Updated Name</span>
                </label>
                <input
                  name="uname"
                  type="text"
                  placeholder={name}
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
                  placeholder={photo}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder={user.email}
                  className="input input-bordered"
                  required
                  disabled
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
