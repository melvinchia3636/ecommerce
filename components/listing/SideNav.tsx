/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { Icon } from '@iconify/react';
import React from 'react';
import data from '../../assets/data.json';
import { Product } from './types';

export default function SideNav() {
  return (
    <div className="h-full overflow-y-scroll w-72 flex-shrink-0 border-r-2 p-6 pr-5 px-7 border-zinc-100">
      <div className="flex items-center gap-2">
        <h2 className="text-xl">Category</h2>
        <Icon
          icon="uil:angle-down"
          className="text-2xl text-zinc-300 mt-[4px]"
        />
      </div>
      <div className="mt-4">
        {Array.from(
          new Set(
            (data as Product[])
              .filter((e) => e.breadcrumbs.split('/')[0].trim() === 'Shoes')
              .map((product) => product.breadcrumbs.split('/')[3]?.trim()),
          ),
        )
          .filter((e) => e)
          .slice(0, 8)
          .map((e) => (
            <div className="flex items-center justify-between gap-2 mt-3">
              {e}
              <Icon
                icon="uil:angle-right"
                className="text-2xl text-zinc-300 mt-[4px]"
              />
            </div>
          ))}
        <button
          type="button"
          className="text-primary flex items-center gap-1 mt-3 stroke-[0.5px] stroke-primary"
        >
          Load more
          <Icon icon="uil:plus" className="text-sm mt-[2px]" />
        </button>
      </div>
      <div className="flex items-center gap-2 mt-6">
        <h2 className="text-xl">Price</h2>
        <Icon
          icon="uil:angle-down"
          className="text-2xl text-zinc-300 mt-[4px]"
        />
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-2 mt-3">
          <input
            type="checkbox"
            checked
            className="checkbox checkbox-xs rounded-[4px] checkbox-primary border-zinc-400"
          />
          Low to High
        </div>
        <div className="flex items-center gap-2 mt-3">
          <input
            type="checkbox"
            className="checkbox checkbox-xs rounded-[4px] checkbox-primary border bg-zinc-50 border-zinc-300"
          />
          High to Low
        </div>
      </div>
      <div className="flex items-center gap-2 mt-6">
        <h2 className="text-xl">Brand</h2>
        <Icon
          icon="uil:angle-down"
          className="text-2xl text-zinc-300 mt-[4px]"
        />
      </div>
      <div className="mt-4">
        {Array.from(
          new Set(
            (data as Product[]).map((product) =>
              product.brand.replace(/^Visit the /, '').replace(/Store$/, ''),
            ),
          ),
        )
          .filter((e) => e)
          .sort()
          .slice(0, 5)
          .map((e) => (
            <div className="flex items-center gap-2 mt-3">
              <input
                type="checkbox"
                className="checkbox checkbox-xs rounded-[4px] checkbox-primary border bg-zinc-50 border-zinc-300"
              />
              {e}
            </div>
          ))}
        <button
          type="button"
          className="text-primary flex items-center gap-1 mt-3 stroke-[0.5px] stroke-primary"
        >
          Load more
          <Icon icon="uil:plus" className="text-sm mt-[2px]" />
        </button>
      </div>
    </div>
  );
}
