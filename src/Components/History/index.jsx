
const History = (props) => {
  return (
    <>
      <ul>
        {props.history.map((e, idx) => (
          <li key={idx}>{e.url}</li>
        ))}
      </ul>
    </>
  )
}


export default History;
