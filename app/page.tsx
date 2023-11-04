import { allPages } from "contentlayer/generated";
import PostCard from "components/postcard";

export default function Home() {
    const pages = allPages;

  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">
        Next.js + Contentlayer Example
      </h1>
      {pages.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
