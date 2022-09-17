import Link from 'next/link';

const Header = () => (
  <header
    style={{
      display: 'flex',
      gap: '1rem',
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
    }}
  >
    <Link href="/">Home</Link>
    <Link href="/ssg">ssg</Link>
    <Link href="/isr">isr</Link>
    <Link href="/ssr">ssr</Link>
    <Link href="/swr">swr</Link>
    <Link href="/dynamic-ssg">dynamic-ssg</Link>
    <Link href="/dynamic-isr">dynamic-isr</Link>
    <Link href="/dynamic-ssr">dynamic-ssr</Link>
    <Link href="/sound">sound</Link>
    <Link href="/next-image">next-image</Link>
  </header>
);

export default Header;
