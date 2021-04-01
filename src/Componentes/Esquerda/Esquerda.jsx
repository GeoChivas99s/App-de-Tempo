import {React  , useState} from 'react';



import './style.css';

/*
import * as Icon from 'react-icons/fa';
import * as Icons from 'react-icons/ai';
import * as I from    'react-icons/wi';

*/


 function Esquerda() {
  
    const apiKey = '856a6e3cecb7d692a9fd459e9937e951';

      const  getData  = async () => {
   
        const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2e5660b01e0572c13d96b747b0d2555a`)
        const res = await data.json();
        console.log(res);
        setTempo(res);
        return res;
 
}

const [mostra, alterar]= useState(false);
const [cidade , setCidade] = ('Luanda');

const [tempo , setTempo] = ([]);



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
   <button onClick={getData } >Já</button>

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