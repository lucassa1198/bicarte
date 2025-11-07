import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Link from './Link.jsx';
import List from './List.jsx';
import Ul from './ul.jsx';
function App() {
  
  return (
    <>
  <Header corFundo='bg-black'
          corTexto='text-white'
          espacamento='p-[12.5rem]'
          
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
        modeloCaixa='flex'
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
    </>
  )
}

export default App;
