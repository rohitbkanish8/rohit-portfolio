import React from "react";
import Card from "../Card";

const projects = [
  {
    id: 1,
    title: 'Hulu Clone',
    name: 'hulu',
    link: 'https://hulu-rohit-clone.vercel.app',
    image: '/images/hulu.png'
  },
  {
    id: 2,
    title: 'Wethio Wallet',
    name: 'wallet-wethio',
    link: 'https://wallet.wethio.io',
    image: '/images/wethio.png'
  },
  {
    id: 3,
    title: 'Soundmint',
    name: 'soundmint',
    link: 'https://mainstaging.soundmint.xyz',
    image: '/images/soundmint.png'
  },
  {
    id: 4,
    title: 'Drum Machine',
    name: 'drum-machine',
    link: 'https://drum-machine-ruddy-kappa.vercel.app',
    image: '/images/drummachine.png'
  },
  {
    id: 5,
    title: 'Quotes',
    name: 'quotes',
    link: 'https://quotes-jet-one.vercel.app',
    image: '/images/quotes.png'
  },
  {
    id: 6,
    title: 'Fractional Art',
    name: 'fractionalart',
    link: 'https://fractionalart-green.vercel.app ',
    image: '/images/fractionalart.png'
  },
]

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="min-h-screen w-full flex flex-col justify-center items-start px-4 py-16 md:px-8 2xl:px-16"
    >
      <h1 className="bg-gradient-to-r from-green-400 to-lime-800 bg-clip-text md:text-6xl text-5xl font-extrabold uppercase tracking-widest text-transparent">
        Portfolio
      </h1>
      <div className="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 pt-8 pb-2 text-lg w-full place-items-center">
        {projects.map(item => <Card key={item.id} item={item} />)}
      </div>
    </section>
  );
};

export default Portfolio;
