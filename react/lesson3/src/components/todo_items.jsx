function TodoItems({ items, handleDelete }) {

  function handlePush(item) {
    handleDelete(item); // Call the onInsert function with the text
  }

  const output = items.map ((item) => {
    return (
      <li key={item.key}>
        {item.text}
        <br />
        <div className="smallerText">{item.date}</div>
        <br />
        <button onClick={() => handlePush(item)}>delete</button>
      </li>
    );
  });
  
  return (<ul className="theList">{output}</ul>);
}

export default TodoItems;
