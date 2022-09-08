/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
import { Icon } from '@iconify/react';
import React from 'react';
import data from '../assets/data.json';

const categories = {
  Shoes: '👟',
  'Sport Specific Clothing': '🩳',
  'Handbags & Shoulder Bags': '👜',
  Men: '👨🏻',
  Women: '👩🏻‍🦰',
  Boys: '👦🏻',
  Girls: '👧🏻',
  Nursery: '👶🏻',
  Sports: '⚾️',
  Wellness: '🏃🏻',
  "Supporters' Gear": '⛑',
  'Shoe Care Products & Accessories': '⚙️',
  'Motorbike Accessories & Parts': '🛵',
  'Novelty & Special Use': '🆕',
};

export interface Product {
  url: string;
  title: string;
  asin: string;
  price: string;
  brand: string;
  product_details: string;
  breadcrumbs: string;
  images_list: string[];
  features: Feature[];
}

export interface Feature {
  'Outer Material'?: string;
  'Inner Material'?: string;
  Sole?: string;
  Closure?: string;
  'Heel Height'?: string;
  'Heel Type'?: string;
  'Shoe Width'?: string;
}

function App() {
  return (
    <div className="flex flex-col flex-1 overflow-y-hidden">
      <div className="no-scrollbar flex-shrink-0 flex p-4 border-b-2 border-zinc-100 gap-3 text-sm overflow-x-scroll overflow-y-hidden">
        {Object.entries(categories).map(([category, emoji], index) => (
          <button
            type="button"
            className={`px-4 py-2 flex items-center rounded-full whitespace-nowrap shadow-sm ${
              !index
                ? 'bg-primary text-white shadow-primary'
                : 'bg-zinc-100 shadow-zinc-100'
            }`}
          >
            {emoji} {category}
            {!index && (
              <div className="ml-2 stroke-1 stroke-zinc-100">
                <Icon icon="uil:multiply" className="text-xs -mb-[1px]" />
              </div>
            )}
          </button>
        ))}
      </div>
      <div className="flex flex-1 overflow-y-hidden">
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
                  product.brand
                    .replace(/^Visit the /, '')
                    .replace(/Store$/, ''),
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
        <div className="w-full h-full overflow-y-scroll grid grid-cols-5 gap-12 gap-y-20 p-20">
          {(data as Product[])
            .filter((e) => e.brand.includes('adidas'))
            .map((e) => (
              <div className="gap-6 flex flex-col">
                <div className="flex items-center w-full h-auto aspect-square overflow-hidden">
                  <img src={e.images_list[0]} alt="" />
                </div>
                <div>
                  <p className="text-primary">
                    {e.brand.replace(/^Visit the /, '').replace(/Store$/, '')}
                  </p>
                  <h4 className="font-medium text-lg title">{e.title}</h4>
                  <p className="text-xl font-medium mt-4">
                    {e.price?.split('-')[0].trim().split('.')[0]}
                    <span className="text-sm text-zinc-400">
                      .{e.price?.split('-')[0].trim().split('.')[1]}
                    </span>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
