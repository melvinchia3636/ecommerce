/* eslint-disable react/jsx-curly-newline */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';

import data from '../assets/data.json';
import categories from '../assets/categories.json';

import { Product } from '../components/listing/types';

import Listing from '../components/listing/Listing';
import SideNav from '../components/listing/SideNav';
import CategoryChooser from '../components/listing/CategoryChooser';

function App() {
  const productListingContainer = useRef<HTMLDivElement>(null);

  const [page, setPage] = useState(0);
  const PER_PAGE = 25;

  const [selectedCategory, setSelectedCategory] = useState(
    Object.keys(categories)[0],
  );

  const [products, setProducts] = useState<Product[]>(
    (data as Product[]).filter(
      (e) => e.breadcrumbs.split('/')[0].trim() === selectedCategory,
    ),
  );
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>(
    products.slice(0, PER_PAGE),
  );

  useEffect(() => {
    setDisplayedProducts(
      products.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE),
    );

    if (productListingContainer.current) {
      productListingContainer.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [page, PER_PAGE, products]);

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
      <Head>
        <title>EShoes.</title>
      </Head>
      <CategoryChooser
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="flex flex-1 overflow-y-hidden">
        <SideNav />
        <Listing
          productListingContainer={productListingContainer}
          page={page}
          setPage={setPage}
          perPage={PER_PAGE}
          products={products}
          displayedProducts={displayedProducts}
        />
      </div>
    </div>
  );
}

export default App;
