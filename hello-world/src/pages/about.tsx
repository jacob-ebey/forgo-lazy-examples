import type { ForgoComponentCtor } from "forgo";

const About: ForgoComponentCtor<{}> = () => {
  return {
    render() {
      return <h1>About Page :D</h1>;
    },
  };
};

export default About;
