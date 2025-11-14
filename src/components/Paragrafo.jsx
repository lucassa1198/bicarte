
const Paragrafo = ({tamanhoFonte, texto}) => {

const style = `
${tamanhoFonte}


`;

  return (
    <>
      <p className={style}>{texto}</p>
    </>
  );
}

export default Paragrafo;
