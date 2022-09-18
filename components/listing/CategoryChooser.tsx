/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Icon } from '@iconify/react';

import categories from '../../assets/categories.json';

export default function CategoryChooser({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}) {
  return (
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
  );
}
