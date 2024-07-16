"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post.id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const inputRef = useRef(null);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/prompt");
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
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      gsap.fromTo(
        inputRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5 }
      );
    }
  }, []);

  const filteredPosts = posts.filter((post) => {
    return (
      (post.tag && post.tag.toLowerCase().includes(searchText.toLowerCase())) ||
      (post.username && post.username.toLowerCase().includes(searchText.toLowerCase()))
    );
  });

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer opacity-0"
        />
      </form>
      <PromptCardList data={filteredPosts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
