import { useParams } from "react-router-dom";
import { Post } from "../.tina/__generated__/types";
import { useTina } from "./tina/useTina";

const query = `query getPost($relativePath: String!) {
  post(relativePath: $relativePath) {
    title
    body
  }
}
`;

export function PostDetail() {
  const { id } = useParams();
  const { data } = useTina<{ post: Post }>({
    query,
    variables: { relativePath: `${id}.md` },
  });
  if (!data?.post) return null;
  return (
    <code>
      <pre
        style={{
          backgroundColor: "lightgray",
        }}
      >
        {JSON.stringify(data.post, null, 2)}
      </pre>
    </code>
  );
}
