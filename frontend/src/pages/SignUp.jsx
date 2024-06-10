import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="user name"
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          type="email"
          placeholder="user name"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="password"
          placeholder="user name"
          className="border p-3 rounded-lg"
          id="password"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Sign up
        </button>
      </form>

      <div className="flex items-center gap-3 mt-5">
        <p className="">Have an account?</p>
        <Link to={"/sign-in"} className="text-blue-700">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
