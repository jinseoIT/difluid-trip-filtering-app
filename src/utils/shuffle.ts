/**
 * Fisher-Yates 셔플 알고리즘을 사용하여 배열을 무작위로 섞습니다.
 *
 * @param originalArray - 섞을 원본 배열
 * @returns 섞인 새로운 배열
 */
export const shuffleArray = <T>(originalArray: T[]): T[] => {
  // 원본 배열을 복사하여 새로운 배열 생성
  const shuffledArray = [...originalArray];
  const arrayLength = shuffledArray.length;

  // 배열의 마지막 요소부터 첫 번째 요소까지 역순으로 순회
  for (let currentIndex = arrayLength - 1; currentIndex > 0; currentIndex--) {
    // 0부터 현재 인덱스까지의 무작위 인덱스 생성
    const randomIndex = Math.floor(Math.random() * (currentIndex + 1));

    // 현재 요소와 무작위 선택된 요소를 교환
    const temp = shuffledArray[currentIndex];
    shuffledArray[currentIndex] = shuffledArray[randomIndex];
    shuffledArray[randomIndex] = temp;
  }

  return shuffledArray;
};
