import * as React from 'react';
import { MyInput } from '../Input/myInput';
import { Select } from '../SelectedPosts/Select';
import cl from '../../assets/styles/main.module.scss';
import { options } from '../../common/posts/options';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div className={cl.selectedPosts__block}>
      <MyInput
        placeholder='Search by'
        id={cl.input}
        value={filter.query}
        onChange={(event) =>
          setFilter({ ...filter, query: event.target.value })
        }
      />
      <Select
        defaultValue='Sort By'
        options={options}
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
      />
    </div>
  );
};

export { PostFilter };
