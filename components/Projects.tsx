import Image from 'next/legacy/image';
import HomepageIcon from '../public/static/homepage.png';
import MealsIcon from '../public/static/meals.png';
import TrackerIcon from '../public/static/tracker.png';
import { projects } from '../data/config';

export default function Projects() {
  return (
    <div>
      <div className="w-full overflow-x-hidden">
        <h2 className="relative mx-0 mb-4 text-left border-b-4 dark:border-neutral-700 max-w-max md:w-max">
          {projects.title}
        </h2>
      </div>
      <p className="text-lg">{projects.desc}</p>
      <div className="flex flex-col gap-4 pt-4 mt-4 md:flex-row">
        <div className="p-6 pt-4 mb-4 transition-all border rounded-3xl bg-lightCard border-opacity-20 border-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 hover:drop-shadow-xl dark:hover:shadow-neutral-800 dark:shadow-lg">
          <Image
            src={HomepageIcon}
            width={40}
            height={40}
            alt="Homepage Card Icon"
          />
          <h3 className="mb-1 decoration-zinc-500">homepage</h3>
          <p className="text-sm">lucaspassini/homepage</p>
          <div className="flex flex-wrap pt-8 pb-2 -m-4">
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
                alt="Link icon"
              />
            </a>
          </div>
        </div>

        <div className="p-6 pt-4 mb-4 transition-all border rounded-3xl bg-lightCard border-opacity-20 border-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 hover:drop-shadow-xl dark:hover:shadow-neutral-800 dark:shadow-lg">
          <Image src={MealsIcon} width={40} height={40} alt="Meals Card Icon" />
          <h3 className="mb-1 decoration-zinc-500">react-meals</h3>
          <p className="text-sm">lucaspassini/react-meals</p>
          <div className="flex flex-wrap pt-8 pb-2 -m-4">
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
                alt="Link icon"
              />
            </a>
          </div>
        </div>

        <div className="p-6 pt-4 mb-4 transition-all border rounded-3xl bg-lightCard border-opacity-20 border-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 hover:drop-shadow-xl dark:hover:shadow-neutral-800 dark:shadow-lg">
          <Image
            src={TrackerIcon}
            width={40}
            height={40}
            alt="Tracker Card Icon"
          />
          <h3 className="mb-1 decoration-zinc-500">react-tracker</h3>
          <p className="text-sm">lucaspassini/react-tracker</p>
          <div className="flex flex-wrap pt-8 pb-2 -m-4">
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
                alt="Link icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
