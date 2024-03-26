
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <header className="bg-gray-200 w-full py-5">
        <div className="  text-center  font-serif capitalize flex flex-col gap-4">
          <p className="text-3xl">Search for your dream job </p>
          <SearchBar />
        </div>
      </header>
    </main>
  );
}
