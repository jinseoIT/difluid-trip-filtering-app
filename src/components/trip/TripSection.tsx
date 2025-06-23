import { useState } from 'react';
import Title from '../Title';
import TripList from './TripList';
import TripAreaFilter from './TripAreaFilter';
import TripYearFilter from './TripYearFilter';
import { tripAreas, trips, tripYears } from '../../dummy/trip';
import TripEmpty from './TripEmpty';

const DEFAULT_SELECTED_AREA = 0;
const DEFAULT_SELECTED_YEAR = 3;

const TripSection = () => {
  const [selectedArea, setSelectedArea] = useState<number>(
    DEFAULT_SELECTED_AREA
  );
  const [selectedYear, setSelectedYear] = useState<number>(
    DEFAULT_SELECTED_YEAR
  );

  const filteredTrips = trips.filter(trip => {
    if (tripYears[selectedYear] < trip.year) return false;
    if (!selectedArea) return true;
    return trip.area === tripAreas[selectedArea];
  });

  return (
    <section className="pl-20 mt-[120px] pb-20">
      <Title content="Duis tincidunt ut ligula vitae mollis." />
      <div className="flex gap-5 mb-17 mt-12">
        <TripAreaFilter
          selectedArea={selectedArea}
          setSelectedArea={setSelectedArea}
        />
        <TripYearFilter
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
      </div>
      {!filteredTrips.length ? (
        <TripEmpty />
      ) : (
        <div className="overflow-x-auto">
          <div className="flex gap-10 min-w-max">
            <TripList filteredTrips={filteredTrips} />
          </div>
        </div>
      )}
    </section>
  );
};

export default TripSection;
