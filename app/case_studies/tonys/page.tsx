'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function CaseStudyPage() {
  return (
    <>
      {/* entire page */}
      <div className='bg-white flex flex-col items-start w-screen min-h-screen'>
        {/* page section */}
        <div className='bg-[url("/pizza_ascii.png")] bg-repeat bg-[length:200px_200px] flex flex-col items-center overflow-clip pb-[80px] pt-[125px] px-[150px] w-full'>
          {/* the smaller section holding both elems */}
          <div className='flex gap-[60px] items-start w-full'>
            {/* the sticky section */}
            <div className='flex flex-col gap-[30px] items-center overflow-clip w-[300px] sticky top-[125px]'>
              {/*  */}
              <div className='border border-stone-200 border-solid flex flex-col items-start rounded-[5px] bg-white gap-[30px] p-[30px] w-[292px]'>
                <h2 className='font-bold text-2xl text-red-400 w-full'>
                  Tony's Big Cheese Pizza ☆
                </h2>
                <p className='font-normal h-[75px] text-stone-500 text-[16px] w-full'>
                  A UI/UX case study on improving the customer experience for a
                  local restaurant.
                </p>
                <div className='bg-red-200 flex items-start justify-center overflow-clip px-[5px] py-[10px] rounded-[5px] w-full'>
                  <p className='font-normal text-[16px] text-black'>
                    <a href='https://jacobsolanobrown.github.io/pages/TonysBigCheesePizzaHomepage.html'>
                      visit redesign
                    </a>
                  </p>
                </div>
              </div>
              {/* other navs */}
              <div className='bg-white border border-stone-200 border-solid flex flex-col gap-[30px] items-center justify-center overflow-clip p-[30px] rounded-[5px] w-full text-black'>
                <p className='font-bold underline w-full'>
                  <Link href='/case_studies'>back</Link>
                </p>
                <p className='font-semibold w-full'>
                  <a href='#introduction'>introduction</a>
                </p>
                <p className='font-semibold w-full'>
                  <a href='#problem'>problem</a>
                </p>
                <p className='font-semibold w-full'>
                  <a href='#solution'>solution</a>
                </p>
                <p className='font-semibold w-full'>
                  <a href='#takeaways'>takeaways</a>
                </p>
              </div>
            </div>
            {/* the scrollable section */}
            <div className='flex flex-1 flex-col gap-[30px] items-start'>
              <div
                id='introduction'
                className='bg-white border border-stone-200 border-solid flex flex-col gap-[30px] items-start overflow-clip p-[30px] rounded-[5px] w-full'
              >
                {/* <h2 className='font-bold justify-center text-[18px] text-black w-full'>
                  Tony's Big Cheese Pizza
                </h2> */}
                <div className='h-[398px] w-full relative'>
                  <Image
                    src='/tonys_images/mockup-tonys.png'
                    alt="Tony's Big Cheese Pizza case study"
                    fill
                    className='object-contain'
                  />
                </div>
                <div className='flex items-start justify-between w-full font-bold text-[16px] text-black'>
                  <p>march, 2025</p>
                  <p className='underline'>
                    <a href='https://jacobsolanobrown.github.io/pages/TonysBigCheesePizzaHomepage.html'>
                      visit redesign
                    </a>
                  </p>
                </div>
                <p className='font-normal text-black text-[16px] w-full'>
                  Tony's Big Cheese Pizza is a popular pizzeria from my hometown
                  (Yakima, Washington) that gets significant traffic. Their
                  current website lacks usability and accessibility, which leads
                  customers to often order by phone instead. Here I identify key
                  usability and accessibility issues to redesign the site for a
                  smoother, more responsive experience.
                </p>
                <p className='font-normal text-[14px] text-stone-500'>
                  #html/css #figma #ui/ux #user_research
                </p>
              </div>

              <div
                id='problem'
                className='bg-white border border-stone-200 border-solid flex flex-col gap-[30px] items-center overflow-clip p-[30px] rounded-[5px] w-full'
              >
                <h3 className='font-bold text-[18px] text-red-400'>
                  *ੈ✩‧₊˚༺☆༻*ੈ✩‧₊˚ problem *ੈ✩‧₊˚༺☆༻*ੈ✩‧₊˚
                </h3>
                <p className='font-normal text-[14px] text-black w-full'>
                  The usability issues on the Tonys Big Cheese Pizza website
                  frequently drive customers to order by phone instead of using
                  the website. The site lacks a clear hierarchy, making it
                  difficult to navigate. It also has poor color contrast, making
                  it hard to read.
                </p>
                <div className='h-[398px] w-full relative'>
                  <Image
                    src='/tonys_images/original-tonys.png'
                    alt='Original website problems'
                    fill
                    className='object-contain'
                  />
                </div>
                <h3 className='font-bold text-[18px] text-black'>
                  usability analysis
                </h3>
                <p className='font-normal text-black text-[16px] w-full'>
                  I evaluated the website using criteria from interaction design
                  principles: efficiency, learnability, and memorability.
                </p>
                <div className='flex font-bold gap-[30px] items-start w-full text-stone-500 text-[16px]'>
                  <div className='flex-1'>
                    <p className='mb-2'>efficiency</p>
                    <ul className='font-normal space-y-2'>
                      <li className='list-disc ml-6'>
                        Navigation is cluttered (too many navbar options)
                      </li>
                      <li className='list-disc ml-6'>{`Duplicate "Order Now" and "Menu" functions confuse users`}</li>
                    </ul>
                  </div>
                  <div className='flex-1'>
                    <p className='mb-2'>learnability</p>
                    <ul className='font-normal space-y-2'>
                      <li className='list-disc ml-6'>
                        Poor visual hierarchy makes key info hard to find (e.g.,
                        company story at bottom)
                      </li>
                      <li className='list-disc ml-6'>
                        Weak branding makes content harder to remember
                      </li>
                    </ul>
                  </div>
                  <div className='flex-1'>
                    <p className='mb-2'>memorability</p>
                    <ul className='font-normal space-y-2'>
                      <li className='list-disc ml-6'>
                        Excessive calls-to-action dilute clarity
                      </li>
                      <li className='list-disc ml-6'>
                        Center-aligned dense text reduces readability
                      </li>
                    </ul>
                  </div>
                </div>
                <h3 className='font-bold text-[18px] text-black'>
                  accessibility analysis (WebAIM WAVE)
                </h3>
                <p className='font-normal text-black text-[16px] w-full'>
                  Images lacked helpful alt text, and the black-on-red color
                  combination failed contrast checks, making the text difficult
                  for visually impaired users. WebAIM's WAVE accurately
                  identified these critical accessibility issues, confirming the
                  need for improved color contrast and clear alt text.
                </p>
              </div>

              <div
                id='solution'
                className='bg-white border border-stone-200 border-solid flex flex-col gap-[30px] items-center overflow-clip p-[30px] rounded-[5px] w-full'
              >
                <h3 className='font-bold text-2xl text-red-400'>
                  *ੈ✩‧₊˚༺☆༻*ੈ✩‧₊˚ solution *ੈ✩‧₊˚༺☆༻*ੈ✩‧₊˚
                </h3>
                <p className='font-normal text-black text-[16px] w-full'>
                  First I built a clear, reusable style guide in Figma to help
                  guide my final mockup designs and overall design philosophy
                  for the website brand. I tried my best to tie in colors that
                  have that retro feel and make the element design feel simple.
                </p>
                <div className='flex items-center justify-between w-full'>
                  <div className='flex flex-1 flex-col font-bold gap-[30px] items-start text-stone-500 text-[16px]'>
                    <div className='w-full'>
                      <p className='mb-2'>typography</p>
                      <ul className='font-normal space-y-2'>
                        <li className='list-disc ml-6'>{`Headers: "Righteous," bold, clearly scaled by device size.`}</li>
                        <li className='list-disc ml-6'>{`Body: "Montserrat," regular weight, optimized for readability.`}</li>
                      </ul>
                    </div>
                    <div className='w-full'>
                      <p className='mb-2'>colors</p>
                      <ul className='font-normal space-y-2'>
                        <li className='list-disc ml-6'>
                          Primary Red: #C60A0A (high contrast, visually
                          inviting).
                        </li>
                        <li className='list-disc ml-6'>
                          Background: White, with clear contrast and
                          accessibility checks.
                        </li>
                      </ul>
                    </div>
                    <div className='w-full'>
                      <p className='mb-2'>reusable components</p>
                      <ul className='font-normal'>
                        <li className='list-disc ml-6'>
                          Buttons with clear hover and active states.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='flex flex-1 h-full'>
                    <div className='flex-1 h-[500px] relative'>
                      <Image
                        src='/tonys_images/style-guide-tonys.png'
                        alt='Style guide'
                        fill
                        className='object-contain'
                      />
                    </div>
                  </div>
                </div>
                <h3 className='font-bold text-[18px] text-black'>
                  responsive mockups (mobile, tablet, desktop)
                </h3>
                <div className='h-[398px] w-full relative'>
                  <Image
                    src='/tonys_images/figmaMockup.png'
                    alt='Responsive mockups'
                    fill
                    className='object-contain'
                  />
                </div>
                <div className='flex font-bold gap-[30px] items-start w-full text-stone-500 text-[16px]'>
                  <div className='flex-1'>
                    <p className='mb-2'>Desktop (3840px × 2160px)</p>
                    <ul className='font-normal space-y-2'>
                      <li className='list-disc ml-6'>
                        Streamlined horizontal navigation bar using Flexbox.
                      </li>
                      <li className='list-disc ml-6'>
                        Clear hero section highlighting their signature Large
                        Pepperoni Cheese pizza.
                      </li>
                    </ul>
                  </div>
                  <div className='flex-1'>
                    <p className='mb-2'>Tablet (768px × 1024px)</p>
                    <ul className='font-normal space-y-2'>
                      <li className='list-disc ml-6'>
                        Collapsed navbar into a minimal hamburger menu (Shared
                        with Mobile).
                      </li>
                      <li className='list-disc ml-6'>
                        Adjusted typography and spacing for easy tablet use.
                      </li>
                    </ul>
                  </div>
                  <div className='flex-1'>
                    <p className='mb-2'>Mobile (375px × 667px)</p>
                    <ul className='font-normal space-y-2'>
                      <li className='list-disc ml-6'>
                        Single-column scrolling layout for clarity.
                      </li>
                      <li className='list-disc ml-6'>
                        Large, touch-friendly buttons with ample spacing.
                      </li>
                    </ul>
                  </div>
                </div>
                <h3 className='font-bold text-[18px] text-black'>
                  final design
                </h3>
                <p className='font-normal text-black text-[16px] w-full'>
                  Using my Figma mockups and design principles, I coded the
                  final{' '}
                  <a
                    className='underline'
                    href='https://jacobsolanobrown.github.io/pages/TonysBigCheesePizzaHomepage.html'
                  >
                    Tonys Big Cheese Pizza Homepage
                  </a>{' '}
                  design with HTML and CSS.
                </p>
                <div className='h-[398px] w-full relative'>
                  <Image
                    src='/tonys_images/redesigned-tonys.png'
                    alt='Final design'
                    fill
                    className='object-contain'
                  />
                </div>
              </div>

              <div
                id='takeaways'
                className='bg-white border border-stone-200 border-solid flex flex-col gap-[30px] items-center overflow-clip p-[30px] rounded-[5px] w-full'
              >
                <h3 className='font-bold text-2xl text-red-400'>
                  *ੈ✩‧₊˚༺☆༻*ੈ✩‧₊˚ takeaways *ੈ✩‧₊˚༺☆༻*ੈ✩‧₊˚
                </h3>
                <p className='font-normal text-black text-[16px] w-full'>
                  My redesign specifically addresses usability and accessibility
                  issues by simplifying navigation, creating clear
                  calls-to-action, enhancing visual hierarchy to make key
                  information instantly accessible, improving accessibility
                  through descriptive alt-text and better color contrast, and
                  ensuring a responsive, enjoyable ordering experience across
                  all devices. The result is a website that is not only visually
                  appealing but also user-friendly and accessible to all
                  customers. Additionally, as an engineer, I ensured that the
                  website is reliable and easy to maintain. I used semantic HTML
                  and CSS best practices to ensure that the website is easy to
                  read and understand. I also used a modular approach to design,
                  which makes it easy to update and maintain the website in the
                  future.
                  <br />
                  <br />
                  This project taught me the power of empathetic design; As an
                  engineer designing for reliability, by thoughtfully addressing
                  usability and accessibility, I transformed Tony's Pizza's
                  online presence into an inviting, and delightful
                  experience! Perhaps something that is as enjoyable as their pizza
                  itself! (seriously)
                </p>
                <h3 className='font-bold text-[18px] text-black'>
                  thank you
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
