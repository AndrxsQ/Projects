import { useState } from 'react'
import './App.css'
import { mineSquare } from './constants.js'

const nSquares = 100
const nMines =  20
let mineArray = mineSquare(nSquares, nMines)

const Square = ({ children, updateBoard, index }) => {
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
    const [board, setBoard] = useState(Array(nSquares).fill(null))
    let [gameOver, setGameOver] = useState(false)
    const checkMine = (index) => {
        for (let i = 0; i < mineArray.length; i++) {
            if (index == mineArray[i]) {
                return true
            }
        }
        return false
    }

    const showMines = (boardToShow) => {
        for (let i = 0; i < mineArray.length; i++) {
            if(boardToShow[mineArray[i]] != "M") {
                boardToShow[mineArray[i]] = "M"
                setBoard(boardToShow)
            }
        }
        setGameOver(true)
    }

    const restart = () => {
        setBoard(Array(nSquares).fill(null))
        setGameOver(false)
        mineArray = mineSquare(nSquares, nMines)
    }

    const updateBoard = (index) => {
        const newBoard = [...board]
        if (board[index]) { return }
        if (checkMine(index)) {
            newBoard[index] = "M"
            setBoard(newBoard)
            showMines(newBoard)
            return
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

            {
                gameOver == true && (
                    <section className="winner">
                        <div className="text">
                            <h2>
                                You have failed
                            </h2>
                            <footer>
                                <button onClick={restart}>Play Again</button>
                            </footer>
                        </div>
                    </section>
                )
            }
        </main>
    )
}