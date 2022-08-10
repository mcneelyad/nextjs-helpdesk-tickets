import { useState } from 'react';
import styles from '../styles/technicians/NewTechnicianModal.module.css';

const NewTechnicianModal = ({ handleClose, show, setShowTechModal }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const showHideClassName = show ? `${styles.modal} + " " + ${styles.display}` : `${styles.modal} + " " + ${styles.hide}`;

    const handleSubmit = e => {
        e.preventDefault();
        console.log('form submit')
        console.log(firstName, lastName, email, phone);
        setFirstName('');
        setLastName('');
        setEmail('')
        setPhone('');
        setShowTechModal(false);
    }

    return (
        <div className={showHideClassName}>
            <section className={styles.main}>
                <div className={styles.header}>
                    <h3>Add a New Technician</h3>
                </div>
                <div className={styles.body}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label htmlFor="firstName">First Name
                            <input type="text" name="firstName" placeholder="Enter your first name..." value={firstName} onChange={e => setFirstName(e.target.value)} required />
                        </label>
                        <label htmlFor="lastName">Last Name
                            <input type="text" name="lastName" placeholder="Enter your last name..." value={lastName} onChange={e => setLastName(e.target.value)} required />
                        </label>
                        <label htmlFor="email">Email
                            <input type="text" name="email" placeholder="Enter your email..." value={email} onChange={e => setEmail(e.target.value)} required />
                        </label>
                        <label htmlFor="phone">Phone
                            <input type="text" name="phone" placeholder="Enter your phone..." value={phone} onChange={e => setPhone(e.target.value)} required />
                        </label>

                        <div className={styles.footer}>
                            <button type="submit">Add</button>
                            <button onClick={handleClose}>Close</button>
                        </div>
                    </form>
                </div>

            </section>
        </div>
    );
};

export default NewTechnicianModal;