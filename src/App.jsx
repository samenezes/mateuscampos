import Cabecalho2 from '../../componentes/cabecalho'
import Conteudo2 from '../../componentes/conteudo'
import Rodape2 from '../../componentes/rodape'

function App() {
  

  window.addEventListener('load',function(){


    const valores=fetch('https://opentdb.com/api.php?amount=30&category=').then(res=>{
    
    res.json().then(dados=>{
    
        mostraDados(dados);
    });
    }).catch(erro=>{
    
        console.log(erro+" erro na requisição")
    
    });
    
    });

    function mostraDados(dados){
      const paises=document.querySelector('#paises');
  
      dados.forEach(acesso =>{
          paises.innerHTML += `
                              <td> ${acesso.category} </td> 
                              <td> ${acesso.correct_answer} </td> 
                            
                              
          `                                         
      })        
  }
    

  return (
    <>
     <Cabecalho2 />
     <Conteudo2 />
     <Rodape2 />
    </>
  )
  mostraDados();
}

export default App
