import { tripYears } from '../../dummy/trip';

const isSelected = 'bg-black text-white';
const normal = 'bg-gray-3 text-white';

type Props = {
  selectedYear: number;
  setSelectedYear: (year: number) => void;
};

const TripYearFilter = ({ selectedYear, setSelectedYear }: Props) => {
  return (
    <div className="flex items-center px-[5px] py-[5px] rounded-full border border-black/50 w-fit">
      {tripYears.map((year, index) => (
        <div key={year} className="flex items-center">
          {/* 원형 버튼 */}
          <button
            onClick={() => setSelectedYear(index)}
            className={`w-10 h-10 rounded-full z-10 ${index <= selectedYear ? isSelected : normal} font-exo-14m`}
          >
            {year}
          </button>

          {/* 버튼 사이 선 */}
          {index !== tripYears.length - 1 && (
            <div
              className={`h-[10px] w-20 ${
                index < selectedYear ? 'bg-black' : 'bg-gray-3'
              } -ml-1 -mr-1 z-0`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default TripYearFilter;
