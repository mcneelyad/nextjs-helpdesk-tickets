import styles from '../../styles/NewTicket.module.css';

const NewTicket = () => {
    return (
        <div className={styles.newTicket}>
            <div className={styles.newTicketBox}>
                <h2>Submit a New Ticket</h2>

                <form method="post">
                    <div className={styles.container}>
                        <input type="text" placeholder="Enter title" className={styles.input} name="title" required/>
                        <textarea rows="7" cols="" placeholder="Enter the description" className={styles.input} name="description" required></textarea>

                        <div className={styles.productDetails}>
                            <select name="brand" id="brand" className={styles.productBrand} required>
                                <option value="">Select the product brand</option>
                                <option value="apple">Apple</option>
                                <option value="microsoft">Microsoft</option>
                                <option value="amazon">Amazon</option>
                                <option value="other">Other</option>
                            </select>
                            <select name="type" id="type" className={styles.productType} required>
                                <option value="">Select the product type</option>
                                <option value="computer">Computer</option>
                                <option value="software">Software</option>
                                <option value="server">Server</option>
                            </select>
                        </div>

                        <input type="text" id="contact" name="contact" placeholder="Enter your contact information" className={styles.input} required/>

                        <button type="submit" className={styles.btn}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewTicket;