import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';
import { PortableText } from '@portabletext/react';

import Button from '../components/Button.tsx';
import H1 from '../components/text/H1.tsx';
import H2 from '../components/text/H2.tsx';
import Subtitle1 from '../components/text/Subtitle1.tsx';
import Subtitle2 from '../components/text/Subtitle2.tsx';

import {
  Button as ButtonType,
  Section,
  SectionWithImageAndButton,
  SectionWithButton,
} from '../types/types.ts';
import sanityClient from '../client.tsx';
import { getImg } from '../utils/getImg.ts';
import { components } from '../utils/portableText.tsx';

type GetInvolvedSection = Section & {
  joinBtn: ButtonType;
  donateBtn: ButtonType;
};

const Home = () => {
  const [hero, setHero] = useState<SectionWithImageAndButton>();
  const [mission, setMission] = useState<SectionWithButton>();
  const [team, setTeam] = useState<SectionWithImageAndButton>();
  const [getInvolved, setGetInvolved] = useState<GetInvolvedSection>();

  const query = `*[_type=='home'][0]`;

  useEffect(() => {
    const getData = async () => {
      const { hero, mission, team, getInvolved } = await sanityClient.fetch(
        query
      );
      setHero(hero);
      setMission(mission);
      setTeam(team);
      setGetInvolved(getInvolved);
    };

    getData();
  }, [query]);

  return (
    <>
      {hero ? (
        <section className='flex flex-col gap-12 md:gap-20 mt-24 md:mt-40 container'>
          <div className='flex flex-col gap-4 md:gap-8 max-md:items-center max-md:text-center'>
            <H1>{hero.heading}</H1>
            <Subtitle1 className='max-w-sm'>{hero.body}</Subtitle1>
            <NavLink to={hero.btn.href} className='w-fit'>
              <Button
                className='w-fit'
                label={hero.btn.label}
                variant='secondary'
                icon={GoArrowRight}
                tabIndex={-1}
              />
            </NavLink>
          </div>
          <img
            src={getImg(hero.img)}
            alt=''
            className='aspect-[4/5] sm:aspect-[16/9] object-cover'
          />
        </section>
      ) : (
        // Prevent layout shift
        <div className='h-screen'></div>
      )}
      {mission && (
        <section className=' bg-primary-dark text-white py-12 sm:py-20 lg:py-32 mt-20'>
          <div className='flex max-md:flex-col gap-4 md:gap-12 lg:gap-20 items-center container'>
            <H2 className='text-white basis-3/5 shrink-0 grow-0'>
              {mission.heading}
            </H2>
            <div className='flex flex-col gap-4'>
              <Subtitle2 className='text-white'>{mission.body}</Subtitle2>
              <NavLink to={mission.btn.href} className='w-fit'>
                <Button
                  label={mission.btn.label}
                  variant='secondary'
                  className='w-fit border-white/60 hover:border-white text-white'
                  tabIndex={-1}
                />
              </NavLink>
            </div>
          </div>
        </section>
      )}
      {team && (
        <section className='flex max-md:flex-col gap-8 md:gap-12 lg:gap-20 my-12 md:my-20 items-start lg:items-center container'>
          <img
            className='w-full md:w-2/5 lg:w-3/5 shrink-0 grow-0'
            src={getImg(team.img)}
            alt=''
          ></img>
          <div className='flex flex-col gap-4'>
            <H2>{team.heading}</H2>
            <PortableText value={team.body as []} components={components} />
            <NavLink to={team.btn.href} className='w-fit'>
              <Button
                className='w-fit'
                label={team.btn.label}
                variant='secondary'
                tabIndex={-1}
              />
            </NavLink>
          </div>
        </section>
      )}
      {getInvolved && (
        <section className='bg-secondary py-12 md:py-20'>
          <div className='flex flex-col items-start md:items-center gap-4 container'>
            <H2>{getInvolved.heading}</H2>
            <p className='text-wrap md:text-center max-w-sm'>
              {getInvolved.body}
            </p>
            <div className='flex gap-4'>
              <NavLink to={getInvolved.joinBtn.href} className='w-fit'>
                <Button
                  label={getInvolved.joinBtn.label}
                  variant='primary'
                  tabIndex={-1}
                />
              </NavLink>
              <NavLink to={getInvolved.donateBtn.href} className='w-fit'>
                <Button
                  label={getInvolved.donateBtn.label}
                  variant='secondary'
                  tabIndex={-1}
                />
              </NavLink>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
