import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"
import HeadingProduct from '../Component/01-HeadingProduct/HeadingProduct'
import Jumbotron from '../Component/02-Jumbotron/Jumbotron'
import Products from '../Component/CardProduct/Products'
import DetailProduct from "../Component/CardProduct/DetailProduct"

export default class Home extends Component {
     render() {
          return (
               <>
                    <Router>
                         <nav className="navbar navbar-expand-md  p-0">
                              <div className="container d-flex justify-content-between align-items-center">
                                   <Link to="/" className="navbar-brand">
                                        <img className="w-100" src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/967/4556923967_3cad5f30-6e17-448e-bbfc-b1b470ed9fef.png?cb=1612237909" alt="logo" />
                                   </Link>
                                   <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                   </button>
                                   <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav  me-auto mb-2 mb-lg-0" id="navbarText">
                                             <li className="nav-item">
                                                  <Link to="/" className="nav-link">Home</Link>
                                             </li>
                                             <li className="nav-item">
                                                  <Link to="/contact" className="nav-link">Contact</Link>
                                             </li>
                                             <li className="nav-item">
                                                  <Link to="/" className="nav-link">Testimonials</Link>
                                             </li>
                                        </ul>
                                        <span className="navbar-text d-none d-lg-block">
                                             Follow <strong>@IJlnflhbrz</strong>
                                        </span>
                                   </div>
                              </div>
                         </nav>

                         <div className="container mt-5">
                              <Jumbotron />

                              <div className="List-Makanan mt-4 text-center d-flex justify-content-around">
                                   <Link className="btn btn-success w-25" to="/kuliner">Makanan Kuliner</Link>
                                   <Link className="btn btn-success w-25" to="/tradisional">Makanan Tradisional</Link>
                                   <Link className="btn btn-success w-25" to="/jamannow">Makanan JamanNow</Link>
                              </div>

                              <HeadingProduct title="PRODUCT TERBAIK KAMI" />
                              <Products />
                         </div>

                         {/* Routerr Bibawah ini */}
                         <Switch>
                              <Route exact path="/" component={Home} />
                              <Route  path="/product-detail/:id" component={DetailProduct} />
                         </Switch>
                    </Router>
               </>
          )
     }
}
