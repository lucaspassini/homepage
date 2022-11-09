import ListItem from './ListItem';
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
        <h2 className="relative mx-0 mb-6 text-left border-b-4 dark:border-neutral-700 max-w-max md:w-max ">
          {technologies.title}
        </h2>
      </div>
      <div className="flex flex-wrap w-full mb-20 -m-2">
        <ListItem>
          <SiJavaScript />
          <p>JavaScript</p>
        </ListItem>
        <ListItem>
          <SiTypescript />
          <p>TypeScript</p>
        </ListItem>
        <ListItem>
          <SiReactJS />
          <p>ReactJS</p>
        </ListItem>
        <ListItem>
          <SiNextJS />
          <p>NextJS</p>
        </ListItem>
        <ListItem>
          <SiTailwindCSS />
          <p>TailwindCSS</p>
        </ListItem>
        <ListItem>
          <SiGit />
          <p>Git</p>
        </ListItem>
      </div>
    </div>
  );
}
