import ProfileCard from './ProfileCard';
import { profiles } from '../dummy/profiles';
import { shuffleArray } from '../utils/shuffle';

const ProfileCardList = () => {
  return (
    <section className="flex gap-5 px-20 mb-[110px]">
      {shuffleArray(profiles).map(profile => (
        <ProfileCard profile={profile} key={profile.title} />
      ))}
    </section>
  );
};

export default ProfileCardList;
