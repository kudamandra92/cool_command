import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-limeish/60">
      <div className=" p-8 rounded-xl w-full lg:w-[20vw]">
        <h1 className="text-3xl font-bold mb-6 text-center font-sans">
          Login
        </h1>
        <p className="text-base text-gray-400 font-[400] text-center">CoolCommand</p>
        <LoginForm />
      </div>
    </div>
  );
}