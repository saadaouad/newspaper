export interface Article {
  title: string;
  author: string | null;
  id: number;
  content: string;
  createdAt: string;
  imageUrl?: string | null;
}
