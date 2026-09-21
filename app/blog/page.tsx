
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

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main className="blog-page">

      {/* Hero */}
      <section className="blog-hero">
        <div className="container blog-hero-inner">
          <div className="blog-hero-text">
            <span className="section-label">MY BLOG</span>

            <h1 className="blog-page-title">
              Thoughts, ideas &amp;
              <span> things I&apos;m learning.</span>
            </h1>

            <p className="blog-page-description">
              A collection of things I&apos;m learning, building,
              and thinking about. Also a collection of personal writings on topics that are staples of computer science.
            </p>
          </div>

          <div className="blog-hero-decoration">
            <div className="blog-orb blog-orb-one"></div>
            <div className="blog-orb blog-orb-two"></div>
            <div className="blog-grid-pattern"></div>
          </div>
        </div>
      </section>

      {/* Blog Layout */}
      <section className="blog-content-section">
        <div className="container blog-layout">

          {/* Chronological Sidebar */}
          <aside className="blog-sidebar">
            <div className="blog-sidebar-inner">
              <span className="section-label">
                ARCHIVE
              </span>

              <h2>Blog Entries</h2>

              <div className="blog-timeline">
                {posts.map((post, index) => (
                  <Link
                    href={`/blog/${post.slug}`}
                    className={`blog-timeline-item ${
                      index === 0
                        ? "blog-timeline-item-active"
                        : ""
                    }`}
                    key={post.slug}
                  >
                    <div className="timeline-dot"></div>

                    <div className="timeline-content">
                      <span className="timeline-date">
                        {formatDate(post.date)}
                      </span>

                      <span className="timeline-title">
                        {post.title}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {posts.length > 0 && (
                <div className="blog-sidebar-count">
                  {posts.length}{" "}
                  {posts.length === 1
                    ? "entry"
                    : "entries"}
                </div>
              )}
            </div>
          </aside>

          {/* Articles */}
          <div className="blog-articles">

            {posts.length > 0 ? (
              <>
                <div className="blog-section-header">
                  <div>
                    <span className="section-label">
                      LATEST
                    </span>

                    <h2>Recent articles</h2>
                  </div>
                </div>

                <div className="blog-article-list">
                  {posts.map((post, index) => (
                    <article
                      className={`blog-article-card ${
                        index === 0
                          ? "blog-article-featured"
                          : ""
                      }`}
                      key={post.slug}
                    >
                      <div className="blog-article-card-top">
                        <span className="blog-category">
                          {post.category}
                        </span>

                        <span className="blog-article-date">
                          {formatDate(post.date)}
                        </span>
                      </div>

                      <h3>{post.title}</h3>

                      <p>
                        {post.description}
                      </p>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="blog-read-more"
                      >
                        Read Article
                        <span className="blog-arrow">
                          →
                        </span>
                      </Link>
                    </article>
                  ))}
                </div>
              </>
            ) : (
              <div className="blog-empty">
                <div className="blog-empty-icon">
                  ✦
                </div>

                <h2>Nothing here yet.</h2>

                <p>
                  I&apos;m working on some articles.
                  Check back soon.
                </p>
              </div>
            )}

          </div>
        </div>
      </section>
    </main>
  );
}
