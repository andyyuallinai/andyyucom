export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  content?: string;
  image?: string;
  tags: string[];
}

export interface AIProject {
  id: string;
  name: string;
  url: string;
  displayUrl: string;
  role: string;
  description: string;
}

export interface CollectionItem {
  id: string;
  title: string;
  count: number;
  coverImage: string;
}
