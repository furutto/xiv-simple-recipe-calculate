import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import ItemTooltip from './ItemTooltip';

export default class RecipeList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      recipe:props.data.recipe,
    };
  }


  addItem= list => () => {
    this.state.recipe.push(list);

    this.setState({
      recipe : this.state.recipe
    });
  };


  updateRecipes(_recipe) {
    this.state.recipe = _recipe;

    this.setState({
      recipe : this.state.recipe
    });
  };


  render() {
    return (
      <div>
        <List style={{width:'400px'}}>
          {this.state.recipe.map((list,index) => (
            <Tooltip title={<ItemTooltip data={list}/>} placement="right-start">
              <ListItem key={index} onClick={() => this.props.addSelectedRecipe(list)} dense button >
                <Avatar src={list.icon} />
                <ListItemText primary={list.name} />
              </ListItem>
            </Tooltip>
          ))}
        </List>
      </div>
    );
  }
}
