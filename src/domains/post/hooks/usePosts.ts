import { useState, useEffect } from "react";

export interface Post {
  id: string;
  username: string;
  likes: number;
  content: string;
  images: string[];
}

export function usePosts() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      const mockPosts: Post[] = Array.from({ length: 10 }).map((_, index) => ({
        id: `post-${index}`,
        username: `user${index}`,
        likes: Math.floor(Math.random() * 100),
        content: "This is a sample post content",
        images: ["image1", "image2"],
      }));

      setPosts(mockPosts);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return {
    posts,
    loading,
    refetch: () => {
      setLoading(true);
      // Implement actual refetch logic later
      setTimeout(() => setLoading(false), 500);
    },
  };
}
