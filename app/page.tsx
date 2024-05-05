export default function Home() {
  return (
    <div className="grid gap-1 sm:grid-cols-12">
      <div className="sm:col-span-2 min-height-200 bg-teal-400">Aside</div>
      <div className="sm:col-span-10 min-height-200 bg-teal-400">Main</div>
    </div>
  );
}
