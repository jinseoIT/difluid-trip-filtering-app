import { tripAreas } from '../../dummy/trip';
const isSelected = 'bg-black text-white';
const normal = 'bg-white text-black';

type Props = {
  selectedArea: number;
  setSelectedArea: (area: number) => void;
};

const TripAreaFilter = ({ selectedArea, setSelectedArea }: Props) => {
  return (
    <div className="p-[5px] flex gap-[5px] w-fit rounded-[25px] border border-black/50">
      {tripAreas.map((area, index) => (
        <button
          key={area}
          onClick={() => setSelectedArea(index)}
          className={`px-5 h-10 ${index === selectedArea ? isSelected : normal} font-exo-16m rounded-[25px]`}
        >
          {area}
        </button>
      ))}
    </div>
  );
};

export default TripAreaFilter;
