import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  content: string;
};

function getPost(slug: string): Post | null {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const filePath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    category: data.category,
    content,
  };
}

export function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "content/blog");

  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => ({
      slug: filename.replace(/\.md$/, ""),
    }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="blog-post-page">
      <article className="container">
        <header className="blog-post-header">
          <span className="blog-category">
            {post.category}
          </span>

          <h1>{post.title}</h1>

          <p className="blog-post-date">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <p className="blog-post-description">
            {post.description}
          </p>
        </header>

        <div className="blog-post-body">
          {post.content}
        </div>
      </article>
    </main>
  );
}