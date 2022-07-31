import Link from 'next/link';

const Navbar = () => {
    const styles = {
        display: "flex",
        background: "grey",
        justifyContent: "space-between",
        color: "white"
    };
    return (
        <div className="navbar" style={styles}>
            <div className="navbar-left">
                <div className="logo">logo</div>
            </div>
            <div className="navbar-right">
                <div className="navbar-items">
                    <div className="navbar-item">
                        <Link href='/tickets'>
                            <a>Submit a Ticket</a>
                        </Link>
                    </div>
                    <div className="navbar-item">
                        <Link href='/login'>
                            <a>Signup / Login</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;