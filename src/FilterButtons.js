import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    all: {
      margin: theme.spacing.unit,
      backgroundColor: "#f48fb1",
      '&:hover': {
        backgroundColor: '#f6a5c0',
      }
    },
    crafter: {
       margin: theme.spacing.unit,
    },
    dps: {
      margin: theme.spacing.unit,
      backgroundColor: "#ef9a9a",
      '&:hover': {
        backgroundColor: '#f2aeae',
      }
    },
    tank: {
      margin: theme.spacing.unit,
      backgroundColor: "#90caf9",
      '&:hover': {
        backgroundColor: '#a6d4fa',
      }
    },
    healer: {
      margin: theme.spacing.unit,
      backgroundColor: "#a5d6a7",
      '&:hover': {
        backgroundColor: '#b7deb8',
      }
    },
});


class FilterButtons extends React.Component {

  render () {
    const commentNodes = this.props.data.map((btn) => {
      if(btn.classes == 'all'){
        return (
          <Button variant="fab" mini onClick={() => this.props.updateFilter(btn)} className={this.props.classes.all}>
            All
          </Button>
        );
      }else{
        return (
          <Button variant="fab" mini onClick={() => this.props.updateFilter(btn)} className={this.props.classes[`${btn.classes}`]}>
            <img src={btn.icon} alt={btn.filter} />
          </Button>
        );
      }
    });

    return(<div>{commentNodes}</div>);
  }
}


export default withStyles(styles)(FilterButtons);
