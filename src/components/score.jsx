import { useEffect, useState, useRef } from 'react'
import Push_button from './push_button'
import './score.css';

function Score({isRunning, Time}){
    const [hajduk_score, setHajduk] = useState(0);
    const [dinamo_score, setDinamo] = useState(0);
    const [gameStats_Hajduk, setGameStats_Hajduk] = useState([]);
    const [gameStats_Dinamo, setGameStats_Dinamo] = useState([]);


    let min=Math.floor(Time / 1000 / 60 % 60);
    min<10? min="0"+min : min;
  
    const increaseHajduk=()=>{
        if(isRunning){
            setHajduk(hajduk_score+1);
            setGameStats_Hajduk(gameStats_Hajduk => [...gameStats_Hajduk, min+" Gol⚽"]);
        }
    }
  
    const decreaseHajduk=()=>{
        if(isRunning)
            if(hajduk_score>0){
                setHajduk(hajduk_score-1);
                setGameStats_Hajduk(gameStats_Hajduk => [...gameStats_Hajduk, min+" Ponisten gol🚫⚽"]);
            }
    }
  
    const increaseDinamo=()=>{
        if(isRunning){
            setDinamo(dinamo_score+1);
            setGameStats_Dinamo(gameStats_Dinamo => [...gameStats_Dinamo, min+" Gol⚽"]);
        }
    }
  
    const decreaseDinamo=()=>{
        if(isRunning){
            if(dinamo_score>0){
                setDinamo(dinamo_score-1);
                setGameStats_Dinamo(gameStats_Dinamo => [...gameStats_Dinamo, min+" Ponisten gol🚫⚽"]);
            }
        }
    }

    const Zuti_Hajduk=()=>{
        if(isRunning){
            setGameStats_Hajduk(gameStats_Hajduk => [...gameStats_Hajduk, min+" Zuti karton"]);
        }
    }

    const Crveni_Hajduk=()=>{
        if(isRunning){
            setGameStats_Hajduk(gameStats_Hajduk => [...gameStats_Hajduk, min+" Crveni karton🚫"]);
        }
    }
    
    const Zuti_Dinamo=()=>{
        if(isRunning){
            setGameStats_Dinamo(gameStats_Dinamo => [...gameStats_Dinamo, min+" Zuti karton"]);
        }
    }

    const Crveni_Dinamo=()=>{
        if(isRunning){
            setGameStats_Dinamo(gameStats_Dinamo => [...gameStats_Dinamo, min+" Crveni karton 🚫"]);
        }
    }

    return(
        <>
            <div id="mainBox">
                <div id="Buttons_score">

                    <div id="buttons_div">
                        <Push_button label="+" action={increaseHajduk}></Push_button>
                        <Push_button label="-" action={decreaseHajduk}></Push_button>
                        <Push_button label="Zuti karton" action={Zuti_Hajduk}></Push_button>
                        <Push_button label="Crveni karton" action={Crveni_Hajduk}></Push_button>
                    </div>

                    <h1>{hajduk_score}:{dinamo_score}</h1>

                    <div id="buttons_div">
                        <Push_button label="+" action={increaseDinamo}></Push_button>
                        <Push_button label="-" action={decreaseDinamo}></Push_button>
                        <Push_button label="Zuti karton" action={Zuti_Dinamo}></Push_button>
                        <Push_button label="Crveni karton" action={Crveni_Dinamo}></Push_button>
                    </div>
                </div>

                <div id="Stats_div">

                    <div className='stats_class'>
                        {gameStats_Hajduk.map((element, index) => (
                    <h3 key={index}>{element}</h3>
                    ))}
                    </div>

                    <div className='stats_class'>
                        {gameStats_Dinamo.map((element, index) => (
                    <h3 key={index}>{element}</h3>
                    ))}
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Score;

