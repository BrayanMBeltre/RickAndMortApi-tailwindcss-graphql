export default function Leyend() {
  return (
    <div className="flex justify-around pt-0 py-2 mb-6  text-gray-900 dark:text-gray-50 items-center">
      <div className="flex items-center space-x-2">
        <span className=" rounded-full bg-green-600 w-2 h-2" />
        <p>Alive</p>
      </div>
      <div className="flex items-center space-x-2">
        <span className=" rounded-full bg-red-400 w-2 h-2" />
        <p>Death</p>
      </div>
      <div className="flex items-center space-x-2">
        <span className=" rounded-full bg-gray-500 w-2 h-2" />
        <p>Unknow</p>
      </div>
    </div>
  );
}
