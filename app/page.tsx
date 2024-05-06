import BookGrid from "./components/BookGrid";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <div className="grid gap-1 sm:grid-cols-12">
      <aside className="sm:col-span-2 min-height-200 bg-teal-400">Aside</aside>
      <main className="sm:col-span-10 min-height-200 bg-teal-400">
        <BookGrid />
      </main>
    </div>
  );
}
