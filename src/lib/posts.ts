import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { notFound } from 'next/navigation';

export interface Post {
  id: string;
  title: string;
  description: string;
  date: string;
  ttr: number;
  wordCount: number;
  author: string;
  contentHtml: string;
}

// Who wants to make a full authentication system and database just for a blog... Let's just do markdown. The obsidian way.
const postsDirectory = path.join(process.cwd(), 'src/data/blogs');

export function fetchAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory).filter(fileName => fileName.endsWith('.md'));
  return fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      id,
      ...data,
      contentHtml: content,
    } as Post;
  });
}

export function fetchOne(id: string): Post {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  if (!fs.existsSync(fullPath)) return notFound();
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Process markdown to HTML
  const processedContent = remark()
    .use(html)
    .processSync(content)
    .toString();

  return {
    id,
    ...data,
    contentHtml: processedContent,
  } as Post;
}