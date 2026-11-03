import type { Metadata } from 'next';
import Image from 'next/image';
import ProjectPost from '../components/ProjectPost';
import Link from 'next/link';

// browser tab / screen reader page title: "case studies · jacob solano"
export const metadata: Metadata = {
  title: 'case studies',
};

export default function Home() {
  return (
    <>
      <div className='flex flex-col align-center items-start w-screen min-h-screen m-0 p-0 bg-[url("/cat_ascii.jpg")] bg-repeat bg-[length:300px_200px] text-foreground'>
        {/* main content section */}
        <main id='main' className='flex mt-[100px] mb-[80px] ml-[300px] mr-[300px] flex-col items-center gap-10 self-stretch'>
          {/* two columns sections together */}
          <div className='flex items-start gap-[60px] self-stretch'>
            {/* sticky card section */}
            <div className='flex flex-col align-center gap-[30px] sticky top-[100px] self-start'>
              {/* profile card  image width and div width must match*/}
              <div className='w-[250px] flex flex-col items-start rounded-[10px] border border-stone-400 border-solid overflow-hidden bg-white  text-black'>
                {/* images */}
                <div className='group relative w-full aspect-square overflow-hidden '>
                  {/* both pictures are decorative, so alt='' tells screen readers to skip them */}
                  <Image
                    src='/groovycat.gif'
                    alt=''
                    fill
                    className='object-cover transition-transform duration-700 motion-safe:group-hover:scale-105 border border-stone-400 border-solid'
                  />
                  <Image
                    src='/profile.jpeg'
                    alt=''
                    fill // this makes the image fill the parent div
                    className='object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 border border-stone-400 border-solid'
                  />
                </div>

                <div className='flex p-[30px] gap-[30px] rounded-[10px] flex-col justify-center align-center w-full text-wrap'>
                  {/* the page's main heading */}
                  <h1 className='font-bold text-2xl text-blue-700'>
                    case studies
                    {/* ifelse {pathname === '/case_studies' ? '⭑' : ''}  */}
                  </h1>
                  {/* link options */}
                  <div className=' flex flex-row align-start justify-between align-self'>
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
                className='flex flex-col p-[30px] justify-center self-stretch gap-[30px] rounded-[10px] border border-stone-400 border-solid overflow-hidden bg-white text-black'
              >
                <p className='self-stretch hover:underline font-semibold'>
                  <span aria-hidden='true'>⭑ </span>
                  <Link href={'/'}>projects</Link>
                </p>
                <p className='self-stretch underline font-semibold text-blue-700'>
                  <span aria-hidden='true'>⭑ </span>
                  <Link href={'/case_studies'} aria-current='page'>
                    case studies
                  </Link>
                </p>
                {/* <p className='self-stretch hover:underline font-semibold'>
                  ⭑ <Link href={'/other'}>other</Link>
                </p> */}
                {/* <p className='self-stretch hover:underline font-semibold'>
                  ⬇ <Link href={'/'}>resume</Link>
                </p> */}
              </nav>
            </div>
            {/* scrollable section */}
            <div className='flex flex-col items-start gap-[30px] text-black'>
              {/* about card */}
              <div className='flex flex-col p-[30px] gap-[30px] items-start align-self rounded-[10px] border border-stone-400 border-solid overflow-hidden  bg-white'>
                <h2 className='font-bold text-xl text-blue-700'>
                  about <span aria-hidden='true'>✧ 𝄞 ❤︎</span>
                </h2>
                <p>
                  these are some of my case studies, which include more in-depth
                  looks at the projects i’ve done, and the processes behind them.
          
                  please look at them if you want to see the more user-oriented
                  way i design my projects.
                </p>
              </div>
              {/* projects card */}
              <ProjectPost
                title='Tonys Big Cheese Pizza '
                imgSrc='/tonys_images/redesigned-tonys.png'
                imgAlt="redesigned Tony's Big Cheese Pizza homepage: a pepperoni pizza photo beside a red Order Now button and phone number, above a dark red View Our Menu section"
                solid
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
              <ProjectPost
                title='Accessible Components Case Study'
                imgSrc='/accessible_components_images/accessible-mockup.png'
                imgAlt='redesigned Ticketmaster My Tickets page on a laptop, with an accordion sidebar (My Tickets open, My Profile and My Settings closed) beside upcoming event orders'
                solid
                description='Analyzing the accessibility of common UI components and redesigning them to be more inclusive. This case study explores the challenges and solutions in creating accessible interfaces, with a focus on improving usability for all users.'
                date='february, 2025'
                websiteLink='/case_studies/accessibleComponents'
                tags={[
                  'hci',
                  'figma',
                  'accessibility',
                  'user_research',
                ]}
                coolGlyph='( ꩜ ᯅ ꩜;)⁭'
                colorTheme='#8200db' // purple-700: passes contrast on white
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
