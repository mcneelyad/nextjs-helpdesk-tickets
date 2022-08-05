import styles from '../styles/TicketList.module.css';

const Ticket = ({ ticket }) => {
    const formatDateString = (dateString) => {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString([], options);
    }
    return (
        <div className={styles.ticket}>
            <h2>{ticket.title}</h2>
            <p>{formatDateString(ticket.date_created)}</p>
            <p>{ticket.description}</p>
        </div>
    )
}

export default Ticket;