import { Link } from "react-router-dom";
import { PostConnection } from "../.tina/__generated__/types";
import { useTina } from "./tina/useTina";

const query = `{
  postConnection {
    edges {
      node {
        id
        _sys {
          filename
        }
      }
    }
  }
}`;

export function PostList() {
  const { data } = useTina<{ postConnection: PostConnection }>({ query });
  if (!data?.postConnection) return null;
  const postsList = data.postConnection.edges ?? [];
  return (
    <>
      <h1>Posts</h1>
      <div>
        {postsList.map(
          (post) =>
            post?.node && (
              <div key={post.node.id}>
                <Link to={`/posts/${post.node._sys.filename}`}>
                  {post.node._sys.filename}
                </Link>
              </div>
            )
        )}
      </div>
    </>
  );
}
