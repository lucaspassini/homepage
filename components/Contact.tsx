import Image from 'next/image';
import { contact } from '../data/config';

export default function Stack(): JSX.Element {
  return (
    <div>
      <div className="w-full overflow-x-hidden">
        <h2 className="relative mx-0 mb-8 text-left landingSectionTitle max-w-max md:w-max "></h2>
      </div>
      <p className="text-defaultText">
        Send me an email:{' '}
        <a
          className="text-black hover:underline dark:text-white"
          href={`mailto:${contact.email}`}
        >
          {contact.email}
        </a>
      </p>
      <div className="flex mt-5 space-x-5">
        {contact.github && (
          <a
            href={`https://github.com/${contact.github}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/static/icons/github.svg"
              width={25}
              height={25}
              alt="Github icon"
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
              width={25}
              height={25}
              alt="Twitter icon"
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
              width={25}
              height={25}
              alt="LinkedIn icon"
            />
          </a>
        )}
      </div>
    </div>
  );
}
