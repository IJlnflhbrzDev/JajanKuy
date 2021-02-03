import React, { Component, Fragment } from 'react'
import Cardproduct from './Cardproduct'
import DataProduct from "../../product/product.json"

function ItemDataProduct() {
     return DataProduct.map(res => {
          return (

               <div className="col-lg-4 col-xl-4 col-md-6 col-sm-12" key={res.idFood}>
                    <Cardproduct
                         imgFood={res.imgFood}
                         nameFood={res.nameFood}
                         hargaFood={res.hargaFood}
                    />
               </div>

          )
     })
}
export default class Products extends Component {

     render() {
          return (
               <Fragment>
                    <div className="row">
                         <ItemDataProduct />
                    </div>
               </Fragment>
          )
     }
}
