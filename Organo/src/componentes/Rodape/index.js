import './Rodape.css';

const Rodape = (props) => {
    return (
        <footer className="footer">
            <div className="redes">
                <img id="img2" src={props.caminhoImagem2} alt="fb" />
                <img id="img1" src={props.caminhoImagem} alt="tt" />
                <img id="img3" src={props.caminhoImagem3} alt="ig" />
            </div>
            <img src={props.caminhoImagem4} alt="" />
            <p id="escrito">Desenvolvido por Klaus.</p>
        </footer>
    )
}

export default Rodape;