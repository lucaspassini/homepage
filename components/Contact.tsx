import Image from 'next/legacy/image';
import { contact } from '../data/config';

export default function Stack() {
  return (
    <div>
      <div className="w-full overflow-x-hidden">
        <h2 className="relative mx-0 mb-4 text-left landingSectionTitle max-w-max md:w-max "></h2>
      </div>
      <div className="flex mt-5 space-x-4">
        {contact.email && (
          <a
            className="text-black hover:underline dark:text-white"
            href={`mailto:${contact.email}`}
          >
            <Image
              src="/static/icons/email.svg"
              width={30}
              height={30}
              alt="LinkedIn icon"
            />
          </a>
        )}
        {contact.github && (
          <a
            href={`https://github.com/${contact.github}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/static/icons/github.svg"
              width={30}
              height={30}
              alt="Github icon"
            />
          </a>
        )}
        {contact.linkedin && (
          <a
            href={`https://linkedin.com/in/${contact.linkedin}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/static/icons/linkedin.svg"
              width={30}
              height={30}
              alt="LinkedIn icon"
            />
          </a>
        )}
        {contact.twitter && (
          <a
            href={`https://twitter.com/${contact.twitter}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/static/icons/twitter.svg"
              width={30}
              height={30}
              alt="Twitter icon"
            />
          </a>
        )}
      </div>
    </div>
  );
}
