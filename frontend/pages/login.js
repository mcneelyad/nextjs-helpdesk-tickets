import styles from '../styles/login.module.css';

const Login = () => {
    return (
        <div className={styles.login}>
            <div className={styles.loginBox}>
                <h2>Account Login</h2>

                <form method="post">
                    <div className={styles.container}>
                        <input type="text" placeholder="Enter Username" className={styles.input} name="username" required autoComplete='false'/>
                        <input type="password" placeholder="Enter Password" className={styles.input} name="password" required />
                        <button type="submit" className={styles.btn}>Login</button>
                    </div>

                    <div className={styles.container}>
                        <span class={styles.psw}>
                            <a href="#">Forgot password?</a>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;