import {React  , useState} from 'react';



import './style.css';

/*
import * as Icon from 'react-icons/fa';
import * as Icons from 'react-icons/ai';
import * as I from    'react-icons/wi';

*/
import {getData} from '../../API/API';

 function Esquerda() {
  


const [mostra, alterar]= useState(false);
const [cidade , setCidade] = ('Luanda');

const [tempo , setTempo] = ([]);

const pegaTempo = async () =>{

try{

    const data = await getData(cidade);
    setTempo(data);
    console.log(data);
}catch(error){
    console.log(error.message);
}

}

const mostrar = () => alterar(!mostra) ;
return(

    <section className="esq">
     <header id="cabeca">
    <button onClick={mostrar}>
        Pesquisar por locais
    </button>

 <i> </i>

     </header>

    <div id="imagem">
        
<img src="../../../Cloud-background.png" alt="" srcset=""/>
    </div>

   <div id="nuvem">
 <img src="../../../Shower.png" alt=""/>

   </div>
   <nav  className= {mostra ? 'menu active' :'menu'}>
     <i   onClick={mostrar}  ></i>

    <section>
   <input type="text" placeholder= "Pesquisar" />
   <button onClick={mostrar} >Já</button>

    </section>
     
     <h5 id="dev">
         Desenvolvido por Chefe@Mulato 
     </h5>

   </nav>
  
    <section id="temperatura">
<h1>15</h1>
<h5>ºC</h5>

    </section>

  <h1 id="chuva">
      Chuva porra
  </h1>
<h5 id="data">
Hoje. Quarta, 24 de Março

</h5>

<h5 id="localizacao">
Viana

</h5>


    </section>

)
}

export default  Esquerda;