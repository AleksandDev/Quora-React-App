import './post2.css';
import { HiOutlineX } from "react-icons/hi";
import { FaRegComment } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";
import { MdMoreHoriz } from "react-icons/md";
import { LuArrowBigUp } from "react-icons/lu";
import { LuArrowBigDown } from "react-icons/lu";

export default function Post2() {

    return (
        <div className='conteiner-comp'>

            <div className='user-post'>

                <section className='user-informations-section'>
                    <div className='user-informations'>
                        <img className='user-img' src='https://i.pinimg.com/474x/ec/85/9a/ec859a42e2f21444c261a2727542755f.jpg' />

                        <div className='user-informations-elements'>
                            <p className='user-informations-name'><strong>  Mente Inquisitiva</strong>  ·  <a class='a' href=''>Seguir</a></p>
                            <p className='user-informations-desc'> Estudante de História  ·  01 de Janeiro</p>
                        </div>
                </div>
                    <div><HiOutlineX size={20} color='#fff' /></div>
                </section>


                <div className='post-content'>

                    <p className='post-content-titlea'><strong>  Qual fato absurdo sobre Genghis Khan?</strong></p>
                    <p className='post-content-textb'><strong>Genghis Khan</strong> foi um dos maiores sedutores da história, com tantas mulheres que hoje estima-se que <strong>uma em cada 200 pessoas seja descendente dele</strong>.</p>

                    <img src='https://qph.cf2.quoracdn.net/main-qimg-40837928c14a3eadf64d38efdfb02fda-lq' />

                    <p className='post-content-textb'>Quando faleceu em 1227, aos 72 anos, além de ter deixado um vasto império, também deixou um grande número de filhos.</p>

                    <p className='post-content-textb'>Um estudo conduzido pelo geneticista <strong>Bryan Sykes</strong>, da Universidade de Oxford, revelou que cerca de <strong>8% da população masculina na Ásia compartilha um cromossomo Y</strong> idêntico, que se originou há aproximadamente mil anos. Para realizar essa pesquisa, Sykes analisou 5.000 amostras de DNA de 127 países asiáticos diferentes, e os resultados mostraram que cerca de <strong>16 milhões de pessoas</strong> compartilham a mesma linhagem genética. Na <strong>Mongólia</strong>, um país com apenas dois milhões de habitantes, <strong>cerca de 200 mil pessoas possuem essa semelhança genética</strong>, o que sugere que todas elas são descendentes de Genghis Khan.</p>

                    <p className='post-content-textb'>Após suas vitórias militares, Genghis Khan costumava pegar para si as mulheres mais bonitas das aldeias que conquistava, formando assim um harém imenso.</p>

                    <div className='reac'>
                        <div className='one'>
                        <button className='reag'>   <LuArrowBigUp size={20} color='#fff' /> Dar um voto positivo</button>
                        <button className='reag'>   <LuArrowBigDown size={20} color='#fff' /> Dar um voto negativo</button>
                        <FaRegComment size={20} color='#fff' />
                        <TfiReload size={20} color='#fff' />
                        </div>
                        <div>
                        <MdMoreHoriz size={20} color='#fff' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}