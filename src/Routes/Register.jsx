"use client";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import { countries } from "@/app/data/countries";
import { useRouter } from "next/navigation";
import { AppLogo } from "@/app/components/common/AppLogo";
import { Alert } from "@/app/components/common/Alert";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("error");
  const [alertKey, setAlertKey] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const [formData, setFormData] = useState({
    fullname: "",
    country: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // Handle response if necessary
    const res = await response.json();

    setIsLoading(false);

    if (response.ok) {
      setAlertType("success");
      setAlertMessage(res.message);
      setFormData({
        fullname: "",
        country: "",
        email: "",
        password: "",
        confirm_password: "",
      });
      await new Promise((resolve) => setTimeout(resolve, 3000));
      router.push("/auth/login");
      return;
    } else {
      setAlertMessage(res.message);
      setAlertType("error");
    }

    setAlertKey((prevKey) => prevKey + 1);
  }
  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      <Alert message={alertMessage} type={alertType} uniqueKey={alertKey} />

      {/* Top Section */}
      <div className="flex justify-between items-center px-4 py-3">
        <AppLogo />
        <div>
          <p className="font-medium">English</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 w-full max-w-5xl px-4">
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <img
              className="w-48 h-48 lg:w-72 lg:h-72"
              src="/images/auth-image.png"
              alt="Festival"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center items-center">
            <div className="text-center mb-8">
              <h1 className="text-2xl text-[color:#233040] lg:text-3xl font-bold">
                African Youth Festival
              </h1>
              <p className="mt-3 text-gray-600">
                Join us and become part of an amazing community.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="w-full max-w-md">
              {/* Full Name */}
              <div className="mb-6">
                <label
                  htmlFor="full-name"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  id="full-name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0B054B] focus:ring-1 focus:ring-[#0B054B] outline-none transition-colors text-gray-700"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0B054B] focus:ring-1 focus:ring-[#0B054B] outline-none transition-colors text-gray-700"
                  placeholder="example@gmail.com"
                  required
                />
              </div>

              {/* Country of Residence */}
              <div className="mb-6">
                <label
                  htmlFor="country"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Country of Residence
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0B054B] focus:ring-1 focus:ring-[#0B054B] outline-none transition-colors text-gray-700"
                  required
                >
                  <option value="" disabled>
                    Select your country
                  </option>
                  {Object.entries(countries).map(([code, name]) => (
                    <option key={code} value={code}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Password */}
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0B054B] focus:ring-1 focus:ring-[#0B054B] outline-none transition-colors text-gray-700"
                    placeholder="Enter password"
                    required
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
                  htmlFor="confirm_password"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirm_password"
                    value={formData.confirm_password}
                    onChange={handleChange}
                    name="confirm_password"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0B054B] focus:ring-1 focus:ring-[#0B054B] outline-none transition-colors text-gray-700"
                    placeholder="Re-enter password"
                    required
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
                  type="submit"
                >
                  {isLoading ? "Processing" : "Sign Up"}
                </button>
                <hr className="my-6 border-gray-300" />
                <p className="text-gray-700 mt-3 mb-3">
                  Already have an account?
                </p>
                <Link href="/auth/login">
                  <button
                    className="w-1/3 bg-white border border-[#0B054B] text-[#0B054B] py-1 rounded-full hover:bg-[#0B054B] hover:text-white transition-colors font-medium mb-8 lg:mb-3"
                    type="button"
                  >
                    Login
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
