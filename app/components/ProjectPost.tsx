import React from 'react';

interface ProjectPostProps {
  title: string;
  imgSrc: string;
  description: string;
  date: string;
  githubLink: string;
  tags: string[];
  websiteLink?: string;
  coolglyph: string
}

const ProjectPost: React.FC<ProjectPostProps> = ({
  title,
  imgSrc,
  description,
  date,
  githubLink,
  tags,
  websiteLink,
  coolglyph
}) => {
  return (
    <div className='flex flex-col items-start self-stretch rounded-[5px] border border-stone-200 border-solid overflow-hidden  bg-white'>
      <div className='flex flex-row p-[30px] gap-2 items-start align-self'>
        <h2 className='font-bold underline'>
          <a href={websiteLink}>{title}</a>
        </h2>
        <h2>{coolglyph}</h2>
      </div>
      <img
        src={imgSrc}
        alt={`${title} screenshot`}
        className='w-full h-auto object-cover self-stretch'
      />
      <div className='flex flex-col p-[30px] gap-[20px] items-start align-self self-stretch'>
        <p className='text-black'>
          {description}
          <br />
          <br />
          {coolglyph}
        </p>
        <div className='flex justify-between items-start self-stretch'>
          <p className='font-semibold'>{date}</p>
          <a href={githubLink} className='font-semibold underline'>
            github
          </a>
        </div>
        <p>
          {tags.map((tag, index) => (
            <span
              key={index}
              className='inline-block text-gray-800 text-xs mr-2' 
            >
              #{tag}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ProjectPost;
