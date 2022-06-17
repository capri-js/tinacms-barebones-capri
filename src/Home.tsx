import { Page } from "../.tina/__generated__/types";
import { TinaMarkdown } from "./tina";

import { useTina } from "./tina/useTina";

const query = `{
  page(relativePath: "home.mdx"){
    body
  }
}`;

export function Home() {
  const { data } = useTina<{ page: Page }>({ query });
  if (!data?.page) return null;
  return <TinaMarkdown content={data.page.body} />;
}
