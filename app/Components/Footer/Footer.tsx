import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className='content'>
                <div id="Doação" className="donation">
                    <p>Número para doação: (XX) XXXXX-XXXX</p>
                </div>
                <div id="Localização" className="location">
                    <h2>Nos visite!</h2>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9565.796746802538!2d-52.090449985623266!3d-32.04165349806442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95119c405aa4ef1b%3A0x752ea35e32c6e091!2sIGREJA%20DO%20EVANGELHO%20QUADRANGULAR%20%C2%B02a!5e0!3m2!1spt-BR!2sbr!4v1717009580702!5m2!1spt-BR!2sbr" 
                        allowFullScreen={true}
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className="contacts">
                    Email: XXXXXXXX@gmail.com <br />
                    Facebook: XXXXXXXXX <br />
                    Número para contato: (XX) XXXXX-XXXX <br />
                </div>
            </div>
            <span>Segunda Igreja Quadrangular BGV - Todos os direitos reservados</span>
        </footer>
    )
}

export default Footer;
