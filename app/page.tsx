import { Grid } from "@radix-ui/themes";
import BookGrid from "./components/Book/BookGrid";

export default function Home() {
  return (
    <Grid columns={{ xs: "12" }} gap="1">
      <aside className="sm:col-span-2">Aside</aside>
      <main className="sm:col-span-10">
        <BookGrid />
      </main>
    </Grid>
  );
}
