import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-limeish">
      <div className="bg-white p-8 rounded-xl shadow-md w-80">
        <h1 className="text-2xl font-bold mb-6 text-center font-sans">
          Login
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}