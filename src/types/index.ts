export type Chapter = {
  chapter_number: number;
  chapter_summary: string;
  chapter_summary_hindi: string;
  id: number;
  name: string;
  name_meaning: string;
  name_translated: string;
  name_transliterated: string;
  slug: string;
  verses_count: number;
};

export type Verse = {
  id: number;
  verse_number: number;
  slug: string;
  text: string;
  transliteration: string;
  word_meanings: string;
  translations: Translations[];
};

export type Translations = {
  id: number;
  description: string;
  author_name: string;
  language: string;
};
