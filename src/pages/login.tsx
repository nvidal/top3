import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/addTop");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-3xl font-bold text-white mb-4">Login</h1>
      <p className="text-gray-400 mb-8">
        Enter your email and password to log in
      </p>
      <div className="w-full max-w-md mx-auto">
        <form className="space-y-4" onSubmit={onSubmit}>
          <div className="space-y-2">
            <Label className="text-blue-400" htmlFor="email">
              Email
            </Label>
            <Input
              className="bg-gray-800 text-white border-blue-400"
              id="email"
              placeholder="Enter your email"
              required
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-red-400" htmlFor="password">
              Password
            </Label>
            <Input
              className="bg-gray-800 text-white border-red-400"
              id="password"
              placeholder="Enter your password"
              required
              type="password"
            />
          </div>
          <Button
            className="w-full bg-gray-800 text-white border-gray-600"
            type="submit"
          >
            Log in
          </Button>
        </form>
      </div>
    </main>
  );
};
