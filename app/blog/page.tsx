import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
};

function getPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), "content/blog");

  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");

      const { data } = matter(fileContents);

      return {
        slug: filename.replace(".md", ""),
        title: data.title,
        date: data.date,
        description: data.description,
        category: data.category,
      };
    });

  return posts.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <p className="section-label">Blog</p>

          <h1 className="blog-page-title">
            Thoughts &amp; Insights
          </h1>

          <p className="blog-page-description">
            A collection of things I&apos;m learning, building,
            and thinking about.
          </p>
        </div>
      </section>

      <section className="blog-posts-section">
        <div className="container">
          <div className="blog-posts-grid">
            {posts.map((post) => (
              <article className="blog-post-card" key={post.slug}>
                <div className="blog-post-content">
                  <span className="blog-category">
                    {post.category}
                  </span>

                  <h2>{post.title}</h2>

                  <p className="blog-post-date">
                    {new Date(post.date).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>

                  <p className="blog-post-description">
                    {post.description}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="blog-read-more"
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}