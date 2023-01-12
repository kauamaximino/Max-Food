import styles from './footer.module.scss';

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.news}>
          <div>
            <p>Fique Por dentro das nossas novidades</p>
            <p>Se inscreva em nossas newsletter e receba mais informações</p>
          </div>
          <input type="name" placeholder='Seu nome é:'/>
          <input type="name" placeholder='Qual seu e-mail?'/>
          <button>Quero me inscrever</button>
        </div>
      </footer>
    </>
  ) 
}

export default Footer;