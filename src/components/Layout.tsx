import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div
      style={{
        margin: "3rem",
      }}
    >
      {/* <Head>
        <title>Tina App</title>
        <meta name="description" content="A TinaCMS Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <header>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/posts">Posts</Link>
      </header>
      <main>{children}</main>
    </div>
  );
}
