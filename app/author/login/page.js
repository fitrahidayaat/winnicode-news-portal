export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col border-2 p-10 rounded-4xl">
        <h1 className="text-4xl mb-10">Login</h1>
        <form method="" className="flex flex-col text-lg gap-6">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              className="border-2"
            ></input>
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              required
              className="border-2"
            ></input>
          </div>
          <button type="submit" className="bg-blue-500 rounded-xl py-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
