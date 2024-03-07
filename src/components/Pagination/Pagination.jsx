import React from 'react';
import { Button } from '../UIComponents/Button/Button';
import cl from '../../assets/styles/main.module.scss';
import { getPagesArray } from '../../utils/pages';

const Pagination = ({ changePage, totalPages, page }) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className={cl.pagination}>
      {pagesArray.map((p) => (
        <Button
          onClick={() => changePage(p)}
          key={p}
          className={cl.pagination__button}
          id={page === p ? cl.page : cl.page__current}
        >
          {p}
        </Button>
      ))}
    </div>
  );
};

export { Pagination };
