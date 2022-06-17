import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./Home";
import { PostDetail } from "./PostDetail";
import { PostList } from "./PostList";

export function App() {
  return (
    <Suspense>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/posts">
            <Route index element={<PostList />} />
            <Route path=":id" element={<PostDetail />} />
          </Route>
        </Routes>
      </Layout>
    </Suspense>
  );
}
