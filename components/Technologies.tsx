import { technologies } from '../data/config';
import {
  SiJavascript as SiJavaScript,
  SiGit,
  SiNextdotjs as SiNextJS,
  SiReact as SiReactJS,
  SiTailwindcss as SiTailwindCSS,
  SiTypescript
} from 'react-icons/si';

export default function Technologies(): JSX.Element {
  return (
    <div>
      <div className="w-full overflow-x-hidden">
        <h2 className="relative mx-0 mb-4 text-left border-b-4 dark:border-neutral-700 max-w-max md:w-max ">
          {technologies.title}
        </h2>
        <p className="mb-8 text-lg">{technologies.desc}</p>
      </div>
      <div className="flex flex-wrap w-full mb-24 -m-2">
        <span className="flex items-center px-3 py-1 mt-2 space-x-2 duration-30">
          <SiJavaScript />
          <p>JavaScript</p>
        </span>
        <span className="flex items-center px-3 py-1 mt-2 space-x-2 duration-30">
          <SiTypescript />
          <p>TypeScript</p>
        </span>
        <span className="flex items-center px-3 py-1 mt-2 space-x-2 duration-30">
          <SiReactJS />
          <p>ReactJS</p>
        </span>
        <span className="flex items-center px-3 py-1 mt-2 space-x-2 duration-30">
          <SiNextJS />
          <p>NextJS</p>
        </span>
        <span className="flex items-center px-3 py-1 mt-2 space-x-2 duration-30">
          <SiTailwindCSS />
          <p>TailwindCSS</p>
        </span>
        <span className="flex items-center px-3 py-1 mt-2 space-x-2 duration-30">
          <SiGit />
          <p>Git</p>
        </span>
      </div>
    </div>
  );
}
