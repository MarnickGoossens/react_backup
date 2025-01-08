import { useState, useEffect } from 'react';

import MockApi from '../apis/mock_api';
import { useNavigate, useParams, Link } from 'react-router-dom';

export default function Detail() {
  const {id} = useParams();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    firstName: '',
    lastName: '',
    iAgree: false,
  });
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Klantgegevens ophalen
    const fetchCustomer = async () => {
      try {
        const response = await MockApi.getbyid(Number(id));
        setCustomer(response.data); // Sla de klantgegevens op in de state
        setIsEditing(true); // We zijn bezig met het bewerken van een bestaande klant
      } catch (error) {
        console.log("No customers found, ready to add a new one.");
        setIsEditing(false); // We zijn bezig met het toevoegen van een nieuwe klant
      } finally {
        setLoading(false); // Zet loading op false
      }
    };
    fetchCustomer();
  }, [id]);

  // Als de gegevens nog aan het laden zijn, toon een laadindicator
  if (loading) {
    return <div>Loading...</div>;
  }

  function handleFirstNameChange(event) {
    setCustomer({
      ...customer,
      firstName: event.target.value
    })
  }
  
  function handleLastNameChange(event) {
    setCustomer({
      ...customer,
      lastName: event.target.value,
    })
  }
  
  function handleIAgreeChange(event) {
    setCustomer({
      ...customer,
      iAgree: event.target.checked
    })
  }

  async function handleSubmit() {
    if (isEditing) {
      // Update bestaande klant
      await MockApi.put(customer);
    } else {
      // Voeg nieuwe klant toe
      await MockApi.post(customer);
    }
    navigate(-1);
  }

  return (
    <div>
      <form>
        <div className="form-group">
          <label>First Name</label>
          <input className="form-control" onChange={handleFirstNameChange} placeholder={customer.firstName}/>
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input className="form-control" onChange={handleLastNameChange} placeholder={customer.lastName}  />
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={customer.iAgree} onChange={handleIAgreeChange}  />
          <label>I agree to the Terms and Conditions</label>
        </div>
        <button type="button" className="btn btn-light" onClick={handleSubmit}>{isEditing ? 'Update' : 'Add'}</button>
      </form>
      <Link onClick={() => navigate(-1)}>Back</Link>
    </div>
  )
}
