import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import ItemTooltip from './ItemTooltip';

export default class SelectedRecipeList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:[],
    };
  }


  add(_recipe) {
    this.state.data.push(_recipe);

    this.setState({
      data : this.state.data
    });

    this.props.calculateQuantity(this.state.data);
  };


  remove(_index) {
    this.state.data.splice(_index, 1);

    this.setState({
      data : this.state.data
    });

    this.props.calculateQuantity(this.state.data);
  };


  render() {
    return (
      <div>
        <List style={{width:'400px'}}>
          {this.state.data.map((prop,index) => (
            <Tooltip title={<ItemTooltip data={prop}/>} placement="right-start">
              <ListItem onClick={() => this.remove(index)}  dense button >
                <Avatar src={prop.icon} />
                <ListItemText primary={prop.name} />
              </ListItem>
            </Tooltip>
          ))}
        </List>
      </div>
    );
  }
}
