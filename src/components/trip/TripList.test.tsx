import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TripList from './TripList';
import { trips } from '../../dummy/trip';

describe('TripList', () => {
  it('필터 적용 시 올바른 여행 카드가 렌더링된다', () => {
    render(<TripList filteredTrips={trips.filter(t => t.area === 'Asia')} />);
    expect(screen.getAllByRole('article').length).toBeGreaterThan(0);
  });

  it('빈 배열일 때는 아무것도 렌더링하지 않는다', () => {
    render(<TripList filteredTrips={[]} />);
    expect(screen.queryByRole('article')).not.toBeInTheDocument();
  });
});
