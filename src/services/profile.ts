export const getFullBleed = async () => {
  const randomId = Math.floor(Math.random() * 1000); // 0-999 사이 랜덤 ID
  const imageUrl = `https://picsum.photos/id/${randomId}/1920/1080`;

  return {
    urls: {
      full: imageUrl,
    },
  };
};
