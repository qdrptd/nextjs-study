import { NextPage } from "next";
import { useEffect, useState } from "react";




const counter1: NextPage = () =>{
    
    const [counts, setCounts] = useState<number[]>([0,]);
    useEffect(() =>{
        setCounts([0]);
    },[])

    function addSome(idx: number, amount: number){
        setCounts((counterArray)=>{
            let newCounters: number[] = [...counterArray];
            newCounters[idx] = newCounters[idx] + amount;
            return newCounters;
        })
    }

    function addCounter(){
        setCounts((counterArray: number[])=>{
            return [...counterArray, 0];
        })
    }
    return(
        <div>
            <h2 className="text-2xl font-bold text-center mb-4">First Counter</h2>
            <div className="flex justify-center">
                <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded" onClick={addCounter}>Add a Counter</button>
            </div>


            {
                counts.map((c: number, idx: number) => {
                    return(
                        <div className="w-min">
                            <p className="text-lg text-center">Counter {idx}</p>
                            <div className="p-4 flex items-center space-x-4">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => addSome(idx, 1)}>+1</button>
                                <div>{c}</div>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => addSome(idx, -1)}>-1</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default counter1;