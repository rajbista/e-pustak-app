import { Grid } from "@radix-ui/themes";
import BookGrid from "./components/Book/BookGrid";
import BookContainer from "./components/Book/BookContainer";
export default function Home() {
  return (
    <Grid columns={{ md: "12" }} gap="1">
      <aside className="md:col-span-2">Aside</aside>
      <main className="md:col-span-10">
        {/* <BookGrid /> */}

        <BookContainer />
      </main>
    </Grid>
  );
}
