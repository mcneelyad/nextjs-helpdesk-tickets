import { useRouter } from 'next/router';

import styles from '../../styles/TicketById.module.css';

const TicketById = ({ ticket }) => {

    return (
        <div className={styles.ticketDetailsPage}>
            <div className={styles.topLevelDetails}>
                <h2>{ticket.title}</h2>
            </div>
            <div className={styles.ticketDetails}>
                <p>{ticket.description}</p>
                <p>{ticket.date_created}</p>
            </div>

        </div>
    )
}

export default TicketById;

export async function getStaticPaths() {
    const res = await fetch('http://localhost:5000/tickets');
    const tickets = await res.json();

    const paths = tickets.map(ticket => {
        return { params: { id: ticket.id.toString() } }
    });

    return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
    const res = await fetch(`http://localhost:5000/ticket/${params.id}`);
    const ticket = await res.json();

    return {
        props: { ticket: ticket[0] }
    }
}