import Head from 'next/head';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import Contact from '../components/Contact';
import { meta } from '../data/config';

export default function Index() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta
          name="theme-color"
          content="#F5F5F5"
          media="(prefers-color-scheme: light)"
        />

        <meta
          name="theme-color"
          content="#1C1C1C"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <div className="w-full max-w-4xl p-6 m-auto lg:p-20">
        <Hero />
        <div className="p-0 space-y-10">
          <Projects />
          <Technologies />
          <Contact />
        </div>
      </div>
    </>
  );
}
