import Image from 'next/image';
import ThreeScene from './ThreeScene';
import ProjectPost from './components/ProjectPost';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='flex flex-col align-center items-start w-screen min-h-screen m-0 p-0 bg-[url("/cat_ascii.jpg")] bg-repeat bg-[length:300px_200px] text-foreground'>
        {/* landing page section */}
        {/* <section>
          <ThreeScene />
        </section> */}
        {/* main content section */}
        <main className='flex mt-[100px] mb-[80px] ml-[300px] mr-[300px] flex-col items-center gap-10 self-stretch'>
          {/* two columns sections together */}
          <div className='flex items-start gap-[60px] self-stretch'>
            {/* sticky card section */}
            <div className='flex flex-col align-center gap-[30px] sticky top-[100px] self-start'>
              {/* profile card  image width and div width must match*/}
              <div className='w-[300px] flex flex-col items-start rounded-[5px] border border-stone-200 border-solid overflow-hidden bg-white  text-black'>
                <div className='group relative w-full aspect-square overflow-hidden'>
                  <Image
                    src='/profile.jpeg'
                    alt='picture of a cute creature'
                    fill // this makes the image fill the parent div
                    className='object-cover transition-transform duration-700 group-hover:scale-105'
                  />
                  <Image
                    src='/slaycat.gif'
                    alt='slay cat dancing gif'
                    fill
                    className='object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100'
                  />
                </div>
                <div className='flex p-[30px] gap-[30px] flex-col justify-center align-center w-full text-wrap'>
                  <h2 className='font-bold text-2xl text-blue-300'>
                    jacob solano :3
                  </h2>
                  <p className='text-slate'>
                    i am a dreamer who loves software and whimsy. please contact
                    me if that interests you.
                  </p>
                  {/* link options */}
                  <div className=' flex flex-row align-start justify-between align-self'>
                    {/* make ascii images of the logos using ur own tool omg! 30px x 30px */}
                    <a href=''>email</a>
                    <a href=''>github</a>
                    <a href=''>linkedin</a>
                  </div>
                </div>
              </div>
              <div className='flex flex-col p-[30px] justify-center self-stretch gap-[30px] rounded-[5px] border border-stone-200 border-solid overflow-hidden bg-white text-black'>
                <p className='self-stretch underline font-semibold text-blue-300'>
                  ⭑ <Link href={'/'}>projects</Link>
                </p>
                <p className='self-stretch hover:underline font-semibold'>
                  ⭑ <Link href={'/case_studies'}>case studies</Link>
                </p>
                <p className='self-stretch hover:underline font-semibold'>
                  ⭑ <Link href={'/other'}>other</Link>
                </p>
                <p className='self-stretch hover:underline font-semibold'>
                  ⬇ resume
                </p>
              </div>
            </div>
            {/* scrollable section */}
            <div className='flex flex-col items-start gap-[30px] text-black'>
              {/* about card */}
              <div className='flex flex-col p-[30px] gap-[30px] items-start align-self rounded-[5px] border border-stone-200 border-solid overflow-hidden  bg-white'>
                <h2 className='font-bold text-xl text-blue-300'>about ✧ 𝄞 ❤︎</h2>
                <p>
                  hello i’m jacob and i study computer science at brown
                  university in quaint providence, ri. i love building visual
                  driven software and love making clean, usable systems because
                  systems are inherently visual in my head.
                  <br />
                  <br />
                  i’ve developed entire full-stack applications with apis,
                  databases, auth and all that... i also have experience with
                  data engineering, machine learning, and ui/ux design. my
                  projects are down below...
                  <br />
                  <br />
                  the world is my oyster, and the world is also my cat
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
                imgSrc='/profile.jpeg'
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
                coolGlyph='(๑>؂•̀๑)'
                colorTheme='#ec2c2c'
              />
              <ProjectPost
                title='toascii'
                imgSrc='/ascii_cover.png'
                description='a photo editor that transforms any image into ascii art, and it can also pixelate images...'
                date='february 11th, 2024'
                githubLink='hi.com'
                tags={['javascript', 'html', 'css']}
                coolGlyph='>ᴗ<'
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
