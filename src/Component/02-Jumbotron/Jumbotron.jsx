import React, { Fragment } from "react"
import Jumbotrons from "../02-Jumbotron/JajanKuy.png"
export default function Jumbotron() {
     return (
          <Fragment>
               <div className="text-center">
               <img style={{height : "600px"}} className="w-100" src={Jumbotrons} alt="jumbotronimg"/>
              </div>
          </Fragment>
     )
}