import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import FullBleed from './FullBleed';

// SVG 파일 모킹
vi.mock('../assets/paper-plane.svg?react', () => ({
  default: () => <div data-testid="paper-plane-icon">Paper Plane Icon</div>,
}));

// Picsum Photos API 모킹
vi.mock('../services/profile', () => ({
  getFullBleed: vi.fn(() =>
    Promise.resolve({
      urls: {
        full: 'https://picsum.photos/id/123/1920/1080',
      },
    })
  ),
}));

describe('FullBleed', () => {
  it('컴포넌트가 렌더링된다', () => {
    render(<FullBleed />);
    expect(
      screen.getByText('Sed ut perspiciatis unde omnis')
    ).toBeInTheDocument();
  });

  it('뉴스레터 폼이 포함된다', () => {
    render(<FullBleed />);
    expect(screen.getByText('Subscribe to our newsletter')).toBeInTheDocument();
  });
});
