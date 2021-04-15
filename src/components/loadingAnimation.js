import { CogIcon } from "@heroicons/react/outline";

export default function LoadingAnimation() {
  return (
    <div className="h-full flex justify-center items-center dark:text-gray-50">
      <div className="h-3/6 flex items-center ">
        <CogIcon className="animate-spin w-6 h-6 mr-2" />
        <h2 className="font-bold text-xl">Loading...</h2>
      </div>
    </div>
  );
}
