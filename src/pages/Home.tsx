import Button from '../components/Button.tsx';
import { GoArrowRight } from 'react-icons/go';
import H1 from '../components/text/H1.tsx';
import H2 from '../components/text/H2.tsx';
import Subtitle1 from '../components/text/Subtitle1.tsx';
import Subtitle2 from '../components/text/Subtitle2.tsx';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className='flex flex-col gap-12 md:gap-20 mt-24 md:mt-40 container'>
        <div className='flex flex-col gap-4 md:gap-8 max-md:items-center max-md:text-center'>
          <H1>UW Solar Decathlon</H1>
          <Subtitle1 className='max-w-sm'>
            Building a sustainable future at the University of Washington
          </Subtitle1>
          <NavLink to='/about' className='w-fit'>
            <Button
              className='w-fit'
              label='Learn More'
              variant='secondary'
              icon={GoArrowRight}
              tabIndex={-1}
            />
          </NavLink>
        </div>
        <img
          src='/images/home_hero.png'
          alt=''
          className='aspect-[4/5] sm:aspect-[16/9] object-cover'
        />
      </section>
      <section className=' bg-primary-dark text-white py-12 sm:py-20 lg:py-32 mt-20'>
        <div className='flex max-md:flex-col gap-4 md:gap-12 lg:gap-20 items-center container'>
          <H2 className='text-white basis-3/5 shrink-0 grow-0'>
            Our mission is to design and build energy-efficient, low-carbon
            buildings.
          </H2>
          <div className='flex flex-col gap-4'>
            <Subtitle2 className='text-white'>
              We participate in the Solar Decathlon, a prestigious collegiate
              competition run by the US Department of Energy.
            </Subtitle2>
            <NavLink to='/competition' className='w-fit'>
              <Button
                label='View the challenge'
                variant='secondary'
                className='w-fit border-white/60 hover:border-white text-white'
                tabIndex={-1}
              />
            </NavLink>
          </div>
        </div>
      </section>
      <section className='flex max-md:flex-col gap-8 md:gap-12 lg:gap-20 my-12 md:my-20 items-start lg:items-center container'>
        <img
          className='w-full md:w-2/5 lg:w-3/5 shrink-0 grow-0'
          src='/images/home_our_team.png'
          alt=''
        ></img>
        <div className='flex flex-col gap-4'>
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
          <NavLink to='/team' className='w-fit'>
            <Button
              className='w-fit'
              label='Meet the team'
              variant='secondary'
              tabIndex={-1}
            />
          </NavLink>
        </div>
      </section>

      <section className='bg-secondary py-12 md:py-20'>
        <div className='flex flex-col items-start md:items-center gap-4 container'>
          <H2>Get Involved</H2>
          <p className='text-wrap md:text-center max-w-sm'>
            We accept any and all students to join our group. Find out how to
            join or support us through donations!
          </p>
          <div className='flex gap-4'>
            <NavLink to='/join' className='w-fit'>
              <Button label='Join Us' variant='primary' tabIndex={-1} />
            </NavLink>
            <NavLink to='/donate' className='w-fit'>
              <Button label='Donate' variant='secondary' tabIndex={-1} />
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
