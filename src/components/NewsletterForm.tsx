import IcPaperPlane from '../assets/paper-plane.svg?react';
import { useMemo, useState } from 'react';

type FormStatus = 'default' | 'valid' | 'invalid';

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) && email.length > 0;
};

const NewsletterForm = () => {
  const [email, setEmail] = useState<string>('');

  const formStatus: FormStatus = useMemo(() => {
    if (email.length === 0) return 'default';
    return validateEmail(email) ? 'valid' : 'invalid';
  }, [email]);

  const borderColor = useMemo(() => {
    if (formStatus === 'default') return 'border-white';
    if (formStatus === 'valid') return 'border-green-100';
    return 'border-red-100';
  }, [formStatus]);

  return (
    <section>
      <p className="font-exo-16b text-center">Subscribe to our newsletter</p>
      <form
        onSubmit={e => {
          e.preventDefault();
          // your submit logic here
        }}
        className={`flex w-[500px] h-[50px] flex-grow-0 mt-4 px-2.5 py-1 pl-1 rounded-lg backdrop-blur-md border ${borderColor} bg-white/10`}
      >
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 bg-transparent outline-none text-white placeholder:text-white/60 px-2 font-exo-16m"
        />
        <button type="submit" className=" hover:text-blue-300 transition">
          <IcPaperPlane />
        </button>
      </form>
      {formStatus === 'invalid' && (
        <p className="font-exo-16m mt-[9px] text-red-100 pl-4">
          {'Please enter a valid email!'}
        </p>
      )}
    </section>
  );
};

export default NewsletterForm;
