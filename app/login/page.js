import classes from "./admin-login.module.css";

export default function AdminLoginPage() {
  // This would typically point to a Server Action
  async function handleLogin(formData) {
    "use server";
    const email = formData.get("email");
    const password = formData.get("password");
    // Logic to authenticate admin...
  }

  return (
    <main className={classes.loginContainer}>
      <section className={classes.loginCard}>
        <h1>Admin Login</h1>

        <form action={handleLogin}>
          <div className={classes.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="admin@example.com"
            />
          </div>

          <div className={classes.formGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>

          <button type="submit" className={classes.loginButton}>
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}
