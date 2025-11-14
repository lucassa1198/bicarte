
const Heading = ({children, tamanhoFonte, pesoFonte}) => {

const style = `
${tamanhoFonte}
${pesoFonte}

`;

  return (
    <>
      <h1 className={style}>{children}</h1>
    </>
  );
}

export default Heading;
