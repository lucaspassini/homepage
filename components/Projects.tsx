import Image from 'next/legacy/image';
import HomepageIcon from '../public/static/homepage.png';
import MealsIcon from '../public/static/meals.png';
import TrackerIcon from '../public/static/tracker.png';
import { projects } from '../data/config';

export default function Projects() {
  return (
    <div>
      <div className="w-full overflow-x-hidden">
        <h2 className="relative mx-0 text-left border-b-4 dark:border-neutral-700 max-w-max md:w-max">
          {projects.title}
        </h2>
      </div>
      <div className="flex flex-col gap-3 pt-4 mt-4 md:flex-row">
        <div className="p-6 pt-4 mb-6 transition-all border rounded-2xl bg-lightCard border-opacity-20 border-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 hover:drop-shadow-xl dark:hover:shadow-neutral-800 dark:shadow-lg">
          <Image
            src={HomepageIcon}
            width={40}
            height={40}
            alt="Homepage Card Icon"
          />
          <h3 className=" decoration-zinc-500">Homepage</h3>
          <p className="text-sm">lucaspassini/homepage</p>
          <div className="flex flex-wrap pt-8 pb-2 mr-0 -m-4 space-x-2">
            <a
              href={`https://github.com/lucaspassini/homepage`}
              className="flex px-3 py-1"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="text-white stroke-current"
                src="/static/icons/link.svg"
                width={24}
                height={24}
                alt="Link Icon"
              />
            </a>
            <span className="inline-block px-2 py-1 mt-2 mb-2 text-sm font-semibold leading-none text-center align-baseline border rounded-lg whitespace-nowrap border-opacity-20 dark:border-neutral-700 dark:bg-neutral-800 border-neutral-700 ">
              ReactJS
            </span>
            <span className="inline-block px-2 py-1 mt-2 mb-2 text-sm font-semibold leading-none text-center align-baseline border rounded-lg whitespace-nowrap border-opacity-20 dark:border-neutral-700 dark:bg-neutral-800 border-neutral-700 ">
              NextJS
            </span>
          </div>
        </div>

        <div className="p-6 pt-4 mb-6 transition-all border rounded-2xl bg-lightCard border-opacity-20 border-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 hover:drop-shadow-xl dark:hover:shadow-neutral-800 dark:shadow-lg">
          <Image src={MealsIcon} width={40} height={40} alt="Meals Card Icon" />
          <h3 className="decoration-zinc-500">Meals</h3>
          <p className="text-sm">lucaspassini/react-meals</p>
          <div className="flex flex-row pt-8 pb-2 mr-0 -m-4 space-x-2">
            <a
              href={`https://github.com/lucaspassini/react-meals`}
              className="flex px-3 py-1"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="text-white stroke-current"
                src="/static/icons/link.svg"
                width={24}
                height={24}
                alt="Link Icon"
              />
            </a>
            <span className="inline-block px-2 py-1 mt-2 mb-2 text-sm font-semibold leading-none text-center align-baseline border rounded-lg whitespace-nowrap border-opacity-20 dark:border-neutral-700 dark:bg-neutral-800 border-neutral-700 ">
              ReactJS
            </span>
            <span className="inline-block px-2 py-1 mt-2 mb-2 text-sm font-semibold leading-none text-center align-baseline border rounded-lg whitespace-nowrap border-opacity-20 dark:border-neutral-700 dark:bg-neutral-800 border-neutral-700 ">
              Vercel
            </span>
          </div>
        </div>

        <div className="p-6 pt-4 mb-6 transition-all border rounded-2xl bg-lightCard border-opacity-20 border-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 hover:drop-shadow-xl dark:hover:shadow-neutral-800 dark:shadow-lg">
          <Image
            src={TrackerIcon}
            width={40}
            height={40}
            alt="Tracker Card Icon"
          />
          <h3 className=" decoration-zinc-500">Tracker</h3>
          <p className="text-sm">lucaspassini/react-tracker</p>
          <div className="flex flex-wrap pt-8 pb-2 mr-0 -m-4 space-x-2">
            <a
              href={`https://github.com/lucaspassini/react-tracker`}
              className="flex px-3 py-1"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="text-white stroke-current"
                src="/static/icons/link.svg"
                width={24}
                height={24}
                alt="Link Icon"
              />
            </a>
            <span className="inline-block px-2 py-1 mt-2 mb-2 text-sm font-semibold leading-none text-center align-baseline border rounded-lg whitespace-nowrap border-opacity-20 dark:border-neutral-700 dark:bg-neutral-800 border-neutral-700 ">
              ReactJS
            </span>
            <span className="inline-block px-2 py-1 mt-2 mb-2 text-sm font-semibold leading-none text-center align-baseline border rounded-lg whitespace-nowrap border-opacity-20 dark:border-neutral-700 dark:bg-neutral-800 border-neutral-700 ">
              Vercel
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
