import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

async function getPost(slug: string) {
  const filePath = path.join(
    process.cwd(),
    "content/blog",
    `${slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);

  return {
    title: data.title,
    date: data.date,
    category: data.category,
    description: data.description,
    contentHtml: processedContent.toString(),
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="blog-article-page">
      <article className="blog-article">
        <div className="container">
          <header className="blog-article-header">
            <span className="blog-category">
              {post.category}
            </span>

            <h1>{post.title}</h1>

            <p className="blog-article-date">
              {new Date(post.date).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </p>

            <p className="blog-article-description">
              {post.description}
            </p>
          </header>

          <div
            className="blog-article-content"
            dangerouslySetInnerHTML={{
              __html: post.contentHtml,
            }}
          />

          <div className="blog-back">
            <Link href="/blog">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}