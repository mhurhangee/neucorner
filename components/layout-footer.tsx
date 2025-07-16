import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="container">
      <p className="font-light text-xs md:text-sm">by michael hurhangee</p>
      <p className="text-xs md:text-sm">
        <Link className="mr-4 lowercase" href="mailto:m.hurhangee@me.com">
          email
        </Link>
        <Link className="lowercase" href="https://github.com/mhurhangee">
          github
        </Link>
      </p>
    </footer>
  );
};
