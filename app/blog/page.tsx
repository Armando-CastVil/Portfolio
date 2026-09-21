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
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

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
              and thinking about — from technology and career
              development to projects and everything in between.
            </p>
          </div>

          <div className="blog-hero-decoration">
            <div className="blog-orb blog-orb-one"></div>
            <div className="blog-orb blog-orb-two"></div>
            <div className="blog-grid-pattern"></div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-posts-section">
        <div className="container">

          {posts.length > 0 && (
            <>
              {/* Section heading */}
              <div className="blog-section-header">
                <div>
                  <span className="section-label">
                    LATEST
                  </span>

                  <h2>Featured article</h2>
                </div>

                <span className="blog-post-count">
                  {posts.length}{" "}
                  {posts.length === 1 ? "article" : "articles"}
                </span>
              </div>

              {/* Featured Post */}
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="featured-blog-card"
              >
                <div className="featured-blog-visual">
                  <div className="featured-blog-number">
                    01
                  </div>

                  <div className="featured-blog-shape"></div>

                  <span className="featured-blog-label">
                    FEATURED
                  </span>
                </div>

                <div className="featured-blog-content">
                  <div className="blog-post-meta">
                    <span className="blog-category">
                      {featuredPost.category}
                    </span>

                    <span className="blog-meta-divider">
                      •
                    </span>

                    <span>
                      {new Date(
                        featuredPost.date
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <h2>{featuredPost.title}</h2>

                  <p>
                    {featuredPost.description}
                  </p>

                  <span className="blog-read-more">
                    Read Article
                    <span className="blog-arrow">→</span>
                  </span>
                </div>
              </Link>
            </>
          )}

          {/* More Articles */}
          {remainingPosts.length > 0 && (
            <div className="more-posts">
              <div className="blog-section-header">
                <div>
                  <span className="section-label">
                    EXPLORE
                  </span>

                  <h2>More articles</h2>
                </div>
              </div>

              <div className="blog-posts-grid">
                {remainingPosts.map((post, index) => (
                  <Link
                    href={`/blog/${post.slug}`}
                    className="blog-post-card"
                    key={post.slug}
                  >
                    <div className="blog-card-top">
                      <span className="blog-card-number">
                        {String(index + 2).padStart(2, "0")}
                      </span>

                      <span className="blog-category">
                        {post.category}
                      </span>
                    </div>

                    <div className="blog-post-content">
                      <h3>{post.title}</h3>

                      <p className="blog-post-date">
                        {new Date(
                          post.date
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>

                      <p className="blog-post-description">
                        {post.description}
                      </p>
                    </div>

                    <div className="blog-card-footer">
                      <span>Read Article</span>
                      <span className="blog-arrow">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Empty state */}
          {posts.length === 0 && (
            <div className="blog-empty">
              <div className="blog-empty-icon">✦</div>

              <h2>Nothing here yet.</h2>

              <p>
                I&apos;m working on some articles.
                Check back soon.
              </p>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}