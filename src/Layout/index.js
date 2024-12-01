import './style.css';
import { MdAccountCircle } from "react-icons/md";
import { RxPencil1 } from "react-icons/rx";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { BsQuestionDiamond } from "react-icons/bs";
import { RiAddBoxLine } from "react-icons/ri";
import Compartilhar from '../components/header/Compartilhar';
import Anuncios from '../components/header/Compartilhar/Anuncio';
import Post2 from '../components/header/Compartilhar/post2';

export default function Layout() {
    return (
        <>
            <div className='main'>

                <div className="box-topicos">

                    <div className="box-space">
                        <RiAddBoxLine size={18} color='#fff' />
                        <p>  Criar espaço</p>
                    </div>

                    <div className="box-space">
                        <img className='bx-topics' src='https://tse4.mm.bing.net/th?id=OIP.l5CDA2V-ajU9d3iVDkdwkwHaGl&pid=Api&P=0&h=180' />
                        <p>  Astronomia</p>
                    </div>

                    <div className="box-space">
                        <img className='bx-topics' src='https://tse4.mm.bing.net/th?id=OIP.DUNnlSlQXbVtILswcx0MWwHaEK&pid=Api&P=0&h=180' />
                        <p>  Economia</p>
                    </div>

                    <div className="box-space">
                        <img className='bx-topics' src='https://tse2.mm.bing.net/th?id=OIP.OAB4UoVmxpNVz5faAH5tIAHaEB&pid=Api&P=0&h=180' />
                        <p>  Filosofia</p>
                    </div>

                    <div className="box-space">
                        <img className='bx-topics' src='https://tse1.mm.bing.net/th?id=OIP.WyIHXAljwE_HCsUDyzhSCAHaEL&pid=Api&P=0&h=180' />
                        <p>  Literatura</p>
                    </div>

                    <div className="box-space">
                        <img className='bx-topics' src='https://tse2.mm.bing.net/th?id=OIP.ox3oLnINSPaobz3tpa-ZjAHaDo&pid=Api&P=0&h=180' />
                        <p>  História</p>
                    </div>

                    <div className="box-space">
                        <img className='bx-topics' src='https://tse4.mm.bing.net/th?id=OIP.0x5zDwWZXfIBHbfrXL5NRAHaGg&pid=Api&P=0&h=180' />
                        <p>  Psicologia</p>
                    </div>

                    <div className="box-space">
                        <img className='bx-topics' src='https://tse4.mm.bing.net/th?id=OIP.L_PKKFjMU3a9eFBl6msk4gHaE8&pid=Api&P=0&h=180' />
                        <p>  Tecnologia</p>
                    </div>

                    <div className="box-space">
                        <img className='bx-topics' src='https://tse1.mm.bing.net/th?id=OIP.DMbNiRd1Iw98lOibNxlVNwHaEK&pid=Api&P=0&h=180' />
                        <p>  Ciência</p>
                    </div>
                </div>

                <div className='second-column' >
                
                        <div className='user-share'>
                            <div className='unit'>
                                <div className='share'>
                                    <MdAccountCircle size={37} color='#fff' />
                                </div>
                                <div className='share'>
                                    <input placeholder='   O que você quer escrever ou compartilhar?' />
                                </div>
                            </div>
                            <div className='unite'>
                                    <button className='icon'><BsQuestionDiamond size={18} color='#fff' />  Perguntar</button>
                                    <button className='icon'><HiOutlinePencilSquare size={18} color='#fff' />  Responder</button>
                                    <button className='icon'><RxPencil1 size={18} color='#fff' />  Postar</button>
                            </div>
                        </div>

                    <div>
                        <Post2 />
                        </div>
                        <div>
                        <Compartilhar />
                    </div>

                </div>
                    <Anuncios />
            </div>
        </>
    );
}