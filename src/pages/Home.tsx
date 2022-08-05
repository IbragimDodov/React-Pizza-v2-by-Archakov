import React from 'react';
import qs from 'qs';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { sortList } from '../components/Sort';

import { FilterSliceState, selectFilter, setCategoryId, setCurrentPage, setFilters } from '../Redux/slices/filterSlice';

import { fetchPizzas, SearchPizzaParams, selectPizzaData } from '../Redux/slices/pizzaSlice';
import { useAppDispatch } from '../Redux/store';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMounted = React.useRef(false);

  const {items, status} = useSelector(selectPizzaData);
  const {categoryId, sort, currentPage, searchValue} = useSelector(selectFilter);


  const onChangeCategory = React.useCallback((id: number) => {
    dispatch(setCategoryId(id));
  }, [])

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  }

  const getPizzas = async () => {

    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
    }));

    window.scrollTo(0, 0);
  }

  // React.useEffect(() => {
  //   if (isMounted.current) {
  //     const params = {
  //       categoryId: categoryId > 0 ? categoryId : null,
  //       sortProperty: sort.sortProperty,
  //       currentPage,
  //     }

  //     const queryString = qs.stringify(params, {skipNulls: true})
  //     navigate(`/?${queryString}`);
  //   }

  //   if (!window.location.search) {
  //     dispatch(fetchPizzas({} as SearchPizzaParams));
  //   }
  // }, [categoryId, sort.sortProperty, searchValue, currentPage])

  React.useEffect(() => {
      getPizzas();
  }, [categoryId, sort.sortProperty, searchValue, currentPage])

  // React.useEffect(() => {
  //   if (window.location.search) {
  //     const params = (qs.parse(window.location.search.substring(1)) as unknown) as SearchPizzaParams;
  //     const sort = sortList.find(obj => obj.sortProperty === params.sortBy);
  
  //     dispatch(setFilters({
  //       searchValue: params.search,
  //       categoryId: Number(params.category),
  //       currentPage: Number(params.currentPage),
  //       sort: sort || sortList[0],
  //     })
  //   }
  //   isMounted.current = true;
  // }, [])

  const pizzas = items.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className='container'>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
        <Sort value={sort}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {
        status === 'error' ? (
          <div>
            <h2>An error has occurred <span>😕</span></h2>
          </div>
        ) : (
          <div className="content__items"> {status === 'loading' ? skeletons : pizzas}</div>
        )
      }
      <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
    </div>
  )
}

export default Home