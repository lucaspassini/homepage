import Image from 'next/legacy/image';
import Link from 'next/link';
import { hero } from '../data/config';
import { FaLocationArrow } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function Hero(): JSX.Element {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <div className="mb-12">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="relative w-16 h-16 rounded">
          <Image
            src="/static/profile.png"
            layout="fixed"
            height={90}
            width={90}
            objectFit="contain"
            alt="Lucas Passini"
          />
        </div>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="flex items-center justify-center transition-all rounded-lg bg-zinc-100 w-9 h-9 dark:bg-neutral-700 hover:ring-2 ring-gray-300"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-5 h-5 text-gray-800 dark:text-gray-200"
            >
              {resolvedTheme === 'dark' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
      </div>
      <span className="text-xs inline-block py-1 px-2.5 leading-none text-center border border-zinc-400 border-opacity-5 whitespace-nowrap align-baseline font-bold bg-zinc-100 hover:bg-zinc-200 dark:hover:bg-neutral-700 dark:bg-neutral-800 text-gray-700  dark:text-white rounded-xl mt-16 ">
        <Link
          href="https://www.google.com.br/maps/place/Itatiba,+State+of+S%C3%A3o+Paulo/@-22.9972518,-46.8994737,12z/data=!4m5!3m4!1s0x94cf2a851d59a719:0x1993f2010972ec6d!8m2!3d-23.0116344!4d-46.8375899"
          className="flex items-center h-5 gap-2 dark:text-greyText"
        >
          <FaLocationArrow />
          Itatiba, BR •
        </Link>
      </span>
      <h1 className="mt-4 mb-4">{hero.title}</h1>
      <p className="text-lg">{hero.desc}</p>
    </div>
  );
}
