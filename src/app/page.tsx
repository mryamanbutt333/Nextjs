export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        
        <form className="space-y-6">
          {/* Username Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <div className="mt-1 relative">
              <input
                type="text"
                placeholder="Type your username"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              />
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <i className="fas fa-user text-gray-400"></i>
              </span>
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="mt-1 relative">
              <input
                type="password"
                placeholder="Type your password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              />
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <i className="fas fa-lock text-gray-400"></i>
              </span>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:opacity-90 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Or Sign In Using */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">Or Sign In Using</p>
          <div className="space-y-3 mt-3">
            {/* Google Login Button */}
            <button
              className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-300"
            >
              <i className="fab fa-google text-xl mr-3"></i>
              <span>Login with Google</span>
            </button>

            {/* Facebook Login Button */}
            <button
              className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-300"
            >
              <i className="fab fa-facebook-f text-xl mr-3"></i>
              <span>Login with Facebook</span>
            </button>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">Or Sign Up Using</p>
          <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">Sign Up</a>
        </div>
      </div>
    </div>
  );
}
