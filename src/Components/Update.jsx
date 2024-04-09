import { updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";

const Update = () => {

    const { user } = useContext(AuthContext)

    const handleUpdate = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('uname');
        const photo = form.get('uphoto');
        updateProfile(auth.currentUser, {
            displayName: name,  photoURL: photo
          }).then(() => {
            toast('Updated Successfully')
            console.log(user)
            // ...
          }).catch((error) => {
           console.log(error)
          });
    }

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-5">Update Your Profile</h2>
      <div className="hero min-h-screen  bg-base-200">
        <div className="hero-content flex-col w-full">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleUpdate}  className="card-body w-full">
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
                <button className="btn bg-green-600 text-white text-xl hover:text-black">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Update;
