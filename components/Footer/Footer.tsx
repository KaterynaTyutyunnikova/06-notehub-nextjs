import css from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Tyutyunnikova</p>
          <p>
            Contact us:
            <a href="katia20177@ukr.net">katia20177@ukr.net</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
