import { describe, it, expect } from 'vitest';
import { shuffleArray } from './shuffle';

describe('shuffleArray', () => {
  it('빈 배열을 섞으면 빈 배열을 반환한다', () => {
    const result = shuffleArray([]);
    expect(result).toEqual([]);
  });

  it('단일 요소 배열을 섞으면 동일한 배열을 반환한다', () => {
    const input = [1];
    const result = shuffleArray(input);
    expect(result).toEqual([1]);
  });

  it('배열을 섞으면 원본과 동일한 요소들을 포함한다', () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffleArray(input);

    // 원본 배열의 모든 요소가 결과에 포함되어 있는지 확인
    expect(result).toHaveLength(input.length);
    expect(result.sort()).toEqual(input.sort());
  });

  it('원본 배열을 변경하지 않는다', () => {
    const input = [1, 2, 3, 4, 5];
    const originalInput = [...input];

    shuffleArray(input);

    expect(input).toEqual(originalInput);
  });

  it('문자열 배열도 올바르게 섞는다', () => {
    const input = ['apple', 'banana', 'cherry'];
    const result = shuffleArray(input);

    expect(result).toHaveLength(input.length);
    expect(result.sort()).toEqual(input.sort());
  });

  it('객체 배열도 올바르게 섞는다', () => {
    const input = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ];
    const result = shuffleArray(input);

    expect(result).toHaveLength(input.length);
    // 객체의 id로 정렬하여 비교
    expect(result.sort((a, b) => a.id - b.id)).toEqual(
      input.sort((a, b) => a.id - b.id)
    );
  });
});
