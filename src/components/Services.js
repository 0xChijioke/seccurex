import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title"

class Services extends Component {
  state = { 
    services: [
      {
        icons:<FaCocktail />,
        title:"High intrest savings",
        info:"Corrupti distinctio sunt ut qui ad odit voluptatibus itaque non."
      },
      {
        icons:<FaHiking />,
        title:"Invest",
        info:"Corrupti distinctio sunt ut qui ad odit voluptatibus itaque non."
      },
      {
        icons:<FaShuttleVan />,
        title:"Transfer",
        info:"Corrupti distinctio sunt ut qui ad odit voluptatibus itaque non."
      },
      {
        icons:<FaBeer />,
        title:"Review",
        info:"Corrupti distinctio sunt ut qui ad odit voluptatibus itaque non."
      }
    ]
   }
  render() { 
    return ( 
      <section className='services'>
       <Title title="services" />
       <div className="services-center">
        {this.state.services.map((item, index) => {
          return <article key={index} className="service">
            <span>{item.icons}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
          </article>
        })}
       </div>
      </section>
     );
  }
}
 
export default Services;