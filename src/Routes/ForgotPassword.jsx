import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      {/* Top Section */}
      <div className="flex justify-between items-center px-4 py-3">
        <div>
          <img className="w-16 h-16" src="./image1.png" alt="Logo" />
        </div>
        <div>
          <p className="font-medium">English</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-90px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 w-full max-w-5xl px-4">
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <img
              className="w-48 h-48 lg:w-60 lg:h-60"
              src="./image3.png"
              alt="Festival"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center items-center mt-8">
            <div className="mb-6 w-full">
              <div className="lg:flex justify-center hidden ">
                <img className="w-12 h-12" src="./lock.png" alt="" />
              </div>
              <h1 className="text-2xl lg:text-xl font-bold text-center mt-1">
                Trouble Logging In?
              </h1>
              <p className="mt-2 text-gray-600 text-center ">
                Enter your email and we'll send you a link to get back to your
                account.
              </p>
            </div>

            {/* Form */}
            <form className="w-full ">
              {/* Email */}
              <div className="mb-6 ">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full  px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0B054B] focus:ring-1 focus:ring-[#0B054B] outline-none transition-colors text-gray-700"
                  placeholder="example@gmail.com"
                />
              </div>

              <div className="text-center">
                <button
                  className="w-1/3 bg-[#0B054B] text-white py-1 rounded-md hover:bg-[#0B054B]/90 transition-colors font-medium"
                  type="button"
                >
                  Send Email
                </button>
                <br />
                <Link to="/">
                  <p className="text-blue-600 hover:underline mt-3">
                    Go to Login
                  </p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
