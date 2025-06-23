import React from 'react';
import type { Profile } from '../types/profile';

type Props = {
  profile: Profile;
};

const ProfileCard = ({ profile }: Props) => {
  return (
    <article>
      <div className="w-[108px] h-[108px] rounded-full overflow-hidden mb-10">
        <img src={profile.url} alt={profile.title}></img>
      </div>
      <p className="font-body-h4 text-black mb-6">{profile.title}</p>
      <p className="font-body-p text-black mb-6">{profile.description}</p>
      <span className="text-blue-100 font-exo-18b">LEARN MORE</span>
    </article>
  );
};

export default ProfileCard;
