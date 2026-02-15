import Image from 'next/image';
import ThreeScene from './ThreeScene';

export default function Home() {
  return (
    <>
      <div className='flex flex-col align-center items-start w-screen min-h-screen m-0 p-0 bg-background text-foreground'>
        {/* landing page section */}
        {/* <section>
          <ThreeScene />
        </section> */}
        {/* main content section */}
        <main className='flex mt-[125px] mb-[80px] ml-[300px] mr-[300px] flex-col items-center gap-10 self-stretch'>
          {/* two columns sections together */}
          <div className='flex items-start gap-[60px] self-stretch'>
            {/* sticky card section */}
            <div className='flex flex-col align-center gap-[30px]'>
              {/* profile card  image width and div width must match*/}
              <div className='w-[300px] flex flex-col items-start rounded-[5px] border-[1px] border-stone-50 border-solid overflow-hidden'>
                <Image
                  // dont include public in the path, nextjs automatically looks in the public folder for assets
                  src='/profile.jpeg'
                  width={300}
                  height={300}
                  alt='picture of a cute creature'
                />
                {/* TODO: FIX THE WIDTH TO INHERIT FROM THE PHOTO - like fill container for figma */}
                <div className='flex p-[30px] gap-[30px] flex-col justify-center align-center w-full text-wrap text-black bg-white'>
                  <h2>jacob solano</h2>
                  <p className='text-slate'>
                    i am a dreamer who loves software and whimsy. please contact
                    me if that interests you.
                  </p>
                  {/* link options */}
                  <div className=' flex flex-row align-start justify-between align-self'>
                    <a href=''>github</a>
                    <a href=''>linkedin</a>
                    <a href=''>resume</a>
                  </div>
                </div>
              </div>
            </div>
            {/* scrollable section */}
            <div className='flex flex-col items-start gap-[30px] text-black'>
              {/* about card */}
              <div className='flex flex-col p-[30px] gap-[30px] items-start align-self rounded-[5px] border-[1px] border-stone-50 border-solid overflow-hidden bg-white'>
                <h2 className='font-bold'>about</h2>
                <p >
                  hello i’m jacob solano and i study computer science at brown
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
                <h2 className='font-bold'>techstack</h2>
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
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
