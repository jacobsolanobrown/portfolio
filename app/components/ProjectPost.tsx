import React from 'react';

interface ProjectPostProps {
  title: string;
  imgSrc: string;
  description: string;
  date: string;
  githubLink?: string;
  tags: string[];
  websiteLink?: string;
  coolGlyph: string;
  colorTheme?: string;
}

const ProjectPost: React.FC<ProjectPostProps> = ({
  title,
  imgSrc,
  description,
  date,
  githubLink,
  tags,
  websiteLink,
  coolGlyph,
  colorTheme,
}) => {
  return (
    <div
      style={{ '--theme-hover': colorTheme } as React.CSSProperties}
      className='flex flex-col items-start self-stretch rounded-[10px] border border-stone-400 border-solid overflow-hidden bg-white/60 backdrop-blur-md'
    >
      <div className='flex flex-row p-[30px] gap-2 items-start align-self text-xl'>
        {/* ifelse {pathname === '/case_studies' ? '⭑' : ''}  */}
        <h2 className='font-bold text-[var(--theme-hover)]'>
          {websiteLink !== undefined ?
            <a
              className='text-[var(--theme-hover)] hover:underline'
              href={websiteLink}
            >
              {title}
            </a>
          : title}{' '}
          {coolGlyph}
        </h2>
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
          <span className='text-[var(--theme-hover)]'>{coolGlyph}</span>
        </p>
        <div className='flex justify-between items-start self-stretch'>
          <p className='font-semibold'>{date}</p>
          {githubLink !== undefined ?
            <a
              href={githubLink}
              className={`font-semibold hover:underline hover:text-[var(--theme-hover)]`}
            >
              « see code »
            </a>
          : null }
        </div>
        <p>
          {tags.map((tag, index) => (
            <span
              key={index}
              className='inline-block text-gray-800 text-sm mr-2'
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
