import BookGrid from "./components/BookGrid";

export default function Home() {
  return (
    <div className="grid gap-1 sm:grid-cols-12">
      <aside className="sm:col-span-2">Aside</aside>
      <main className="sm:col-span-10">
        <BookGrid />
      </main>
    </div>
  );
}
