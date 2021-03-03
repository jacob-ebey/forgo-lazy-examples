import type { ForgoComponentCtor } from "forgo";
import { Router, matchExactUrl, matchUrl, Link } from "forgo-router";
import lazy, { Suspense } from "forgo-lazy";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));

const App: ForgoComponentCtor<{}> = () => {
  return {
    render() {
      return (
        <Router>
          <Link href="/">Go to Home Page</Link>
          <Suspense fallback={() => " "}>
            {matchExactUrl("/", () => <Home />) ||
              matchUrl("/about", () => <About />)}
          </Suspense>
        </Router>
      );
    },
  };
};

export default App;
