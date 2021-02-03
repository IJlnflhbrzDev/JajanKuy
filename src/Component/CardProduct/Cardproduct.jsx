import React from 'react'
export default function Cardproduct(props) {
     return (
          <>
            <div className="card mt-3 cardProduct">
               <img src={props.imgFood} className="card-img-top" alt="CardProduct" />
               <div className="card-body">
                         <p className="card-text"><b>Promo</b> {props.nameFood}</p>
                         <span>{props.hargaFood}</span>
                    </div>
                         <button className="btn btn-primary w-100">Detail Product</button>
           </div>
          </>
     )
}
