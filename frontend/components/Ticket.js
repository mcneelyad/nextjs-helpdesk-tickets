import Link from 'next/link';
import styles from '../styles/TicketList.module.css';

const Ticket = ({ ticket }) => {
    const formatDateString = (dateString) => {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString([], options);
    }
    return (
        <div key={ticket.id} className={styles.ticket}>
            <h2>
                <Link href={`/ticket/${ticket.id}`}>
                    <a>{ticket.title}</a>
                </Link>
            </h2>
            <p>{formatDateString(ticket.date_created)}</p>
            <p>{ticket.description}</p>
        </div>
    )
}

export default Ticket;