/**
 * v0 by Vercel.
 * @see https://v0.dev/t/oJ3It2oFnBq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AddTop() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-3xl font-bold text-white mb-4">Top 3 today</h1>
      <p className="text-gray-400 mb-8">
        Hi, how are you feeling today? Who are your top 3 people today?
      </p>
      <div className="w-full max-w-md mx-auto">
        <form className="space-y-4">
          <div className="space-y-2">
            <Label className="text-green-400" htmlFor="event1">
              1st
            </Label>
            <Input
              className="bg-gray-800 text-white border-green-400"
              id="event1"
              placeholder="Enter your first person"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-blue-400" htmlFor="event2">
              2nd
            </Label>
            <Input
              className="bg-gray-800 text-white border-blue-400"
              id="event2"
              placeholder="Enter your second person"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-purple-400" htmlFor="event3">
              3rd
            </Label>
            <Input
              className="bg-gray-800 text-white border-purple-400"
              id="event3"
              placeholder="Enter your third person"
            />
          </div>
          <Button
            className="w-full bg-gray-800 text-white border-gray-600 border"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </main>
  );
}
