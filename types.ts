export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  content?: string;
  image?: string;
  tags: string[];
}

import type { Lang } from './utils/i18n/types';
import type { ProjectId } from './data/descriptions/types';

export type LocalizedText = Partial<Record<Lang, string>> & { en: string };

export const pickLoc = (text: LocalizedText, lang: Lang): string =>
  text[lang] ?? text.en;

export interface ProjectLink {
  url: string;
  displayUrl: string;
}

export interface ProjectCategory {
  id: string;
  label: LocalizedText;
}

export interface AIProject {
  id: ProjectId;
  name: string;
  category: string;
  links: ProjectLink[];
  role: string;
  status: 'live';
  badges?: LocalizedText[];
}

export interface CollectionItem {
  id: string;
  title: string;
  count: number;
  coverImage: string;
}
