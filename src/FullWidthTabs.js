import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import RecipeList from './RecipeList';
import SelectedRecipeList from './SelectedRecipeList';
import QuantityList from './QuantityList';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}


TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};


export default class FullWidthTabs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0,
      selectedUpdateCount: 0,
      quantityUpdateCount: 0,
    };
    this.updateRecipes = this.updateRecipes.bind(this);
  }


  handleChange = (event, value) => {
    if(value == 1){
      this.state.selectedUpdateCount = 0;
    }else if(value == 2){
      this.state.quantityUpdateCount = 0;
    }
    this.state.value = value;
    this.setState(this.state);
  };


  updateRecipes = _recipe => {
    this.refs.RecipeListComponent.updateRecipes(_recipe);
  };


  addSelectedRecipe(_recipeData) {
    this.state.selectedUpdateCount++;
    this.refs.SelectedRecipeListComponent.add(_recipeData);
    this.setState({selectedUpdateCount: this.state.selectedUpdateCount});
  }


  calculateQuantity(_selectedRecipes) {
    let quantityMap = new Map();

    for(let k in _selectedRecipes) {
      let _recipe = _selectedRecipes[k];

      for(var i=0; i<=5; i++){
        let _name = _recipe['sItem' + i];

        if(_name == "") continue;

        if(quantityMap.has(_name)){
          let ele = quantityMap.get(_name);
          ele.value += _recipe['sAmount' + i];
        }else{
          quantityMap.set(_name,{
            icon: _recipe['sIcon' + i],
            name: _recipe['sItem' + i],
            value:  _recipe['sAmount' + i]});
        }
      }
    }

    let list = [];
    for (let [key, value] of quantityMap) {
      list.push(value);
    }
    this.state.quantityUpdateCount = 1;
    this.refs.QuantityListComponent.update(list);
    this.setState({quantityUpdateCount: this.state.quantityUpdateCount});
  }


  render() {
    return (
      <div style={{padding:'10px'}}>
      <Paper >
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            fullWidth
          >
            <Tab label="Recipe" />
            <Tab label={
                this.state.selectedUpdateCount > 0 ?
                  <Badge style={{paddingRight: 10}} color="secondary" badgeContent={this.state.selectedUpdateCount}>
                       Selected
                  </Badge>
                  : "Selected"
              }
            />
            <Tab label={
                this.state.quantityUpdateCount > 0 ?
                  <Badge style={{paddingRight: 10}} color="secondary" badgeContent="New">
                       Quantity
                  </Badge>
                  : "Quantity"
              }
            />
          </Tabs>
        </Paper>
        <SwipeableViews index={this.state.value}>
          <TabContainer >
            <RecipeList ref='RecipeListComponent' addSelectedRecipe={this.addSelectedRecipe.bind(this)} data={this.props.data} />
          </TabContainer>
          <TabContainer >
            <SelectedRecipeList ref='SelectedRecipeListComponent' calculateQuantity={this.calculateQuantity.bind(this)} />
          </TabContainer>
          <TabContainer >
            <QuantityList ref='QuantityListComponent' />
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}
