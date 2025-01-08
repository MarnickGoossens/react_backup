import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Jeff',
    lastName: 'Jones',
    email: 'jjones@thomasmore.be'
  });

  function handleFirstNameChange(e) {
    setPerson({
      firstName: e.target.value, 
      lastName: person.lastName,
      email: person.email
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      firstName: person.firstName,
      lastName: e.target.value,
      email: person.email
    });
  }

  function handleEmailChange(e) {
    setPerson({
      firstName: person.firstName,
      lastName: person.lastName,
      email: e.target.value
    });
  }

  return (
    <>
      <div>
        First name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div>
        Last name:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <div>
        Email:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </div>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}