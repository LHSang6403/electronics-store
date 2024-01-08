interface BlogData {
  id: string;
  title: string;
  image: string;
  content: string;
  date_created: string;
  date_updated: string;
  creator_id: string;
  is_top_blog: boolean;
  is_deleted: boolean;
}

export default BlogData;
