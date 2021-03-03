import type { ForgoComponentCtor } from "forgo";
import { Link } from "forgo-router";

const Home: ForgoComponentCtor<{}> = () => {
  return {
    render() {
      return (
        <main>
          <h1>Home Page :D</h1>
          <Link href="/about">Go to About Page</Link>
        </main>
      );
    },
  };
};

export default Home;
