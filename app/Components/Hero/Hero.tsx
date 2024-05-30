import Image from "next/image";
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1 className="hero-h1">Os 4 símbolos da Igreja Quadrangular</h1>
                <p className="hero-p">
                    A cruz representa Jesus como salvador; a Igreja Quadrangular também associa esse ponto com a cor vermelha, a cara de um homem e o evangelho de Lucas; <br />
                    O cálice representa a cura divina; também associada à cor azul, à cara de um boi e ao evangelho de Marcos; <br />
                    A pomba representa o batismo no Espírito Santo; também associada à cor amarela, à cara de um leão e ao evangelho de João; <br />
                    A coroa representa a segunda vinda de Jesus como rei; também associada à cor roxa, à cara de uma águia e ao evangelho de Mateus; <br />
                </p>
            </div>
        </div>
    )
}

export default Hero;
