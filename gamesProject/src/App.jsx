import { useState } from 'react'
import './App.css'

const Square = ({ children, updateBoard, index}) => {
    return(
        <div className="square">
            {children}
        </div>
    )
}

export function App () {
    const [board, setBoard] = useState(Array(25).fill(null))

    return (
        <main className='board'>
            <h1>Minesweeper</h1>
            <section className="game">
                {
                    board.map((_, index) => {
                        return (
                            <Square key={index} index={index}>
                                
                            </Square>
                        )
                    })
                }
            </section>
        </main>
    )
}