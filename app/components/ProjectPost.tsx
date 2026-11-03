import React from 'react';

interface ProjectPostProps {
  title: string;
  imgSrc: string;
  imgAlt?: string; // describe what the screenshot shows, for screen readers
  description: string;
  date: string;
  githubLink?: string;
  tags: string[];
  websiteLink?: string;
  coolGlyph: string;
  colorTheme?: string;
  solid?: boolean; // opaque white card instead of the see-through one (for busy backgrounds)
}

const ProjectPost: React.FC<ProjectPostProps> = ({
  title,
  imgSrc,
  imgAlt,
  description,
  date,
  githubLink,
  tags,
  websiteLink,
  coolGlyph,
  colorTheme,
  solid = false,
}) => {
  return (
    <div
      style={{ '--theme-hover': colorTheme } as React.CSSProperties}
      className={`flex flex-col items-start self-stretch rounded-[10px] border border-stone-400 border-solid overflow-hidden ${
        solid ? 'bg-white' : 'bg-white/60 backdrop-blur-md'
      }`}
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
          {/* decorative kaomoji: hidden from screen readers */}
          {coolGlyph && <span aria-hidden='true'>{coolGlyph}</span>}
        </h2>
      </div>
      <img
        src={imgSrc}
        alt={imgAlt ?? `${title} screenshot`}
        className='w-full h-auto object-cover self-stretch'
      />
      <div className='flex flex-col p-[30px] gap-[20px] items-start align-self self-stretch'>
        <p className='text-black'>
          {description}
          <br />
          <br />
          <span aria-hidden='true' className='text-[var(--theme-hover)]'>
            {coolGlyph}
          </span>
        </p>
        <div className='flex justify-between items-start self-stretch'>
          <p className='font-semibold'>{date}</p>
          {githubLink !== undefined ?
            <a
              href={githubLink}
              className={`font-semibold hover:underline hover:text-[var(--theme-hover)]`}
            >
              <span aria-hidden='true'>« </span>see code
              {/* every card says "see code", so screen readers also hear which project */}
              <span className='sr-only'> for {title.trim()} on GitHub</span>
              <span aria-hidden='true'> »</span>
            </a>
          : null }
        </div>
        <ul aria-label='tags'>
          {tags.map((tag, index) => (
            <li
              key={index}
              className='inline-block text-gray-800 text-sm mr-2'
            >
              <span aria-hidden='true'>#</span>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectPost;
