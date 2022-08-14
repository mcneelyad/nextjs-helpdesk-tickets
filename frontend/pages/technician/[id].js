import styles from '../../styles/technicians/TechnicianById.module.css';
''

const TechnicianById = ({ technician }) => {

    return (
        <div className={styles.container}>
            <div className={styles.technicianDetails}>
                <h2>{technician.firstName} {technician.lastName}</h2>
                <p>{technician.email}</p>
                <p>{technician.phone}</p>
            </div>

        </div>
    )
}

export default TechnicianById;

export async function getStaticPaths() {
    const res = await fetch('http://localhost:5000/technicians');
    const technicians = await res.json();

    const paths = technicians.map(tech => {
        return { params: { id: tech.id.toString() } }
    });

    return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
    const res = await fetch(`http://localhost:5000/technicians/${params.id}`);
    const technician = await res.json();

    return {
        props: { technician: technician[0] }
    }
}