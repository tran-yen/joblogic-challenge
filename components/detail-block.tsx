import React from 'react';
import { Image, Slider} from 'antd';
import { employee } from './use';

const DetailBlock:React.FC<{emp:employee, onPopularityChange: (i:number) => any;}> = ({emp, onPopularityChange}) => {
    const [inputValue, setInputValue] = React.useState(emp.popularity);

    const onChangePopularity = (value: number) => {
        onPopularityChange(value);
    }

    const handleStyle = {
        background: 'white', 
        width:'25px', 
        height:'25px', 
        marginTop:'-10px', 
        borderColor:'white',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    }

    return <div className='block-wrapper'>
        <div className='detail-block'>
            <div className='detail-block__avt'>
                <Image src={`images/profile/${emp.image}`}/>
            </div>
            <div className='detail-block__info'>
                <p className='detail-block__info-name'>{emp.name}</p>
                <div className='detail-block__popularity'>
                    <span>Popularity</span>
                    <Slider
                        min={1}
                        max={5}
                        onChange={onChangePopularity}
                        value={typeof emp.popularity === 'number' ? emp.popularity : 0}
                        handleStyle={handleStyle}
                        trackStyle={{background: 'rgb(26, 29, 36)'}}
                    />
                </div>
                <div className='detail-block__info-biography'>
                    <p>Biography</p>
                    {emp.biography}
                </div>
            </div>
        </div>
    </div>
}

export default DetailBlock