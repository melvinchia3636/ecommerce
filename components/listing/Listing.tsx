/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Product } from './types';
import Pagination from './Pagination';

export default function Listing({
  productListingContainer,
  displayedProducts,
  page,
  setPage,
  perPage,
  products,
}: {
  productListingContainer: React.LegacyRef<HTMLDivElement> | undefined;
  displayedProducts: any[];
  page: number;
  setPage: (page: number) => void;
  perPage: number;
  products: Product[];
}) {
  return (
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
      <Pagination
        page={page}
        setPage={setPage}
        perPage={perPage}
        products={products}
      />
    </div>
  );
}
