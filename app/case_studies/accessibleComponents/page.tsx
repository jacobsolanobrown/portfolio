'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AccessibleDesignCaseStudy() {
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
                <h2 className='font-bold text-2xl text-purple-400 w-full'>
                  Accessible Components ☆
                </h2>
                <p className='font-normal h-[75px] text-stone-500 text-[16px] w-full'>
                  A UI/UX case study evaluating accordion components across
                  three applications for accessibility.
                </p>
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
                  <a href='#current-designs'>current designs</a>
                </p>
                <p className='font-semibold w-full'>
                  <a href='#redesign'>redesign</a>
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
                <div className='h-[398px] w-full relative'>
                  <Image
                    src='/accessible_components_images/ticketmaster_ui.png'
                    alt='Accordion component from Ticketmaster including the Upcoming Events User Interface'
                    fill
                    className='object-contain'
                  />
                </div>
                <div className='flex items-start justify-between w-full font-bold text-[16px] text-black'>
                  <p>february, 2025</p>
                </div>
                <p className='font-normal text-black text-[16px] w-full'>
                  Components are the building blocks to an interface, ensuring
                  consistency and usability within apps. However, as much as
                  the design of common components like buttons, checkboxes, and
                  dropdowns are crucial to an application, so is their
                  accessibility. Accessible components allow a diverse user
                  pool to interact with them in many different ways (inputs)
                  and receive feedback from a variety of channels (outputs).
                </p>
                <p className='font-normal text-black text-[16px] w-full'>
                  This case study examines how an{' '}
                  <strong>accordion</strong> component functions across three
                  different applications: Ticketmaster Account Details
                  (Website), The Sims 4 Simology Panel (Game), and Brown
                  University QuestBridge FAQ (Website).
                </p>
                <p className='font-normal text-[14px] text-stone-500'>
                  #figma #ui/ux #user_research #accessibility
                </p>
              </div>

              <div
                id='current-designs'
                className='bg-white border border-stone-200 border-solid flex flex-col gap-[30px] items-center overflow-clip p-[30px] rounded-[5px] w-full'
              >
                <h3 className='font-bold text-[18px] text-purple-400'>
                  *ੈ✩‧₊˚༺☆༻*ੈ✩‧₊˚ current designs *ੈ✩‧₊˚༺☆༻*ੈ✩‧₊˚
                </h3>
                <h3 className='font-bold text-[18px] text-black w-full'>
                  how do we use an accordion?
                </h3>
                <p className='font-normal text-[16px] text-black w-full'>
                  Accordions are interactive UI components that organize
                  content into expandable and collapsible sections, improving
                  readability and navigation. Their effectiveness depends on
                  three key factors: <strong>learnability</strong>,{' '}
                  <strong>efficiency</strong>, and{' '}
                  <strong>memorability</strong>.
                </p>
                <div className='flex font-bold gap-[30px] items-start w-full text-stone-500 text-[16px]'>
                  <div className='flex-1'>
                    <p className='mb-2'>learnability</p>
                    <p className='font-normal'>
                      A well-designed accordion should be easy to understand
                      through clear visual cues, intuitive placement, and
                      familiar interaction patterns.
                    </p>
                  </div>
                  <div className='flex-1'>
                    <p className='mb-2'>efficiency</p>
                    <p className='font-normal'>
                      Efficiency is enhanced when users can quickly expand or
                      collapse sections with minimal effort, such as through
                      keyboard shortcuts or click-based interactions.
                    </p>
                  </div>
                  <div className='flex-1'>
                    <p className='mb-2'>memorability</p>
                    <p className='font-normal'>
                      Consistent design allows users to easily recall how to
                      interact with the accordion after their first use,
                      reducing cognitive load.
                    </p>
                  </div>
                </div>

                <h3 className='font-bold text-[18px] text-black w-full'>
                  input/output analysis
                </h3>
                <p className='font-normal text-[16px] text-black w-full'>
                  I examined three applications that incorporate accordions to
                  explore how different input and output methods affect the
                  user experience.
                </p>

                {/* Ticketmaster */}
                <div className='flex flex-col gap-[20px] w-full'>
                  <h4 className='font-bold text-[16px] text-black'>
                    ticketmaster account details
                  </h4>
                  <div className='h-[300px] w-full relative'>
                    <Image
                      src='/accessible_components_images/ticketmaster_ui.png'
                      alt='Accordion component from Ticketmaster including the Upcoming Events User Interface'
                      fill
                      className='object-contain object-left'
                    />
                  </div>
                  <div className='flex font-bold gap-[30px] items-start w-full text-stone-500 text-[16px]'>
                    <div className='flex-1'>
                      <p className='mb-2'>learnability</p>
                      <p className='font-normal'>
                        The accordion layout is easy to learn, utilizing common
                        conventions like clicking to open and close sections.
                        Each section content is a button to load a related
                        subpage, making navigation intuitive.
                      </p>
                    </div>
                    <div className='flex-1'>
                      <p className='mb-2'>memorability</p>
                      <p className='font-normal'>
                        The repeated accordion structure helps users memorize
                        where to find account details. Sections remain open
                        until manually closed, aiding content retention.
                      </p>
                    </div>
                    <div className='flex-1'>
                      <p className='mb-2'>efficiency</p>
                      <p className='font-normal'>
                        The accordion avoids overwhelming the interface with too
                        many sections and content, reducing unnecessary
                        scrolling.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sims 4 */}
                <div className='flex flex-col gap-[20px] w-full'>
                  <h4 className='font-bold text-[16px] text-black'>
                    the sims 4 simology panel
                  </h4>
                  <div className='flex gap-[30px] items-start w-full'>
                    <div className='h-[350px] w-[200px] relative flex-shrink-0'>
                      <Image
                        src='/accessible_components_images/sims_ui.png'
                        alt='Accordion component from The Sims 4'
                        fill
                        className='object-contain object-top'
                      />
                    </div>
                    <div className='flex flex-1 flex-col gap-[20px]'>
                      <div className='flex font-bold gap-[30px] items-start w-full text-stone-500 text-[16px]'>
                        <div className='flex-1'>
                          <p className='mb-2'>learnability</p>
                          <p className='font-normal'>
                            Easy to use with common click-to-open conventions.
                            Content in sections is formatted well with hover
                            states that explain relevant information.
                          </p>
                        </div>
                        <div className='flex-1'>
                          <p className='mb-2'>memorability</p>
                          <p className='font-normal'>
                            Players easily remember the layout since the
                            accordion format stays consistent. A keyboard
                            shortcut (Y) adds another memorable access method,
                            though many sections can complicate navigation.
                          </p>
                        </div>
                        <div className='flex-1'>
                          <p className='mb-2'>efficiency</p>
                          <p className='font-normal'>
                            Fast navigation by opening and closing sections as
                            needed. When all sections are open, scrolling
                            increases — mitigated by a resizable panel via a
                            handlebar.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Brown FAQ */}
                <div className='flex flex-col gap-[20px] w-full'>
                  <h4 className='font-bold text-[16px] text-black'>
                    brown university questbridge faq
                  </h4>
                  <div className='h-[300px] w-full relative'>
                    <Image
                      src='/accessible_components_images/brown_faq_ui.png'
                      alt='Accordion component from the Brown University Questbridge FAQ Website'
                      fill
                      className='object-contain object-left'
                    />
                  </div>
                  <div className='flex font-bold gap-[30px] items-start w-full text-stone-500 text-[16px]'>
                    <div className='flex-1'>
                      <p className='mb-2'>learnability</p>
                      <p className='font-normal'>
                        Natural expand/collapse structure helps users find
                        questions quickly. Grouping similar questions would
                        further simplify learning.
                      </p>
                    </div>
                    <div className='flex-1'>
                      <p className='mb-2'>memorability</p>
                      <p className='font-normal'>
                        Simple, common structure is easy to recall. Since FAQs
                        are accessed infrequently, users can still return and
                        navigate with ease.
                      </p>
                    </div>
                    <div className='flex-1'>
                      <p className='mb-2'>efficiency</p>
                      <p className='font-normal'>
                        Reduces clutter by hiding answers until needed. A search
                        option would further improve efficiency given more
                        questions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id='redesign'
                className='bg-white border border-stone-200 border-solid flex flex-col gap-[30px] items-center overflow-clip p-[30px] rounded-[5px] w-full'
              >
                <h3 className='font-bold text-2xl text-purple-400'>
                  *ੈ✩‧₊˚༺☆༻*ੈ✩‧₊˚ redesign *ੈ✩‧₊˚༺☆༻*ੈ✩‧₊˚
                </h3>
                <p className='font-normal text-black text-[16px] w-full'>
                  Accordions are already a well-optimized UI component,
                  balancing space usage and usability. However, by examining
                  how users interact through mouse, keyboard, or assistive
                  technology, we can find small but critical improvements that
                  make it more usable, efficient, or accessible. The question
                  is not whether it works, but whether it might work better.
                </p>
                <h3 className='font-bold text-[18px] text-black w-full'>
                  initial state models
                </h3>
                <p className='font-normal text-black text-[16px] w-full'>
                  I focused on redesigning Ticketmaster&apos;s accordion
                  component. Below are the initial state models for both mouse
                  and keyboard interactions.
                </p>
                <div className='flex items-start gap-[30px] w-full'>
                  <div className='flex flex-1 flex-col gap-[10px] items-center'>
                    <div className='h-[300px] w-full relative'>
                      <Image
                        src='/accessible_components_images/stmdl_key_init.png'
                        alt='Keyboard Initial State Model'
                        fill
                        className='object-contain'
                      />
                    </div>
                    <p className='font-normal text-[14px] text-stone-500 text-center'>
                      Other headers in the accordion stay open regardless of
                      changing another header&apos;s section.
                    </p>
                  </div>
                  <div className='flex flex-1 flex-col gap-[10px] items-center'>
                    <div className='h-[300px] w-full relative'>
                      <Image
                        src='/accessible_components_images/stmdl_mouse_init.png'
                        alt='Mouse Initial State Model'
                        fill
                        className='object-contain'
                      />
                    </div>
                    <p className='font-normal text-[14px] text-stone-500 text-center'>
                      Clicking on a header does not change any other header
                      sections in the accordion.
                    </p>
                  </div>
                </div>

                <h3 className='font-bold text-[18px] text-black w-full'>
                  proposed state models
                </h3>
                <div className='flex items-start gap-[30px] w-full'>
                  <div className='flex flex-1 flex-col gap-[10px] items-center'>
                    <div className='h-[300px] w-full relative'>
                      <Image
                        src='/accessible_components_images/stmdl_key_redesign.png'
                        alt='Keyboard Redesign State Model'
                        fill
                        className='object-contain'
                      />
                    </div>
                    <p className='font-normal text-[14px] text-stone-500 text-center'>
                      Opening a section now closes all other sections,
                      emphasizing the current section.
                    </p>
                  </div>
                  <div className='flex flex-1 flex-col gap-[10px] items-center'>
                    <div className='h-[300px] w-full relative'>
                      <Image
                        src='/accessible_components_images/stmdl_mouse_redesign.png'
                        alt='Mouse Redesign State Model'
                        fill
                        className='object-contain'
                      />
                    </div>
                    <p className='font-normal text-[14px] text-stone-500 text-center'>
                      Same as the keyboard redesign — opening one section
                      closes all others to reduce visual noise.
                    </p>
                  </div>
                </div>

                <h3 className='font-bold text-[18px] text-black w-full'>
                  final mockup
                </h3>
                <p className='font-normal text-black text-[16px] w-full'>
                  Using these state models, I designed two key states for the
                  redesigned Ticketmaster accordion in Figma.
                </p>

                <div className='flex flex-col gap-[20px] w-full'>
                  <div className='h-[500px] w-full relative'>
                    <Image
                      src='/accessible_components_images/Initial_State_(Redesign).jpg'
                      alt='Redesigned Accordion component from Ticketmaster with all sections closed'
                      fill
                      className='object-contain object-left'
                    />
                  </div>
                  <div className='flex flex-col gap-[5px]'>
                    <p className='font-bold text-[16px] text-black'>
                      default state
                    </p>
                    <p className='font-normal text-[16px] text-black'>
                      All sections are closed by default, showing only the
                      accordion headers.{' '}
                      <strong>Trade-off:</strong> starting with every panel
                      closed adds one extra click to see content, yet delivers
                      a clean first view. This uncluttered layout instantly
                      signals &quot;click to open&quot;{' '}
                      <strong>(learnability)</strong>, is easy to recall on
                      return visits <strong>(memorability)</strong>, and cuts
                      initial scrolling and visual noise{' '}
                      <strong>(efficiency)</strong>.
                    </p>
                  </div>
                </div>

                <div className='flex flex-col gap-[20px] w-full'>
                  <div className='h-[500px] w-full relative'>
                    <Image
                      src='/accessible_components_images/Open_State_Redesign.jpg'
                      alt='Redesigned Accordion component from Ticketmaster including highlighted open section'
                      fill
                      className='object-contain object-left'
                    />
                  </div>
                  <div className='flex flex-col gap-[5px]'>
                    <p className='font-bold text-[16px] text-black'>
                      open section state
                    </p>
                    <p className='font-normal text-[16px] text-black'>
                      The selected section is highlighted in blue, the close
                      chevron gets a &quot;Close&quot; label, and all other
                      sections collapse.{' '}
                      <strong>Trade-off:</strong> hiding other panels removes
                      side-by-side comparison, but the blue highlight and
                      &quot;Close&quot; label give a single, clear focal point.
                      Users grasp the pattern at a glance{' '}
                      <strong>(learnability)</strong>, recall the
                      &quot;blue = open&quot; rule on return visits{' '}
                      <strong>(memorability)</strong>, and scroll less to reach
                      content <strong>(efficiency)</strong>.
                    </p>
                  </div>
                </div>

                <div className='h-[400px] w-full relative'>
                  <Image
                    src='/accessible_components_images/accessible-mockup.png'
                    alt='Accessible components mockup overview'
                    fill
                    className='object-contain'
                  />
                </div>
              </div>

              <div
                id='takeaways'
                className='bg-white border border-stone-200 border-solid flex flex-col gap-[30px] items-center overflow-clip p-[30px] rounded-[5px] w-full'
              >
                <h3 className='font-bold text-2xl text-purple-400'>
                  *ੈ✩‧₊˚༺☆༻*ੈ✩‧₊˚ takeaways *ੈ✩‧₊˚༺☆༻*ੈ✩‧₊˚
                </h3>
                <p className='font-normal text-black text-[16px] w-full'>
                  As a full-stack engineer who aims to build with precision,
                  this case study clarifies how intentional accessibility
                  improvements transform a simple accordion into an intuitive,
                  inclusive experience.
                </p>
                <div className='flex font-bold gap-[30px] items-start w-full text-stone-500 text-[16px]'>
                  <div className='flex-1'>
                    <p className='mb-2'>usability strengths</p>
                    <ul className='font-normal space-y-2'>
                      <li className='list-disc ml-6'>
                        Chevrons and plus/minus toggles give clear visual cues
                      </li>
                      <li className='list-disc ml-6'>
                        Keyboard operability via Tab and Enter
                      </li>
                      <li className='list-disc ml-6'>
                        Screen-reader announcements for expanded state
                      </li>
                    </ul>
                  </div>
                  <div className='flex-1'>
                    <p className='mb-2'>redesign additions</p>
                    <ul className='font-normal space-y-2'>
                      <li className='list-disc ml-6'>
                        Visible section highlights
                      </li>
                      <li className='list-disc ml-6'>
                        &quot;Close&quot; labels for clarity
                      </li>
                      <li className='list-disc ml-6'>
                        Less selectable content by default
                      </li>
                    </ul>
                  </div>
                  <div className='flex-1'>
                    <p className='mb-2'>accessibility gaps addressed</p>
                    <ul className='font-normal space-y-2'>
                      <li className='list-disc ml-6'>
                        Contrast ratios met for all text and icons
                      </li>
                      <li className='list-disc ml-6'>
                        &quot;Close&quot; label added for screen readers
                      </li>
                      <li className='list-disc ml-6'>
                        Closed-by-default reduces cognitive load for users with
                        visual or cognitive impairments
                      </li>
                    </ul>
                  </div>
                </div>
                <p className='font-normal text-black text-[16px] w-full'>
                  By closing all panels by default and emphasizing one section
                  at a time, we removed visual clutter and supported users with
                  cognitive or visual impairments who need a clear focal point.
                  This case study demonstrates how a focused, iterative
                  redesign — grounded in accessibility research — can evolve an
                  already well-designed accordion into an even more universally
                  intuitive interface.
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
