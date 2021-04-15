export default function ErrorMessage({ error }) {
  return (
    <div className="h-screen flex justify-center items-center">
      <h2 className="font-bold text-xl">{error.message}</h2>
    </div>
  );
}
