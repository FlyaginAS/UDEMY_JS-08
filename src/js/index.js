import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

//global state
// search Object
// current ricipe Object
// shopping list Object
// liked recipes
const state = {};

const controlSearch = async () => {
  //1)Get query from view
  const query = searchView.getInput();
  console.log(query);
  if (query) {
    //2) new search object and add to state
    state.search = new Search(query);
    //3) prepare UI for results
    searchView.clearInput();
    searchView.clearResults();
    //4) search for recipes
    await state.search.getResults();

    //5)render results on UI
    searchView.renderResults(state.search.result);
  }
};

document.querySelector('.search').addEventListener('submit', (e) => {
  e.preventDefault();
  controlSearch();
});
