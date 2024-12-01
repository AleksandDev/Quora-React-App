import './style.css';
import { HiOutlineX } from "react-icons/hi";
import { FaRegComment } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";
import { MdMoreHoriz } from "react-icons/md";
import { LuArrowBigUp } from "react-icons/lu";
import { LuArrowBigDown } from "react-icons/lu";

export default function Compartilhar() {
    return (

        <div className='conteiner-comp'>

            <div className='user-post'>

                <section className='user-informations-section'>
                    <div className='user-informations'>
                        <img className='user-img' src='https://i.pinimg.com/474x/a1/8c/b3/a18cb35bcaac8faa82082b2bc113eae1.jpg' />

                        <div className='user-informations-elements'>
                            <p className='user-informations-name'><strong>  Exploring Unknowns</strong>  ·  <a class='a' href=''>Seguir</a></p>
                            <p className='user-informations-desc'> Pós-Graduando em Neurociências  ·  28 de Novembro.</p>
                        </div>
                </div>
                    <div><HiOutlineX size={20} color='#fff' /></div>
                </section>


                <div className='post-content'>

                    <p className='post-content-title'><strong>  Quais fatos são difíceis de acreditar?</strong></p>
                    <p className='post-content-text'>1. Mais de 7.000 pessoas morrem todos os anos por causa da má caligrafia do médico.</p>
                    <img src='https://qph.cf2.quoracdn.net/main-qimg-30bf52a7c969ec9a9cfafbb5376f3821' />

                    <p className='post-content-text'>2. Leva 10 minutos para uma pessoa se afogar na água salgada.</p>
                    <img src='https://qph.cf2.quoracdn.net/main-qimg-b7621f724eb93a4777d2e8f8125070e2-pjlq' />

                    <p className='post-content-text'>3. Os cães gostam de brinquedos estridente porque isso os lembra de um pequeno animal sendo morto.</p>
                    <img src='https://qph.cf2.quoracdn.net/main-qimg-162a351c455d00bb392b84e099469259-lq' />

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