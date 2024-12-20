const WIX_API_URL = 'https://www.wixapis.com/blog/v3/posts';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  coverMedia?: {
    url: string;
  };
  createdDate: string;
}

interface WixResponse<T> {
  post?: T;
  posts?: T[];
}

/**
 * Fetch a single blog post by Blog ID from Wix CMS
 * @param {string} blogId - The ID of the blog post to fetch
 * @returns {Promise<BlogPost|null>} Blog data
 */
export async function getBlogPostById(blogId: string): Promise<BlogPost | null> {
  try {
    if (!blogId) throw new Error("Blog ID is missing.");

    const response = await fetch(`${WIX_API_URL}/${blogId}`, {
      headers: {
        'Authorization': '1083b210-6190-43ce-8645-f32e423fec0c'
      }
    });
    if (!response.ok) throw new Error('Failed to fetch blog post');

    const data: WixResponse<BlogPost> = await response.json();
    return data.post || null;
  } catch (error) {
    console.error("Error fetching blog post:", error instanceof Error ? error.message : String(error));
    return null;
  }
}

/**
 * Fetch related blog posts, excluding the current Blog ID
 * @param {string} currentBlogId - The ID of the current blog post to exclude
 * @returns {Promise<BlogPost[]>} List of related blog posts
 */
export async function getRelatedPosts(currentBlogId: string): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${WIX_API_URL}?excludePostId=${currentBlogId}`, {
      headers: {
        'Authorization': 'YOUR_WIX_API_KEY_HERE'
      }
    });
    if (!response.ok) throw new Error('Failed to fetch related posts');

    const data: WixResponse<BlogPost> = await response.json();
    return data.posts || [];
  } catch (error) {
    console.error("Error fetching related posts:", error instanceof Error ? error.message : String(error));
    return [];
  }
}

/**
 * Fetch multiple blog posts from Wix CMS
 * @param {number} limit - The number of blog posts to fetch
 * @returns {Promise<BlogPost[]>} List of blog posts
 */
export async function getBlogPosts(limit: number = 5): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${WIX_API_URL}?limit=${limit}`, {
      headers: {
        'Authorization': 'YOUR_WIX_API_KEY_HERE'
      }
    });
    if (!response.ok) throw new Error('Failed to fetch blog posts');

    const data: WixResponse<BlogPost> = await response.json();
    return data.posts || [];
  } catch (error) {
    console.error("Error fetching blog posts:", error instanceof Error ? error.message : String(error));
    return [];
  }
}

