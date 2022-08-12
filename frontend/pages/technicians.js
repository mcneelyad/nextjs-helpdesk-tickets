import { Table } from "@nextui-org/react";
import { useState } from 'react';
import NewTechnicianModal from "../components/NewTechModal";

import styles from '../styles/technicians/technicians.module.css';

const TechniciansList = ({ technicians }) => {
    const [showTechModal, setShowTechModal] = useState(false);

    const showModal = () => setShowTechModal(true);
    const hideModal = () => setShowTechModal(false);

    return (
        <div className={styles.techniciansListPage}>
            <p>Technicians</p>
            <NewTechnicianModal setShowTechModal={setShowTechModal} show={showTechModal} handleClose={hideModal} />
            <button className={styles.openModalBtn} type="button" onClick={showModal}>
                Add Technician
            </button>
            <div className="techniciansList">
                <Table css={{ height: "auto", minWidth: "100%" }}>
                    <Table.Header>
                        <Table.Column>ID</Table.Column>
                        <Table.Column>First Name</Table.Column>
                        <Table.Column>Last Name</Table.Column>
                        <Table.Column>Email</Table.Column>
                        <Table.Column>Phone Number</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {technicians.length ?
                            technicians.map(tech => {
                                return (<Table.Row key={tech.id}>
                                    <Table.Cell>{tech.id}</Table.Cell>
                                    <Table.Cell>{tech.firstName}</Table.Cell>
                                    <Table.Cell>{tech.lastName}</Table.Cell>
                                    <Table.Cell>{tech.email}</Table.Cell>
                                    <Table.Cell>{tech.phone}</Table.Cell>
                                </Table.Row>)
                            }) :
                            <Table.Row>
                                <Table.Cell ></Table.Cell>
                            </Table.Row>}
                    </Table.Body>
                </Table>
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