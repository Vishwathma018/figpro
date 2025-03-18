import { useRouter } from "next/router";

const MainApp = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-3xl font-bold">Welcome to Figma Clone</h1>
      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
      >
        Logout
      </button>
    </div>
  );
};

export default MainApp;
