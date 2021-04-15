export default function Episode({ episode }) {
  return (
    <div className="border-b-4 border-gray-400 pl-3 pt-2">
      <h2 className="font-semibold text-xl">{episode.name}</h2>
      <div className="flex items-center my-2">
        <small className="text-gray-600 mr-1 dark:text-gray-400">
          release date:
        </small>
        <p>{episode.air_date}</p>
      </div>
    </div>
  );
}
