import { Page } from "contentlayer/generated";
// ^ You're probably going to get an error, but we'll fix it later
import Link from "next/link";

export default function PostCard(page: Page) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={`${page.slug}`}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {page.title}
        </Link>
      </h2>
          <p>{page.description}</p>
    </div>
  );
}
