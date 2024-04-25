import './Rodape.css';

interface RodapeProps {
    caminhoImagem: string
    caminhoImagem2: string
    caminhoImagem3: string
    caminhoImagem4: string
    texto: string
}

const Rodape = (props: RodapeProps) => {
    return (
        <footer className="footer">
            <div className="redes">
                <img id="img2" src={props.caminhoImagem2} alt="fb" />
                <img id="img1" src={props.caminhoImagem} alt="tt" />
                <img id="img3" src={props.caminhoImagem3} alt="ig" />
            </div>
            <img src={props.caminhoImagem4} alt="" />
            <p id="escrito">{props.texto}</p>
        </footer>
    )
}

export default Rodape;