import { IoSearch } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { FaRegListAlt } from "react-icons/fa";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdAccountCircle } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { GoBell } from "react-icons/go";
import { BsGlobe2 } from "react-icons/bs";

import './style.css';


export default function Headers() {

    return (
        <header className="header" >

            <div className="conteiner" >

                <div>
                <img src="https://i.postimg.cc/yYzJ5wSw/quora-1-logo-png-transparent-removebg-preview.png" />
                </div>

                <div className="menu-icons">
                    <div>
                    <IoMdHome size={29} color='#fff' />
                    </div>
                    <div>
                    <FaRegListAlt size={26} color='#fff' />
                    </div>
                    <div>
                    <HiOutlinePencilSquare size={26} color='#fff' /> 
                    </div>
                    <div>
                    <HiOutlineUsers size={26} color='#fff' />
                    </div>
                    <div>
                    <GoBell size={26} color='#fff' />
                    </div>
                </div>

                <div className="input-busca">
                    <IoSearch color='#8e8e8e' />
                    <input placeholder='Pesquisar no Quora' />
                </div>

                <div className="menu-icons"> 
                    <MdAccountCircle size={28} color='#fff' />
                    <BsGlobe2 size={26} color='#fff' />
                </div>

                <div>
                    <button>Adicionar pergunta</button>
                </div>

            </div>

        </header>
    )
}