"use client"
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Profile from '@components/Profile';

const MyProfile = () => {
  const { data: session, status } = useSession();
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      if (!session?.user?.id) return;

      try {
        const response = await fetch(`/api/users/${session.user.id}/posts`);

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [session]);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmation = confirm("Are you sure you want to delete this prompt?");
    
    if (!hasConfirmation) return;

    try {
      const response = await fetch(`/api/posts/${post._id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error("Failed to delete post");
      }

      // Update posts state by filtering out the deleted post
      setPosts((prevPosts) => prevPosts.filter((p) => p._id !== post._id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!session) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <p className="text-5xl font-robotoMono font-bold text-red-600">
          Access Denied
        </p>
      </div>
    );
  }

  return (
    <Profile
      name="My"
      desc="Welcome to your personal profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;

