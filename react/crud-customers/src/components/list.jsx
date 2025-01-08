import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MockApi from '../apis/mock_api';

export default function List() {
  const [customers, setCustomers] = useState(null)
  const [loading, setLoading] = useState(true);

  const fetchCustomers = async () => {
    try {
      const response = await MockApi.get();
      setCustomers(response.data); // Sla de klantgegevens op in de state
    } catch (error) {
      console.error("Error fetching customer data:", error);
    } finally {
      setLoading(false); // Zet loading op false
    }
  };

  useEffect(() => {
      // Klantgegevens ophalen
      fetchCustomers();
    }, []);
  
    // Als de gegevens nog aan het laden zijn, toon een laadindicator
    if (loading) {
      return <div>Loading...</div>;
    }
  
    // Als er geen klantgegevens zijn, geef een foutmelding weer
    if (!customers) {
      return <div>Customers not found</div>;
    }


  function handleDelete(customer) {
    MockApi.delete(customer.id)
    setCustomers(
      customers.filter(i =>
        i.id !== customer.id
      )
    );
  }
  
  return (
    <div>
      <Link to="/create"><button className="btn btn-light">Create</button></Link>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>I Agree</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            return (
              <tr key={customer.id}>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.iAgree ? 'Checked' : 'Unchecked'}</td>
                <td key={customer.id}>
                  <Link to={"/" + customer.id}><button className="btn btn-light">Edit</button></Link> 
                </td>
                <td>
                  <button className="btn btn-light" onClick={() => handleDelete(customer)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
