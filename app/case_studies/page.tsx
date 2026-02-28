'use client';

import Image from 'next/image';
import ProjectPost from '../components/ProjectPost';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='flex flex-col align-center items-start w-screen min-h-screen m-0 p-0 bg-[url("/cat_ascii.jpg")] bg-repeat bg-[length:300px_200px] text-foreground'>
        {/* main content section */}
        <main className='flex mt-[100px] mb-[80px] ml-[300px] mr-[300px] flex-col items-center gap-10 self-stretch'>
          {/* two columns sections together */}
          <div className='flex items-start gap-[60px] self-stretch'>
            {/* sticky card section */}
            <div className='flex flex-col align-center gap-[30px] sticky top-[100px] self-start'>
              {/* profile card  image width and div width must match*/}
              <div className='w-[250px] flex flex-col items-start rounded-[10px] border border-stone-200 border-solid overflow-hidden bg-white  text-black'>
                {/* images */}
                <div className='group relative w-full aspect-square overflow-hidden '>
                  <Image
                    src='/groovycat.gif'
                    alt='slay cat dancing gif'
                    fill
                    className='object-cover transition-transform duration-700 group-hover:scale-105 border border-stone-200 border-solid'
                  />
                  <Image
                    src='/profile.jpeg'
                    alt='picture of a cute creature'
                    fill // this makes the image fill the parent div
                    className='object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 border border-stone-200 border-solid'
                  />
                </div>

                <div className='flex p-[30px] gap-[30px] rounded-[10px] flex-col justify-center align-center w-full text-wrap'>
                  <h2 className='font-bold text-2xl text-blue-300'>
                    case studies
                    {/* ifelse {pathname === '/case_studies' ? '⭑' : ''}  */}
                  </h2>
                  {/* link options */}
                  <div className=' flex flex-row align-start justify-between align-self'>
                    <a href='mailto:gilbert_solano@brown.edu'>
                      <Image
                        alt='email icon'
                        src='/mail_icon.png'
                        width={40}
                        height={40}
                        className='rounded-[10px]'
                      />
                    </a>
                    <a href='https://www.linkedin.com/in/jacob-solano-92587226b/'>
                      <Image
                        alt='linkedin icon'
                        src='/linkedin_icon.png'
                        width={40}
                        height={40}
                        className='rounded-[10px]'
                      />
                    </a>
                    <a href='https://github.com/jacobsolanobrown'>
                      <Image
                        alt='github icon'
                        src='/github_icon.png'
                        width={40}
                        height={40}
                        className='rounded-[10px]'
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className='flex flex-col p-[30px] justify-center self-stretch gap-[30px] rounded-[10px] border border-stone-200 border-solid overflow-hidden bg-white text-black'>
                <p className='self-stretch hover:underline font-semibold'>
                  ⭑ <Link href={'/'}>projects</Link>
                </p>
                <p className='self-stretch underline font-semibold text-blue-300'>
                  ⭑ <Link href={'/case_studies'}>case studies</Link>
                </p>
                {/* <p className='self-stretch hover:underline font-semibold'>
                  ⭑ <Link href={'/other'}>other</Link>
                </p> */}
                {/* <p className='self-stretch hover:underline font-semibold'>
                  ⬇ <Link href={'/'}>resume</Link>
                </p> */}
              </div>
            </div>
            {/* scrollable section */}
            <div className='flex flex-col items-start gap-[30px] text-black'>
              {/* about card */}
              <div className='flex flex-col p-[30px] gap-[30px] items-start align-self rounded-[10px] border border-stone-200 border-solid overflow-hidden  bg-white'>
                <h2 className='font-bold text-xl text-blue-300'>about ✧ 𝄞 ❤︎</h2>
                <p>
                  these are some of my case studies, which are more in depth
                  looks at projects i’ve done, and the process behind them.
                  they’re a little more personal and less polished than the
                  projects on the projects page, but they’re fun to write about.
                  please look at them if you want to see the more user-oriented
                  way i design my projects.
                </p>
              </div>
              {/* projects card */}
              <ProjectPost
                title='Tonys Big Cheese Pizza '
                imgSrc='/tonys_images/redesigned-tonys.png'
                description='Tonys Big Cheese Pizza is a popular pizzeria from my hometown (Yakima, Washington) that gets significant traffic. Their current website lacks usability and accessibility, which leads customers to often order by phone instead. Here I identify key usability and accessibility issues to redesign the site for a smoother, more responsive experience.'
                date='march, 2025'
                websiteLink='/case_studies/tonys'
                githubLink='https://github.com/jacobsolanobrown/jacobsolanobrown.github.io/blob/main/pages/TonysBigCheesePizzaHomepage.html'
                tags={[
                  'html/css',
                  'figma',
                  'ui/ux',
                  'user_research',
                  'accessibility',
                ]}
                coolGlyph='ദ്ദി(ᵔᗜᵔ)'
                colorTheme='#6F1212'
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
