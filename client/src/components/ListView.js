import React, { Component } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
// import tileData from "./tileData";

import { fetchProducts } from "../store/productsReducer";



export class ListView extends Component {
  componentDidMount() {
    this.props.fetchProducts(this.props.category);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.props.fetchProducts(this.props.category);
    }
  }
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

  render() {
    if (!this.props.products) {
      return (
        <div>
          Loading
          <img src="https://d2jq2hx2dbkw6t.cloudfront.net/184/loading-645268_640.jpg" />
        </div>
      );
    }
    const useStyles = makeStyles(theme => ({
        root: {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          overflow: "hidden",
          backgroundColor: theme.palette.background.paper
        },
        gridList: {
          width: 500,
          height: 450
        },
        icon: {
          color: "rgba(255, 255, 255, 0.54)"
        }
      }));
    const classes = useStyles();
    console.log("working until return");
    return (
      <div>
        <h2 id="categoryTitle">Our {this.props.category}</h2>
        <div className={classes.root}>
          <GridList cellHeight={180} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
              <ListSubheader component="div">Products</ListSubheader>
            </GridListTile>
            {this.props.products.map(product => (
              <GridListTile key={product.id}>
                <img src={product.image} alt={product.name} />
                <GridListTileBar
                  title={product.name}
                  subtitle={<span>price:{product.price}</span>}
                  actionIcon={
                    <IconButton
                      aria-lable={`info about ${product.name}`}
                      className={classes.icon}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.productsReducer.products
});

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: category => dispatch(fetchProducts(category))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListView);
