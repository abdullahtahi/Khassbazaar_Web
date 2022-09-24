import React from "react";
import { Link } from "react-router-dom";
import bag1 from "../../assesst/bag1.jpg";
import Grid from "@mui/material/Grid";
import "./Cards.css";
export default function Cards({ products }) {
  // const filterproduct=products.filter((filter)=>)
  console.log("the cards products are", products);
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={3} md={3}>
          <div class="card">
            <img src={bag1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <div class="card">
            <img src={bag1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <div class="card">
            <img src={bag1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <div class="card">
            <img src={bag1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <div class="card">
            <img src={bag1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <div class="card">
            <img src={bag1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
