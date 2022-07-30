const Tickets = ({ tickets }) => {
    return (
        <div>
            {tickets && tickets.map(ticket => <h2 key={ticket.id}>{ticket.title}</h2>)}
        </div>
    )
};

export async function getStaticProps(context) {
  const res = await fetch('http://localhost:5000/tickets')
  const tickets = await res.json()

  return {
    props: {
      tickets,
    },
  }
}

export default Tickets;