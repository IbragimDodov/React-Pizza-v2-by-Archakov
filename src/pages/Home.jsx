import React from 'react';
import qs from 'qs';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';
import { setCategoryId, setCurrentPage, setFilters } from '../Redux/slices/filterSlice';
import { sortList } from '../components/Sort';
import { fetchPizzas } from '../Redux/slices/pizzaSlice';

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const {items, status} = useSelector(state => state.pizza);
  const {categoryId, sort, currentPage} = useSelector(state => state.filter);
  const { searchValue } = React.useContext(SearchContext);
  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  }

  const onChangePage = number => {
    dispatch(setCurrentPage(number));
  }

  const getPizzas = async () => {

    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(fetchPizzas({
      sortBy,
      order,
      category,
      search,
      currentPage
    }));

    window.scrollTo(0, 0);
  }

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      })
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, searchValue, currentPage])

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortList.find(obj => obj.sortProperty === params.sortProperty)

      dispatch(
        setFilters({
          ...params,
          sort
        })
      )
      // isSearch.current = true;
    }
  }, [])

  React.useEffect(() => {
      getPizzas();
  }, [categoryId, sort.sortProperty, searchValue, currentPage])

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className='container'>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
        <Sort/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {
        status === 'error' ? (
          <div>
            <h2>An error has occurred <icon>😕</icon></h2>
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