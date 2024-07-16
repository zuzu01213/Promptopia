"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const [copied, setCopied] = useState(false);
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  const handleCopy = () => {
    navigator.clipboard.writeText(post.prompt);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={post.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-semibold text-gray-900">
              {post.creator.username}
            </h3>
            <p className="text-sm text-gray-500">{post.creator.email}</p>
          </div>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={copied ? "/assets/icons/tick.svg" : "/assets/icons/copy.svg"}
            width={12}
            height={12}
            alt="copy_btn"
          />
        </div>
      </div>

      <p className="my-4 text-sm text-gray-700 font-satoshi">{post.prompt}</p>

      <p
        className="text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        {post.tag}
      </p>
      
      {session?.user.id === post.creator._id && pathname === "/profile" && (
        <div className="flex gap-4 mt-4">
          <p
            className="text-sm font-inter green_gradient cursor-pointer"
            onClick={() => handleEdit && handleEdit(post)}
          >
            Edit
          </p>
          <p
            className="text-sm font-inter orange_gradient cursor-pointer"
            onClick={() => handleDelete && handleDelete(post)}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
