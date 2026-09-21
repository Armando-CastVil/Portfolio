import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

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
      {/* Article Header */}
      <section className="blog-post-hero">
        <div className="container blog-post-hero-inner">
          <Link href="/blog" className="blog-back-link">
            <span>←</span>
            Back to Blog
          </Link>

          <div className="blog-post-meta">
            <span className="blog-post-category">
              {post.category}
            </span>

            <span className="blog-post-meta-divider">•</span>

            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          <h1>{post.title}</h1>

          <p className="blog-post-description">
            {post.description}
          </p>

          <div className="blog-post-accent"></div>
        </div>
      </section>

      {/* Article Content */}
      <section className="blog-post-content-section">
        <div className="container">
          <article className="blog-post-body">
            <ReactMarkdown
              components={{
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </article>

          {/* Back to Blog */}
          <div className="blog-post-footer">
            <Link href="/blog" className="blog-back-button">
              <span>←</span>
              Back to all articles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}