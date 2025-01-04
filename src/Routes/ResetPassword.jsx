import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      {/* Top Section */}
      <div className="flex justify-between items-center px-4 py-3">
        <div>
          <img className="w-16 h-16" src="./image1.png" alt="Logo" />
        </div>
        <div>
          <p className=" font-medium">English</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 w-full max-w-5xl  px-4">
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <img
              className="w-48 h-48 lg:w-72 lg:h-72"
              src="./image2.png"
              alt="Festival"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center items-center">
            <div className="text-center mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold">
                African Youth Festival
              </h1>
              <p className="mt-3 text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatibus temporibus.
              </p>
            </div>

            {/* Form */}
            <form className="w-full max-w-md">
              {/* New Password */}
              <div className="mb-6">
                <label
                  htmlFor="new-password"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="new-password"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0B054B] focus:ring-1 focus:ring-[#0B054B] outline-none transition-colors text-gray-700"
                    placeholder="Enter new password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible className="w-5 h-5" />
                    ) : (
                      <AiOutlineEye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="mb-8">
                <label
                  htmlFor="confirm-password"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirm-password"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0B054B] focus:ring-1 focus:ring-[#0B054B] outline-none transition-colors text-gray-700"
                    placeholder="Re-enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? (
                      <AiOutlineEyeInvisible className="w-5 h-5" />
                    ) : (
                      <AiOutlineEye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="text-center">
                <button
                  className="w-1/3 bg-[#0B054B] text-white py-1 rounded-full hover:bg-[#0B054B]/90 transition-colors font-medium"
                  type="button"
                >
                  Login
                </button>
                <br />
                <Link to="/login">
                  <p className="text-blue-600 hover:underline mt-3 mb-3">
                    Go Back to Login
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

export default ResetPassword;
