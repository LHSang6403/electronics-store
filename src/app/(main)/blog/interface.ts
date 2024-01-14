interface BlogData {
  id: string;
  title: string;
  images: string[];
  content: string;
  description: string;
  date_created: string;
  date_updated: string;
  creator_id: string;
  is_top_blog: boolean;
  is_deleted: boolean;
  viewers: number;
}

export default BlogData;
