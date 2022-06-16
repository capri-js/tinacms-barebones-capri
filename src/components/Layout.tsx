import { ReactNode } from "react";

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
        <a href="/">Home</a>
        {" | "}
        <a href="/posts">Posts</a>
      </header>
      <main>{children}</main>
    </div>
  );
}
