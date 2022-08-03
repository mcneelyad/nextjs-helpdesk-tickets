import { useState } from 'react';
import axios from 'axios';

import styles from '../../styles/NewTicket.module.css';

const NewTicket = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [brand, setBrand] = useState('');
    const [type, setType] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('form submitted');
        console.log(title);
        console.log(description);
        console.log(brand);
        console.log(type);
        console.log(contact);

        const ticket = {
            title: title,
            description: description,
            brand: brand,
            type: type,
            contact: contact,
        }

        let req = await axios.post("http://localhost:5000/ticket/new", { ticket });
        
    }

    return (
        <div className={styles.newTicket}>
            <div className={styles.newTicketBox}>
                <h2>Submit a New Ticket</h2>

                <form method="post" onSubmit={handleSubmit}>
                    <div className={styles.container}>
                        <input type="text" placeholder="Enter title" className={styles.input} name="title" required onChange={e => setTitle(e.target.value)}/>
                        <textarea rows="7" cols="" placeholder="Enter the description" className={styles.input} name="description" required onChange={e => setDescription(e.target.value)}></textarea>

                        <div className={styles.productDetails}>
                            <select name="brand" id="brand" className={styles.productBrand} required onChange={e => setBrand(e.target.value)}>
                                <option value="">Select the product brand</option>
                                <option value="apple">Apple</option>
                                <option value="microsoft">Microsoft</option>
                                <option value="amazon">Amazon</option>
                                <option value="other">Other</option>
                            </select>
                            <select name="type" id="type" className={styles.productType} required onChange={e => setType(e.target.value)}>
                                <option value="">Select the product type</option>
                                <option value="hardware">Hardware</option>
                                <option value="software">Software</option>
                            </select>
                        </div>

                        <input type="text" id="contact" name="contact" placeholder="Enter your contact information" className={styles.input} required onChange={e => setContact(e.target.value)}/>

                        <button type="submit" className={styles.btn}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewTicket;