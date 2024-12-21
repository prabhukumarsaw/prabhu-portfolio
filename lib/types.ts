export interface Author {
  name: string;
  avatar: string;
  role?: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  coverImage: string;
  author: Author;
  readTime?: string;
}