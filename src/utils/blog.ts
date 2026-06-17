type BlogEntryLike = {
  data: {
    draft: boolean;
    show?: boolean;
  };
};

export const isPublishedBlogPost = (post: BlogEntryLike) =>
  post.data.show === true && post.data.draft !== true;
