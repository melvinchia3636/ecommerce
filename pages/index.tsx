/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
import { Icon } from '@iconify/react';
import React, { useEffect, useRef, useState } from 'react';
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
  const productListingContainer = useRef<HTMLDivElement>(null);

  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(25);

  const [selectedCategory, setSelectedCategory] = useState(
    Object.keys(categories)[0],
  );

  const [products, setProducts] = useState<Product[]>(
    (data as Product[]).filter(
      (e) => e.breadcrumbs.split('/')[0].trim() === selectedCategory,
    ),
  );
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>(
    products.slice(0, perPage),
  );

  useEffect(() => {
    setDisplayedProducts(
      products.slice(page * perPage, page * perPage + perPage),
    );

    if (productListingContainer.current) {
      productListingContainer.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [page, perPage, products]);

  useEffect(() => {
    if (selectedCategory) {
      setProducts(
        (data as Product[]).filter(
          (e) => e.breadcrumbs.split('/')[0].trim() === selectedCategory,
        ),
      );
    } else {
      setProducts(data as Product[]);
    }
    setPage(0);
  }, [selectedCategory]);

  return (
    <div className="flex flex-col flex-1 overflow-y-hidden">
      <div className="no-scrollbar flex-shrink-0 flex p-4 border-b-2 border-zinc-100 gap-3 text-sm overflow-x-scroll overflow-y-hidden">
        {Object.entries(categories).map(([category, emoji]) => (
          <button
            onClick={(e) => {
              setSelectedCategory(
                (e.target as HTMLDivElement).id === 'remove-selected-category'
                  ? ''
                  : category,
              );
            }}
            type="button"
            className={`px-4 py-2 flex items-center rounded-full whitespace-nowrap shadow-md ${
              category === selectedCategory
                ? 'bg-primary text-white shadow-primary'
                : 'bg-zinc-100 shadow-zinc-100'
            }`}
          >
            {emoji} {category}
            {category === selectedCategory && (
              <div
                id="remove-selected-category"
                className="ml-2 stroke-1 stroke-zinc-100"
              >
                <Icon
                  id="remove-selected-category"
                  icon="uil:multiply"
                  className="text-xs -mb-[1px]"
                />
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
        <div
          ref={productListingContainer}
          className="w-full h-full overflow-y-scroll p-20"
        >
          <div className="w-full grid grid-cols-5 gap-12 gap-y-20">
            {displayedProducts.map((e) => (
              <div key={e.url} className="gap-6 flex flex-col">
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
          <div className="flex items-center justify-between mt-16">
            <button
              onClick={() => {
                if (page > 0) {
                  setPage(page - 1);
                }
              }}
              type="button"
              className="p-4 pr-4 pl-3 group"
            >
              <Icon
                icon="uil:angle-left"
                className="text-2xl mt-[2px] group-hover:text-primary transition-colors"
              />
            </button>
            <div className="flex items-center gap-8 text-zinc-600 text-lg">
              <div className="flex items-center gap-4">
                {page - 2 > 0 && (
                  <>
                    <button
                      type="button"
                      onClick={() => setPage(0)}
                      className="w-10 h-10 flex items-center justify-center"
                    >
                      1
                    </button>
                    <span>...</span>
                  </>
                )}
                {(page - 1) * perPage > 0 && (
                  <button
                    type="button"
                    onClick={() => setPage(page - 2)}
                    className="w-10 h-10 flex items-center justify-center"
                  >
                    {page - 1}
                  </button>
                )}
                {page * perPage > 0 && (
                  <button
                    type="button"
                    onClick={() => setPage(page - 1)}
                    className="w-10 h-10 flex items-center justify-center"
                  >
                    {page}
                  </button>
                )}
                <button
                  type="button"
                  className="w-12 h-12 rounded-md bg-primary shadow-primary shadow-md text-zinc-100 font-medium flex items-center justify-center"
                >
                  {page + 1}
                </button>
                {(page + 1) * perPage <= products.length && (
                  <button
                    type="button"
                    onClick={() => setPage(page + 1)}
                    className="w-10 h-10 flex items-center justify-center"
                  >
                    {page + 2}
                  </button>
                )}
                {(page + 2) * perPage <= products.length && (
                  <button
                    type="button"
                    onClick={() => setPage(page + 2)}
                    className="w-10 h-10 flex items-center justify-center"
                  >
                    {page + 3}
                  </button>
                )}
                {page + 3 < Math.ceil(products.length / perPage) && (
                  <>
                    <span>...</span>
                    <button
                      type="button"
                      onClick={() =>
                        setPage(Math.ceil(products.length / perPage) - 1)
                      }
                      className="w-10 h-10 flex items-center justify-center"
                    >
                      {Math.ceil(products.length / perPage)}
                    </button>
                  </>
                )}
              </div>
            </div>
            <button
              onClick={() => {
                if (page * perPage < products.length) {
                  setPage(page + 1);
                }
              }}
              type="button"
              className="p-4 pl-4 pr-3 group"
            >
              <Icon
                icon="uil:angle-right"
                className="text-2xl mt-[2px] group-hover:text-primary transition-colors"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
