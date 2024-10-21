import { useState } from 'react'
import './App.css'
import { mineSquare } from './constants.js'

const mineArray = mineSquare(25, 5)

const Square = ({ children, updateBoard, mineSquare, index}) => {
    const handleClick = () => {
        updateBoard(index)
    }
    return (
        <div onClick={handleClick} className="square">
            {children}
        </div>
    )
}

export function App() {
    const [board, setBoard] = useState(Array(25).fill(null))

    const updateBoard = (index) => {
        const newBoard = [... board]
        if (board[index] == null) {
            newBoard[index] = index
        } else {
            newBoard[index] = null
        }
        setBoard(newBoard)
        console.log(mineArray)
    }

    return (
        <main className='board'>
            <h1>Minesweeper</h1>
            <section className="game">
                {
                    board.map((_, index) => {
                        return (
                            <Square
                                key={index}
                                index={index}
                                type={mineSquare}
                                updateBoard={updateBoard}
                            >
                                {board[index]}
                            </Square>
                        )
                    })
                }
            </section>
        </main>
    )
}