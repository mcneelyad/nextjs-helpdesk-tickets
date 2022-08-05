import Ticket from '../components/Ticket';

const Tickets = ({ tickets }) => {
  return (
    <div>
      {tickets && tickets.map(ticket => <Ticket ticket={ticket} />)}
    </div>
  )
};

export async function getStaticProps(context) {
  const res = await fetch('http://localhost:5000/tickets')
  const tickets = await res.json();

  return {
    props: { tickets: tickets },
  }
}

export default Tickets;