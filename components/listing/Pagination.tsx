/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import { Icon } from '@iconify/react';
import React from 'react';
import { Product } from './types';

export default function Pagination({
  products,
  page,
  setPage,
  perPage,
}: {
  products: Product[];
  page: number;
  setPage: (page: number) => void;
  perPage: number;
}) {
  return (
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
  );
}
