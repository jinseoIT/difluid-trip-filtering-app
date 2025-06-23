import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProfileCardList from './ProfileCardList';
import { profiles } from '../dummy/profiles';

// shuffleArray를 모킹하여 예측 가능한 결과 생성
vi.mock('../utils/shuffle', () => ({
  shuffleArray: (array: unknown[]) => [...array].reverse(), // 단순히 뒤집기로 모킹
}));

describe('ProfileCardList', () => {
  it('모든 프로필 카드를 렌더링한다', () => {
    render(<ProfileCardList />);

    // 각 프로필의 제목이 화면에 표시되는지 확인
    profiles.forEach(profile => {
      expect(screen.getByText(profile.title)).toBeInTheDocument();
    });
  });

  it('프로필 카드의 개수가 올바르다', () => {
    render(<ProfileCardList />);

    // ProfileCard 컴포넌트들이 렌더링되었는지 확인
    const profileCards = screen.getAllByRole('article'); // ProfileCard가 article 태그를 사용한다고 가정
    expect(profileCards).toHaveLength(profiles.length);
  });

  it('프로필 카드에 올바른 이미지가 표시된다', () => {
    render(<ProfileCardList />);

    // 각 프로필의 이미지가 올바른 src를 가지고 있는지 확인
    profiles.forEach(profile => {
      const image = screen.getByAltText(profile.title); // alt 텍스트로 이미지 찾기
      expect(image).toHaveAttribute('src', profile.url);
    });
  });

  it('프로필 카드에 올바른 설명이 표시된다', () => {
    render(<ProfileCardList />);

    // 각 프로필의 설명이 화면에 표시되는지 확인
    profiles.forEach(profile => {
      expect(screen.getByText(profile.description)).toBeInTheDocument();
    });
  });
});
