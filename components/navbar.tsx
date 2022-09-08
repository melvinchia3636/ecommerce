/* eslint-disable react/jsx-one-expression-per-line */
import { Icon } from '@iconify/react';
import React from 'react';

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 gap-8 border-b-2 border-zinc-100">
      <div className="flex items-ceneter gap-8">
        <h1 className="flex items-center gap-2 text-xl text-primary">
          <Icon
            icon="fluent-emoji-high-contrast:running-shoe"
            className="text-2xl"
          />
          <span className="font-semibold">
            E<span className="text-zinc-400">Shoes</span>.
          </span>
        </h1>
        <div className="w-[28rem] shadow-sm shadow-zinc-100 rounded-full bg-zinc-100 flex items-center py-3 px-4 gap-2">
          <Icon
            icon="uil:search"
            className="text-xl text-zinc-500 stroke-1 stroke-zinc-500"
          />
          <input
            type="text"
            className="w-full bg-transparent placeholder-zinc-400 focus:outline-none"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="w-12 h-12 rounded-full flex items-center justify-center bg-zinc-100"
        >
          <Icon icon="fa6-solid:bag-shopping" className="text-xl" />
        </button>
        <button
          type="button"
          className="w-12 h-12 rounded-full flex items-center justify-center bg-zinc-100"
        >
          <Icon icon="uiw:heart-on" className="text-xl" />
        </button>
        <button
          type="button"
          className="w-12 h-12 rounded-full flex items-center justify-center bg-zinc-100"
        >
          <Icon icon="bxs:bell" className="text-[1.3rem]" />
        </button>
        <div className="h-10 border-r-2 mx-2 border-zinc-100 w-0.5" />
        <img
          alt=""
          className="w-11 h-11 rounded-full"
          src="https://scontent.fmkz1-1.fna.fbcdn.net/v/t39.30808-6/301129154_920646765578672_1667104169217103748_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jV-LqINYFdcAX_64CpI&_nc_ht=scontent.fmkz1-1.fna&oh=00_AT9wvsBUoRR1YIzzNdGba3FwZmm2OERluOVspAv8CgIvYw&oe=631CB873"
        />
      </div>
    </nav>
  );
}

export default Navbar;
