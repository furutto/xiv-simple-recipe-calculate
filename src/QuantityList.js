import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

export default class QuantityList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:[],
    };
  }


  update(_items) {
    this.state.data = (_items);

    this.setState({
      data : this.state.data
    });
  };


  render() {
    return (
      <div>
        <List style={{width:'400px'}}>
          {this.state.data.map((prop,index) => (
            <ListItem dense button >
              <Avatar src={prop.icon} />
              <ListItemText primary={prop.name} />
              <Typography align="right" color='secondary' >{prop.value}</Typography>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}
