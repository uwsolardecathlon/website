import PageHeader from '../components/PageHeader.tsx';
import H2 from '../components/text/H2.tsx';
import TeamDescription, {
  TeamDescriptionProps,
} from '../components/TeamDescription.tsx';
import { teams, relatedGroups } from '../data/teams.js';

const Team = () => {
  return (
    <div className='my-28'>
      <PageHeader
        title='Our Team'
        subtitle='Meet our team and learn about our team structure.'
        imageSrc='/images/team.png'
      />
      <section className='container flex flex-col gap-4'>
        <H2>Overview</H2>
        <div className='flex flex-col gap-4'>
          <p>
            Designing a net zero energy building requires coordination and
            research to develop realistic and efficient models. Our club is
            divided into subteams that work together to develop new ideas and
            put those ideas into practice. Through collaboration with faculty,
            industry, and other students, our club is dedicated to developing a
            new age of high performance, low carbon buildings that shakes the
            nation.
          </p>
          <p>
            Note for applicants: There are no requirements when applying to each
            team. No matter your academic standing, your discipline, or your
            previous experience, we suggest that all applicants apply to the
            teams that they are interested in joining the most.{' '}
          </p>
          <p>
            Interested in joining more than one team? All applicants are able to
            apply to multiple teams as long as they are able to commit enough
            time to support their responsibilities.{' '}
            <strong>
              If you are not able to dedicate more than 10 hours per week, then
              we highly recommend joining only one team.
            </strong>
          </p>
        </div>
      </section>
      <section className='container flex flex-col gap-8 py-12'>
        <H2>Subteams</H2>
        <div className='flex flex-col gap-8'>
          {teams.map((team: TeamDescriptionProps) => (
            <TeamDescription
              className='[&:not(:last-child)]:pb-8 [&:not(:last-child)]:border-b border-neutral-400'
              {...team}
            />
          ))}
        </div>
      </section>
      <section className='container flex flex-col gap-8'>
        <H2>Related Groups</H2>
        <div className='flex flex-col gap-12'>
          {relatedGroups.map((group: TeamDescriptionProps) => (
            <TeamDescription
              className='[&:not(:last-child)]:pb-8 [&:not(:last-child)]:border-b border-neutral-400'
              {...group}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
