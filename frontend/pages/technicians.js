import { useState } from 'react';
import NewTechnicianModal from "../components/NewTechModal";

import styles from '../styles/technicians/technicians.module.css';

const TechniciansList = ({ technicians }) => {
    const [showTechModal, setShowTechModal] = useState(false);

    const showModal = () => setShowTechModal(true);
    const hideModal = () => setShowTechModal(false);

    // const technicians = [
    //     {
    //         "id": 1,
    //         "firstName": "John",
    //         "lastName": "Smith",
    //         "email": "john@test.com",
    //         "phone": "704-123-4567"
    //     },
    //     {
    //         "id": 2,
    //         "firstName": "John",
    //         "lastName": "Smith",
    //         "email": "john@test.com",
    //         "phone": "704-123-4567"
    //     },
    //     {
    //         "id": 3,
    //         "firstName": "John",
    //         "lastName": "Smith",
    //         "email": "john@test.com",
    //         "phone": "704-123-4567"
    //     }
    // ]

    return (
        <div className={styles.techniciansListPage}>
            <p>Technicians</p>
            <NewTechnicianModal setShowTechModal={setShowTechModal} show={showTechModal} handleClose={hideModal} />
            <button className={styles.openModalBtn} type="button" onClick={showModal}>
                Add Technician
            </button>
            <div className="techniciansList">
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone #</th>
                        </tr>
                    </thead>
                    <tbody>
                        {technicians.length ?
                            technicians.map(tech => {
                                return <tr className={styles.tr} key={tech.id}>
                                    <td>{tech.id}</td>
                                    <td>{tech.firstName}</td>
                                    <td>{tech.lastName}</td>
                                    <td>{tech.email}</td>
                                    <td>{tech.phone}</td>
                                </tr>
                            }) :
                            <tr className={styles.tr} colSpan="4">
                                No technicians found
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export async function getStaticProps(context) {
    const res = await fetch('http://localhost:5000/technicians')
    const technicians = await res.json();

    return {
        props: { technicians: technicians },
    }
}

export default TechniciansList;