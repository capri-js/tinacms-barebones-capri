import { default as EditState } from "tinacms/dist/edit-state.js";
import { default as RichText } from "tinacms/dist/rich-text.js";
import { Layout } from "./components/Layout";

console.log(EditState);

//TODO share with main.server.tsx
const query = `{
  page(relativePath: "home.mdx"){
    body
  }
}`;

type Props = {
  staticData?: any;
};

export function Home({ staticData }: Props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = EditState.useTina({
    query,
    variables: {},
    data: staticData,
  });
  console.log({ data });
  if (!data) return null;
  const content = data.page.body;

  return (
    <Layout>
      <RichText.TinaMarkdown content={content} />
    </Layout>
  );
}
