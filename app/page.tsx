import Image from 'next/image';
import ThreeScene from './ThreeScene';

export default function Home() {
  return (
    <>
      <div className='flex flex-col align-center items-start w-screen min-h-screen m-0 p-0 bg-background text-foreground'>
        {/* <section>
          <ThreeScene />
        </section> */}
        <main className='flex mt-[125px] mb-[80px] ml-[300px] mr-[300px] flex-col items-center gap-10 self-stretch'>
          <h1>testing</h1>
        </main>
      </div>
    </>
  );
}
