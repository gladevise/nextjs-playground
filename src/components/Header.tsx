import Link from 'next/link';
import style from './Header.module.css';

const Header = () => (
  <header className={style.header}>
    <nav className={style.nav}>
      <ul className={style.container}>
        <li className={style.item}>
          <Link href="/">Home</Link>
        </li>
        <li className={style.item}>
          <Link href="/ssg">ssg</Link>
        </li>
        <li className={style.item}>
          <Link href="/isr">isr</Link>
        </li>
        <li className={style.item}>
          <Link href="/ssr">ssr</Link>
        </li>
        <li className={style.item}>
          <Link href="/swr">swr</Link>
        </li>
        <li className={style.item}>
          <Link href="/dynamic-ssg">dynamic-ssg</Link>
        </li>
        <li className={style.item}>
          <Link href="/dynamic-isr">dynamic-isr</Link>
        </li>
        <li className={style.item}>
          <Link href="/dynamic-ssr">dynamic-ssr</Link>
        </li>
        <li className={style.item}>
          <Link href="/sound">sound</Link>
        </li>
        <li className={style.item}>
          <Link href="/next-image">next-image</Link>
        </li>
        <li className={style.item}>
          <Link href="/next-future-image">next-future-image</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
