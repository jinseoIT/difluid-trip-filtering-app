import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import NewsletterForm from './NewsletterForm';

// SVG 파일 모킹
vi.mock('../assets/paper-plane.svg?react', () => ({
  default: () => <div data-testid="paper-plane-icon">Paper Plane Icon</div>,
}));

describe('NewsletterForm', () => {
  it('이메일 입력 필드가 렌더링된다', () => {
    render(<NewsletterForm />);
    const input = screen.getByPlaceholderText('Enter your email');
    expect(input).toBeInTheDocument();
  });

  it('잘못된 이메일 입력 시 에러 메시지가 표시된다', () => {
    render(<NewsletterForm />);
    const input = screen.getByPlaceholderText('Enter your email');
    fireEvent.change(input, { target: { value: 'invalid-email' } });
    expect(screen.getByText('Please enter a valid email!')).toBeInTheDocument();
  });

  it('올바른 이메일 입력 시 에러 메시지가 사라진다', () => {
    render(<NewsletterForm />);
    const input = screen.getByPlaceholderText('Enter your email');
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    expect(
      screen.queryByText('Please enter a valid email!')
    ).not.toBeInTheDocument();
  });
});
