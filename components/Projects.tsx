import Image from 'next/legacy/image';
import { projects } from '../data/config';

export default function Projects(): JSX.Element {
  return (
    <div>
      <div className="w-full overflow-x-hidden">
        <h2 className="relative mx-0 mb-4 text-left border-b-4 dark:border-neutral-700 max-w-max md:w-max">
          {projects.title}
        </h2>
      </div>
      <p className="text-lg">{projects.desc}</p>
      <div className="flex flex-col gap-8 mt-8 md:flex-row">
        {projects.projects.map((item, index) => {
          return (
            <div
              key={index}
              className="p-6 pt-4 mb-4 transition-all border shadow-xl rounded-xl hover:shadow-2xl hover:-translate-y-1 hover:scale-10 hover:bg-zinc-200 hover:dark:bg-neutral-700 duration-30 bg-zinc-100 dark:bg-neutral-800 border-opacity-10 dark:shadow-xl dark:shadow-neutral-800 border-greyText hover:dark:shadow-neutral-700"
            >
              <h3 className="mb-1 decoration-zinc-500">{item.title}</h3>
              <p>{item.description}</p>
              <div className="flex flex-wrap pt-6 pb-1 -m-4">
                {item.link && (
                  <a
                    href={item.link}
                    className="flex px-3 py-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/static/icons/link.svg"
                      width={24}
                      height={24}
                      alt="Link icon"
                    />
                  </a>
                )}
                {item.github && (
                  <a
                    href={`https://github.com/${item.github}`}
                    className="flex py-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      className="text-white stroke-current"
                      src="/static/icons/github.svg"
                      width={24}
                      height={24}
                      alt="Link icon"
                    />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
