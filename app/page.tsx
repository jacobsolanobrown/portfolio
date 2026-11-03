import Image from 'next/image';
import ThreeScene from './ThreeScene';
import ProjectPost from './components/ProjectPost';
import HeroText from './components/HeroText';
import Link from 'next/link';
import BackToTop from './components/BackToTop';

export default function Home() {
  return (
    <>
      <div
        id='top'
        // focusable from script only, so "back to top" can move keyboard focus here
        tabIndex={-1}
        className='flex flex-col align-center items-start w-screen min-h-screen m-0 p-0 bg-white text-foreground outline-none'
      >
        {/* landing page section (blue-600 so the white text passes contrast) */}
        <section className='flex flex-row w-screen h-screen bg-blue-600'>
          {/* name section */}
          <div className='w-auto justify-center items-center hidden md:flex ml-[150px] text-white'>
            {/* <h1 className='justify-center text-6xl text-white font-bold'>
              jacob solano
            </h1> */}
            <HeroText />
          </div>
          {/* globe section */}
          <div className='flex-auto h-full min-w-0 justify-center items-center'>
            <ThreeScene />
          </div>
        </section>

        {/* main content section */}
        <div className='relative w-full bg-white overflow-clip'>
          {/* animated gradient blob */}
          <div aria-hidden='true' className='absolute inset-0 pointer-events-none'>
            <div className='blob-container'>
              <div className='blob-gradient' />
            </div>
            <div className='bg-grid' />
          </div>
        <main id='main' className='flex mt-[100px] mb-[80px] ml-75 mr-75 flex-col items-center gap-10 self-stretch relative z-10'>
          {/* two columns sections together */}
          <div className='flex items-start gap-[60px] self-stretch'>
            {/* sticky card section */}
            <div className='flex flex-col align-center gap-[30px] sticky top-[100px] self-start'>
              {/* profile card  image width and div width must match*/}
              <div className='w-[250px] flex flex-col items-start rounded-[10px] border border-stone-400 border-solid overflow-hidden bg-white/60 backdrop-blur-md text-black '>
                <div className='group relative w-full aspect-square overflow-hidden'>
                  {/* both pictures are decorative, so alt='' tells screen readers to skip them */}
                  <Image
                    src='/slaycat.gif'
                    alt=''
                    fill
                    className='object-cover transition-transform duration-700 motion-safe:group-hover:scale-105 border border-stone-400 border-solid'
                  />
                  <Image
                    src='/profile.jpeg'
                    alt=''
                    fill // this makes the image fill the parent div
                    className='object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100  border border-stone-400 border-solid'
                    // this makes the image cover the div and adds a zoom effect on hover
                  />
                </div>
                <div className='flex p-[30px] gap-[30px]   flex-col justify-center align-center w-full text-wrap'>
                  <h2 className='font-bold text-2xl text-blue-700'>
                    jacob solano
                  </h2>
                  <p className='text-slate text-sm'>
                    i am a dreamer who loves software and whimsy. please contact
                    me if that interests you.
                  </p>
                  {/* link options */}
                  <div className=' flex flex-row align-start justify-between align-self'>
                    {/* make ascii images of the logos using ur own tool omg! 30px x 30px */}

                    {/* alt text says where each icon link goes */}
                    <a href='mailto:gilbert_solano@brown.edu'>
                      <Image
                        alt='email jacob'
                        src='/mail_icon.png'
                        width={40}
                        height={40}
                        className='rounded-[5px]'
                      />
                    </a>
                    <a href='https://www.linkedin.com/in/jacob-solano-92587226b/'>
                      <Image
                        alt="jacob's linkedin"
                        src='/linkedin_icon.png'
                        width={40}
                        height={40}
                        className='rounded-[5px]'
                      />
                    </a>
                    <a href='https://github.com/jacobsolanobrown'>
                      <Image
                        alt="jacob's github"
                        src='/github_icon.png'
                        width={40}
                        height={40}
                        className='rounded-[5px]'
                      />
                    </a>
                  </div>
                </div>
              </div>
              <nav
                aria-label='site'
                className='flex flex-col p-[30px] justify-center self-stretch gap-[30px] rounded-[10px] border border-stone-400 border-solid overflow-hidden bg-white/60 backdrop-blur-md text-black'
              >
                <p className='self-stretch underline font-semibold text-blue-700'>
                  <span aria-hidden='true'>⭑ </span>
                  <Link href={'/'} aria-current='page'>
                    projects
                  </Link>
                </p>
                <p className='self-stretch hover:underline font-semibold'>
                  <span aria-hidden='true'>⭑ </span>
                  <Link href={'/case_studies'}>case studies</Link>
                </p>
                {/* <p className='self-stretch hover:underline font-semibold'>
                  ⭑ <Link href={'/other'}>other</Link>
                </p> */}
                {/* <p className='self-stretch hover:underline font-semibold'>
                  ⬇ resume
                </p> */}
              </nav>
            </div>
            {/* scrollable section */}
            <div className='flex flex-col items-start gap-[30px] text-black'>
              {/* about card */}
              <div className='flex flex-col p-[30px] gap-[30px] items-start align-self rounded-[10px] border border-stone-400 border-solid overflow-hidden bg-white/60 backdrop-blur-md'>
                <h2 className='font-bold text-xl text-blue-700'>
                  about <span aria-hidden='true'>✧ 𝄞 ❤︎</span>
                </h2>
                <p>
                  hello i&apos;m jacob and i study computer science at brown
                  university in quaint providence, ri. i love building visual
                  driven software and love making clean, usable systems because
                  systems are inherently visual in my head.
                  <br />
                  <br />
                  i&apos;ve developed entire full-stack applications with apis,
                  databases, auth and all that... i also have experience with
                  data engineering, machine learning, and ui/ux design. my
                  projects are down below...

                </p>
                <h2 className='font-bold text-xl text-blue-700'>
                  techstack <span aria-hidden='true'>★ ｡ﾟ 𑣿 ⡴</span>
                </h2>
                {/* real lists so screen readers announce "list, 5 items"; looks the same as before */}
                <div className='flex flex-row justify-start items-start self-stretch'>
                  <div className='flex-1'>
                    <h3>frontend</h3>
                    <ul className='mt-6'>
                      <li>next.js</li>
                      <li>react</li>
                      <li>java/typescript</li>
                      <li>tailwind</li>
                      <li>three.js</li>
                    </ul>
                  </div>
                  <div className='flex-1'>
                    <h3>backend</h3>
                    <ul className='mt-6'>
                      <li>java</li>
                      <li>python</li>
                      <li>supabase</li>
                      <li>clerk</li>
                      <li>docker</li>
                      <li>git</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* projects card */}
              <ProjectPost
                title='buy@brown'
                imgSrc='/buyatbrown-mockup.png'
                imgAlt='buy@brown landing page on a laptop: the Brown crest, the tagline "Buy & Sell Exclusively at Brown By Students, For Students" and a "Sign in with Clerk" button'
                description='buy@brown is a marketplace made for brown students to buy and sell items from each other'
                date='december 11th, 2024'
                githubLink='https://github.com/jacobsolanobrown/buyatbrown'
                tags={[
                  'react',
                  'nextjs',
                  'tailwind',
                  'figma',
                  'clerk',
                  'firebase',
                  'java',
                ]}
                coolGlyph=''
                colorTheme='#c10007' // red-700: passes contrast for the title and the "see code" hover
              />
              <ProjectPost
                title='toascii'
                imgSrc='/ascii_cover.png'
                imgAlt='a photo of a horse galloping across a field, converted by toascii into dense red text characters'
                description='a photo editor that transforms any image into ascii art, and it can also pixelate images...'
                date='february 11th, 2024'
                githubLink='https://github.com/jacobsolanobrown/ascii-test'
                websiteLink='https://jacobsolanobrown.github.io/ascii-test/'
                tags={['javascript', 'html', 'css']}
                coolGlyph=''
                colorTheme='#0069a8' // sky-700: passes contrast on the card
              />
            </div>
          </div>
        </main>
        </div>

        <footer className='flex justify-center w-full pb-10'>
          <BackToTop />
        </footer>
      </div>
    </>
  );
}
