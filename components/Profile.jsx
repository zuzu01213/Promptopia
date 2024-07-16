import React from 'react'
import PromptCard from './PromptCard'

const Profile = ({name, desc, data, handleEdit, handleDelete} ) => {
  return (

    <section className='w-full'>

      <h1 className='head_user text-left'>
        <span className='blue_gradient'>{name} Profile</span>
      </h1>

      <p className='my-2 text-[15px] text-gray-600 sm:text-xl max-w-2xl text-left'>
        {desc}
      </p>

      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post.id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>

    </section>

  )
}

export default Profile