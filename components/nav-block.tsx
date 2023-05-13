import { Image} from 'antd';
import { employee } from './use';
import { useState } from 'react';

interface cProp {
    list:Array<employee>;
    active: number;
    onSelectionChange: (i:number) => any;
}


const NavBlock:React.FC<cProp> = (p) => {
    const [activeI, setActiveI] = useState<number>(p.active);

    const onclickHandle =(index: number) => {
        p.onSelectionChange(index);
        setActiveI(index);
    }

    return <div className='block-wrapper'>
        <div className='nav-block'>
            <div className='nav-block__logo'>
            <Image src= "images/_logo/the-godfather.svg"/>
            </div>
            <ul className='nav-block__list'>
                {
                    p.list.map((item, index) => 
                    <li 
                        className={`nav-block__item ${index === activeI ? '--active' : ''}`} 
                        key={index} 
                        onClick={() => 
                            onclickHandle(index)
                        }>
                        <p style={{fontSize: item.popularity*10}}>{item.name}</p>
                    </li>
                    )
                }
            </ul>
        </div>
    </div>
}

export default NavBlock