import React from 'react';
import FilterButtons from './FilterButtons';
import FullWidthTabs from './FullWidthTabs.js'
import {filterData} from './filterData.js'
import {recipeData} from './RecipeData.js'

export default class Contaner extends React.Component {

  filterRecipes(_btn) {
    let _recipeData =  recipeData.recipe.filter((_recipe) => (
      _btn.filter == 'all'
       || (_btn.classes == "crafter" && _recipe.crafter == _btn.filter)
       || (_btn.classes != "crafter" && _recipe.job.indexOf(_btn.filter) >= 0)
    ));
    this.refs.TabsComponent.updateRecipes(_recipeData);
  }


  render() {
    return (
      <div>
        <FilterButtons data={filterData} updateFilter={this.filterRecipes.bind(this)} />
        <FullWidthTabs ref='TabsComponent' data={recipeData} />
      </div>
    );
  }
}
