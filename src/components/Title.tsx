import React from 'react';

type Props = {
  content: string;
  className?: string;
};

const Title = ({ content, className }: Props) => {
  return <h2 className={`font-title ${className}`}>{content}</h2>;
};

export default Title;
