import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>To-Do App</h1>
      </header>
      <main style={styles.main}>{children}</main>
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} To-Do App. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: { display: "flex", flexDirection: "column", minHeight: "100vh" },
  header: { backgroundColor: "#4CAF50", color: "white", padding: "10px", textAlign: "center" },
  main: { flex: 1, padding: "20px" },
  footer: { backgroundColor: "#f1f1f1", textAlign: "center", padding: "10px" },
};

export default MainLayout;
