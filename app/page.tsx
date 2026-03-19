import Image from 'next/image';
import ThreeScene from './ThreeScene';
import ProjectPost from './components/ProjectPost';
import TextScramble from './components/TextScramble';
import Link from 'next/link';
import BackToTop from './components/BackToTop';

export default function Home() {
  return (
    <>
      <div
        id='top'
        className='flex flex-col align-center items-start w-screen min-h-screen m-0 p-0 bg-[url("/snow.gif")] bg-repeat bg-[length:400px_80px] text-foreground'
      >
        {/* landing page section */}
        <section className='flex flex-row w-screen h-screen bg-blue-400'>
          {/* name section */}
          <div className='w-auto justify-center items-center hidden md:flex ml-[150px] text-white'>
            {/* <h1 className='justify-center text-6xl text-white font-bold'>
              jacob solano
            </h1> */}
            <TextScramble text='jacob solano' />
          </div>
          {/* globe section */}
          <div className='flex-auto h-full min-w-0 justify-center items-center'>
            <ThreeScene />
          </div>
        </section>

        {/* main content section */}
        <main className='flex mt-[100px] mb-[80px] ml-75 mr-75 flex-col items-center gap-10 self-stretch'>
          {/* two columns sections together */}
          <div className='flex items-start gap-[60px] self-stretch'>
            {/* sticky card section */}
            <div className='flex flex-col align-center gap-[30px] sticky top-[100px] self-start'>
              {/* profile card  image width and div width must match*/}
              <div className='w-[250px] flex flex-col items-start rounded-[10px] border border-stone-400 border-solid overflow-hidden bg-white  text-black '>
                <div className='group relative w-full aspect-square overflow-hidden'>
                  <Image
                    src='/slaycat.gif'
                    alt='slay cat dancing gif'
                    fill
                    className='object-cover transition-transform duration-700 group-hover:scale-105 border border-stone-400 border-solid'
                  />
                  <Image
                    src='/profile.jpeg'
                    alt='picture of a cute creature'
                    fill // this makes the image fill the parent div
                    className='object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100  border border-stone-400 border-solid'
                    // this makes the image cover the div and adds a zoom effect on hover
                  />
                </div>
                <div className='flex p-[30px] gap-[30px]   flex-col justify-center align-center w-full text-wrap'>
                  <h2 className='font-bold text-2xl text-blue-300'>
                    jacob solano
                  </h2>
                  <p className='text-slate text-sm'>
                    i am a dreamer who loves software and whimsy. please contact
                    me if that interests you.
                  </p>
                  {/* link options */}
                  <div className=' flex flex-row align-start justify-between align-self'>
                    {/* make ascii images of the logos using ur own tool omg! 30px x 30px */}

                    <a href='mailto:gilbert_solano@brown.edu'>
                      <Image
                        alt='email icon'
                        src='/mail_icon.png'
                        width={40}
                        height={40}
                        className='rounded-[5px]'
                      />
                    </a>
                    <a href='https://www.linkedin.com/in/jacob-solano-92587226b/'>
                      <Image
                        alt='linkedin icon'
                        src='/linkedin_icon.png'
                        width={40}
                        height={40}
                        className='rounded-[5px]'
                      />
                    </a>
                    <a href='https://github.com/jacobsolanobrown'>
                      <Image
                        alt='github icon'
                        src='/github_icon.png'
                        width={40}
                        height={40}
                        className='rounded-[5px]'
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className='flex flex-col p-[30px] justify-center self-stretch gap-[30px] rounded-[10px] border border-stone-400 border-solid overflow-hidden bg-white text-black'>
                <p className='self-stretch underline font-semibold text-blue-300'>
                  ⭑ <Link href={'/'}>projects</Link>
                </p>
                <p className='self-stretch hover:underline font-semibold'>
                  ⭑ <Link href={'/case_studies'}>case studies</Link>
                </p>
                {/* <p className='self-stretch hover:underline font-semibold'>
                  ⭑ <Link href={'/other'}>other</Link>
                </p> */}
                {/* <p className='self-stretch hover:underline font-semibold'>
                  ⬇ resume
                </p> */}
              </div>
            </div>
            {/* scrollable section */}
            <div className='flex flex-col items-start gap-[30px] text-black'>
              {/* about card */}
              <div className='flex flex-col p-[30px] gap-[30px] items-start align-self rounded-[10px] border border-stone-400 border-solid overflow-hidden  bg-white '>
                <h2 className='font-bold text-xl text-blue-300'>about ✧ 𝄞 ❤︎</h2>
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
                <h2 className='font-bold text-xl text-blue-300'>
                  techstack ★ ｡ﾟ 𑣿 ⡴
                </h2>
                <div className='flex flex-row justify-start items-start self-stretch'>
                  <p className='flex-1'>
                    frontend
                    <br />
                    <br />
                    next.js
                    <br />
                    react
                    <br />
                    java/typescript
                    <br />
                    tailwind
                    <br />
                    three.js
                  </p>
                  <p className='flex-1'>
                    backend
                    <br />
                    <br />
                    java
                    <br />
                    python
                    <br />
                    supabase
                    <br />
                    clerk
                    <br />
                    docker
                    <br />
                    git
                  </p>
                </div>
              </div>
              {/* projects card */}
              <ProjectPost
                title='buy@brown'
                imgSrc='/buyatbrown-mockup.png'
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
                colorTheme='#ec2c2c'
              />
              <ProjectPost
                title='toascii'
                imgSrc='/ascii_cover.png'
                description='a photo editor that transforms any image into ascii art, and it can also pixelate images...'
                date='february 11th, 2024'
                githubLink='https://github.com/jacobsolanobrown/ascii-test'
                websiteLink='https://jacobsolanobrown.github.io/ascii-test/'
                tags={['javascript', 'html', 'css']}
                coolGlyph=''
                colorTheme='#5999B5'
              />
            </div>
          </div>
        </main>

        <footer className='flex justify-center w-full pb-10'>
          <BackToTop />
        </footer>
      </div>
    </>
  );
}
