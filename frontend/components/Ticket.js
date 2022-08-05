const Ticket = ({ ticket }) => {
    return (
        <div className="ticket">
            <h2>{ticket.title}</h2>
            <p>{ticket.description}</p>
            <p>{ticket.date_created}</p>
        </div>
    )
}

export default Ticket;