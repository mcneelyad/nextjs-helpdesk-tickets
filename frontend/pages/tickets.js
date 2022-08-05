import Ticket from '../components/Ticket';

import styles from '../styles/TicketList.module.css';

const Tickets = ({ tickets }) => {
  return (
    <div className={styles.ticketListPage}>
      <h1>Tickets</h1>
      <div className="ticket-list">
        {tickets && tickets.map(ticket => <Ticket ticket={ticket} />)}
      </div>
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