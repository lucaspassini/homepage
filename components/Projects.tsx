import Image from 'next/legacy/image';
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
      <div className="flex flex-col gap-8 mt-4 md:flex-row">
        {projects.project.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="p-6 pt-4 mb-4 transition-all border rounded-lg bg-lightCard hover:-translate-y-1 hover:scale-10 duration-30 border-opacity-20 border-greyBorder dark:bg-neutral-800 hover:drop-shadow-xl dark:hover:shadow-neutral-800 dark:shadow-lg"
            >
              <h3 className="mb-1 decoration-zinc-500">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
              <div className="flex flex-wrap pt-6 pb-1 -m-4">
                {item.link && (
                  <a
                    href={item.link}
                    className="flex items-start px-3 py-1"
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
                    className="flex px-3 py-1"
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
