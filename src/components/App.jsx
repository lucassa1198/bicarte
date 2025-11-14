import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Link from './Link.jsx';
import List from './List.jsx';
import Ul from './ul.jsx';
import Box from './Box.jsx';
import Drawer from './Drawer.jsx';
import Heading from './Heading.jsx';
import Images from './images.jsx';
import Main from './Main.jsx';
import Paragrafo from './paragrafo.jsx';
import Section from './Section.jsx';
import Button from './button.jsx';

function App() {
  
  return (
    <>
  <Header corFundo='bg-black'
          corTexto='text-white'
          espacamento='px-[12.5rem] py-[1rem]'
          
          >
    <Nav  modeloCaixa='flex'
          justificacao ='justify-between'
          altura='h-[6rem]'
          alinhamento='items-center'
    >
      <Link texto= 'bicarte' tamanhoFonte='text-5xl'
      caixaFonte='uppercase'
      pesoFonte='font-black' 
      entreLetras='tracking-[0.5rem]'/>
      <Ul>
        <List
        modeloCaixa='flex flex-row'
        distanciamento='gap-[2.5rem]'
        caixaFonte='uppercase'
        
                >
          <Link texto= 'modelos'
          tamanhoFonte='text-lg' 
          caixaFonte='uppercase'
          pesoFonte='semi-bold'
          efeitoSobre='hover:text-yellow-500' 
                />
        </List>
        <List>
          <Link texto= 'contato'
          tamanhoFonte='text-lg'
          caixaFonte='uppercase'
          pesoFonte='semi-bold'
          efeitoSobre='hover:text-yellow-500'/>
        </List>
        <List>
          <Link texto= 'sobre'
          tamanhoFonte='text-lg'
          caixaFonte='uppercase'
          pesoFonte='semi-bold'
          efeitoSobre='hover:text-yellow-500'/>
        </List>
      </Ul>
    </Nav>
  </Header>
  <Main>
    <Section corFundo='bg-black'
    Altura='h-[37.5rem]'
    espacamento='px-50'
    modeloCaixa='flex'
    corTexto='text-white'
    >
      <Box
      largura='w-[50%]'
      >
        <Heading tamanhoFonte='text-[4rem]'
        pesoFonte='font-bold'
        >
          Bicicletas feitas sob medida
          
            <Drawer texto='.' corTexto='text-yellow-500'/>
        </Heading>
       
        <Paragrafo 
        texto='Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para você. Explore o mundo na sua velocidade com a Bikcraft.'
       tamanhoFonte='text-[1.25rem]'
        />
         <Button 
        texto= "escolha sua Bike"
        corFundo='bg-yellow-500'  
        cursor='cursor-pointer' />
        
       </Box>
      <Box
      largura='w-[50%]'
      >
        <Images 
        fonte='https://www.origamid.com/projetos/bikcraft/img/fotos/introducao.jpg'
        />
      </Box>
    </Section>
  </Main>
    </>
  )
}

export default App;
