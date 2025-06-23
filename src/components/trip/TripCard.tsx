import React from 'react';
import type { Trip } from '@/types/trip';

type Props = {
  trip: Trip;
};

const TripCard = ({ trip }: Props) => {
  return (
    <article className="px-5 pt-[15px] pb-[23px] bg-gray-4 rounded-[10px] w-[400px]">
      <div className="flex justify-between items-center">
        <h2 className="font-mont-16b ml-[3px] mb-[9px]">{trip.title}</h2>
        <span className="font-mont-16m">{trip.year}</span>
      </div>
      <img
        src={trip.url}
        alt={trip.title}
        className="w-[360px] h-[228px] object-cover rounded-[5px] mb-[15px]"
      />
      <p className="font-mont-14m line-clamp-6 ml-[3px]">{trip.description}</p>
    </article>
  );
};

export default TripCard;
