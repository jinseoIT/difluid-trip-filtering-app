import TripCard from './TripCard';
import type { Trip } from '@/types/trip';

type Props = {
  filteredTrips: Trip[];
};

const TripList = ({ filteredTrips }: Props) => {
  return (
    <div className="overflow-x-auto">
      <section className="flex gap-10 pr-20 min-w-max">
        {filteredTrips.map(trip => (
          <TripCard trip={trip} key={trip.title} />
        ))}
      </section>
    </div>
  );
};

export default TripList;
