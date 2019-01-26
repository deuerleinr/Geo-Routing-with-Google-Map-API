import React from "react";
import styles from "./AddressList.module.css";
import GeoRoute from "./GeoRoute";

class AddressList extends React.Component {
  state = {
    addresses: [
      {
        name: "Lighthouse Cafe",
        street: "30 Pier Avenue",
        city: "Hermosa Beach",
        state: "CA",
        zip: "90254"
      },
      {
        name: "The Palm",
        street: "1100 S. Flower St",
        city: "Los Angeles",
        state: "CA",
        zip: "90015"
      },
      {
        name: "Pink's Hot Dogs",
        street: "709 N La Brea Ave",
        city: "Los Angeles",
        state: "CA",
        zip: "90038"
      },
      {
        name: "Santa Mondica Seafood",
        street: "1000 Wilshire Blvd",
        city: "Santa Monica",
        state: "CA",
        zip: "90401"
      },
      {
        name: "Caesars Palace Hotel and Casino",
        street: "3570 S Las Vegas Blvd",
        city: "Las Vegas",
        state: "NV",
        zip: "89109"
      },
      {
        name: "Tavern On the Green",
        street: "67th Street and Central Park West",
        city: "New York",
        state: "NY",
        zip: "10023"
      }
    ]
  };

  render() {
    const addresses = this.state.addresses;

    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {addresses.map((address, i) => (
              <tr className={styles.mytr} key={i}>
                <td> {address.name}</td>
                <td>
                  {address.street} {address.city}
                  {", "}
                  {address.state}
                  {"  "} {address.zip}
                  <GeoRoute
                    name={address.name}
                    street={address.street}
                    city={address.city}
                    state={address.state}
                    zip={address.zip}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default AddressList;
