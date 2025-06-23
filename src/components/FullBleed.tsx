import { useEffect, useState } from 'react';
import { getFullBleed } from '../services/profile';
import NewsletterForm from './NewsletterForm';
import { STORAGE_KEYS } from '../constants/storage';

const FullBleed = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(() => {
    return sessionStorage.getItem(STORAGE_KEYS.FULL_BLEED_IMAGE_URL);
  });

  useEffect(() => {
    if (imageUrl) return;

    const savedImageUrl = sessionStorage.getItem(
      STORAGE_KEYS.FULL_BLEED_IMAGE_URL
    );
    if (savedImageUrl) {
      setImageUrl(savedImageUrl);
      return;
    }
    getFullBleed()
      .then(data => {
        const newImageUrl = data.urls.full;
        sessionStorage.setItem(STORAGE_KEYS.FULL_BLEED_IMAGE_URL, newImageUrl);
        setImageUrl(newImageUrl);
      })
      .catch(error => {
        console.error('Failed to load image:', error);
      });
  }, []);

  return (
    <section className={`w-full h-[740px] relative`}>
      {/* 동적 이미지 */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt="여행 배경 이미지"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}

      {/* 콘텐츠는 위에 */}
      <div className="relative z-10 text-white pt-[152px] flex flex-col px-20 items-center">
        <h4 className="font-body-h4 mb-[23px]">
          Sed ut perspiciatis unde omnis
        </h4>
        <p className="font-body-p text-white/80 text-center">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary.
        </p>
        <div className="w-full h-[1px] bg-white/50 my-8" />
        <p className="font-body-p-sm text-white/60 mb-[95px]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore.
        </p>
        <NewsletterForm />
      </div>

      {/* 오버레이 */}
      <div className="absolute inset-0 bg-black/50 z-[5]" />
    </section>
  );
};

export default FullBleed;
