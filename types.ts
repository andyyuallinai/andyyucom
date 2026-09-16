export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  content?: string;
  image?: string;
  tags: string[];
}

export interface LocalizedText {
  en: string;
  zh: string;
}

export interface ProjectLink {
  url: string;
  displayUrl: string;
}

export interface ProjectCategory {
  id: string;
  label: LocalizedText;
}

export interface AIProject {
  id: string;
  name: string;
  category: string;
  links: ProjectLink[];
  role: string;
  status: 'live';
  badges?: LocalizedText[];
  description: LocalizedText;
}

export interface CollectionItem {
  id: string;
  title: string;
  count: number;
  coverImage: string;
}
