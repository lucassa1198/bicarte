
const Section = ({children, corFundo, corTexto, Altura, espacamento, modeloCaixa }) => {

const style = `
${corFundo}
${Altura}
${espacamento}
${modeloCaixa}
${corTexto}`;

  return (
    <>
      <section className={style}>{children }</section>
    </>
  );
}

export default Section;
