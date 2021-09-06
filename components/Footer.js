import styles from "@/styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.flex}>
        <p
          style={{
            marginRight: "20px",
            fontSize: "16px",
            fontWeight: "normal",
            textDecoration: "underline",
          }}
        >
          <Link href="/">
            <a>Home</a>
          </Link>
        </p>
        <span style={{ fontSize: "18px" }}>|</span>
        <p
          style={{
            marginLeft: "20px",
            fontSize: "16px",
            fontWeight: "normal",
            textDecoration: "underline",
          }}
        >
          <Link href="/about">
            <a>About</a>
          </Link>
        </p>
      </div>
      <p
        style={{
          padding: "20px",
          fontSize: "14px",
          fontWeight: "bold",
          fontColor: "#ccc",
        }}
      >
        Copyright&copy; My Events 2021
      </p>
    </footer>
  );
}
