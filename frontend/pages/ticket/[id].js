import { useRouter } from 'next/router';

import styles from '../../styles/tickets/TicketById.module.css';

const TicketById = ({ ticket }) => {

    return (
        <div className={styles.ticketDetailsPage}>
            <div className={styles.leftSide}>
                <div className={styles.topLevelDetails}>
                    <h2>{ticket.title}</h2>
                    <div className="statusPriority">
                        <select name="status" id="status">
                            <option value="open">Open</option>
                            <option value="in_progress">In progress</option>
                            <option value="closed">Closed</option>
                        </select>
                        <select name="priority" id="priority">
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                            <option value="urgent">Urgent</option>
                        </select>
                    </div>
                </div>
                <div className={styles.ticketDetails}>
                    <textarea value={ticket.description} disabled></textarea>
                    <p>{ticket.date_created}</p>
                    <p>Technician Notes</p>
                    <div className="technicianNotes">
                        <div className="technicianNote">

                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.customerDetails}>
                    <h3>Cutomer Details</h3>
                    <p>{ticket.created_by}</p>
                </div>
                <div className={styles.technicianDetails}>
                    <h3>Technician</h3>
                </div>
                <div className={styles.resolution}>
                    <h3>Resolution</h3>
                </div>
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

    console.log(ticket[0])

    return {
        props: { ticket: ticket[0] }
    }
}