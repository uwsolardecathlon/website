import Button from '../components/Button.tsx';
import { GoArrowRight } from 'react-icons/go';
import H1 from '../components/text/H1.tsx';
import H2 from '../components/text/H2.tsx';
import Subtitle1 from '../components/text/Subtitle1.tsx';
import Subtitle2 from '../components/text/Subtitle2.tsx';

const Home = () => {
  return (
    <>
      {/* Desktop */}
      <article className='hidden lg:block'>
        <section className='flex flex-col gap-20 mt-40 container'>
          <div className='flex flex-col gap-7'>
            <H1>UW Solar Decathlon</H1>
            <Subtitle1 className='max-w-sm'>
              Building a sustainable future at the University of Washington
            </Subtitle1>
            <Button
              className='w-fit'
              label='Learn More'
              variant='secondary'
              icon={GoArrowRight}
            />
          </div>
          <img
            src='/images/home_hero.png'
            alt='picture of Solar Decathlon event'
            className='max-h-[40rem]'
          />
        </section>
        <section className=' bg-primary-dark text-white py-20 px-20 gap-24 mt-20'>
          <div className='container flex flex-row'>
            <H2 className='text-white'>
              Our mission is to design and build energy-efficient, low-carbon
              buildings.
            </H2>
            <div className='flex flex-col gap-4'>
              <Subtitle2 className='text-white'>
                We participate in the Solar Decathlon, a prestigious collegiate
                competition run by the US Department of Energy.
              </Subtitle2>
              <Button
                label='View the challenge'
                variant='secondary'
                className='w-fit border-white text-white'
              />
            </div>
          </div>
        </section>
        <section className='flex space-between gap-24 container'>
          <img
            className='h-auto w-auto py-20'
            src='/images/home_our_team.png'
            alt='our team image'
          ></img>
          <div className='flex flex-col gap-6 py-28'>
            <H2>Our Team</H2>
            <p>
              UW Solar Decathlon is an interdisciplinary group involving
              architects and engineers to solve some of the world's greatest
              problems. Through design and optimization, we create energy
              efficient buildings to submit to the competition.
            </p>
            <p>
              We accept students across all majors to provide support to our
              cause. Our work involves marketing to students and industry,
              fundraising for the competition, and developing innovative research
              ideas to change the future.
            </p>
            <Button className='w-fit' label='Meet the team' variant='secondary' />
          </div>
        </section>

        <section className='flex flex-col bg-neutral-400 items-center p-20'>
          <div className='flex flex-col items-center gap-4 w-1/2'>
            <H2>Get Involved</H2>
            <p className='text-wrap text-center'>
              We accept any and all students to join our group. Find out how to
              join or support us through donations!
            </p>
            <div className='flex gap-4'>
              <Button label='Join Us' variant='primary' />
              <Button label='Donate' variant='secondary' />
            </div>
          </div>
        </section>
      </article>

      {/* Mobile */}
      <article className='lg:hidden flex flex-col md:gap-20 gap-16 w-full'>
        <section className='flex flex-col gap-20 md:mt-32 mt-24 items-center container'>
          <div className='flex flex-col gap-7 items-center'>
            <H1 className='text-center'>UW Solar Decathlon</H1>
            <Subtitle1 className='max-w-sm text-center'>
              Building a sustainable future at the University of Washington
            </Subtitle1>
            <Button
              className='w-fit'
              label='Learn More'
              variant='secondary'
              icon={GoArrowRight}
            />
          </div>
          <img
            src='/images/home_hero.png'
            alt='picture of Solar Decathlon event'
            className='max-h-[40rem]'
          />
        </section>
        <section className=' bg-primary-dark text-white md:py-20 py-16 md:px-17 px-5 gap-24'>
          <div className='container flex flex-col gap-7'>
            <H2 className='text-white'>
              Our mission is to design and build energy-efficient, low-carbon
              buildings.
            </H2>
            <Subtitle2 className='text-white'>
              We participate in the Solar Decathlon, a prestigious collegiate
              competition run by the US Department of Energy.
            </Subtitle2>
            <Button
              label='View the challenge'
              variant='secondary'
              className='w-fit border-white text-white'
            />
          </div>
        </section>
        <section className='flex flex-col container'>
          <img
            className='h-auto w-auto pb-14'
            src='/images/home_our_team.png'
            alt='our team image'
          ></img>
          <div className='flex flex-col gap-6'>
            <H2>Our Team</H2>
            <p>
              UW Solar Decathlon is an interdisciplinary group involving
              architects and engineers to solve some of the world's greatest
              problems. Through design and optimization, we create energy
              efficient buildings to submit to the competition.
            </p>
            <p>
              We accept students across all majors to provide support to our
              cause. Our work involves marketing to students and industry,
              fundraising for the competition, and developing innovative research
              ideas to change the future.
            </p>
            <Button className='w-fit' label='Meet the team' variant='secondary' />
          </div>
        </section>

        <section className='flex flex-col bg-neutral-400 items-center md:p-20 p-14'>
          <div className='flex flex-col items-center gap-4 lg:w-1/2 w-full'>
            <H2>Get Involved</H2>
            <p className='text-wrap text-center'>
              We accept any and all students to join our group. Find out how to
              join or support us through donations!
            </p>
            <div className='flex gap-4'>
              <Button label='Join Us' variant='primary' />
              <Button label='Donate' variant='secondary' />
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default Home;
