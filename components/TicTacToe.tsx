'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winLine, setWinLine] = useState(null);
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'draw'
  const [scores, setScores] = useState({ X: 0, O: 0, draw: 0 });
  const [aiMode, setAiMode] = useState(true); // AI mode is on by default
  const [aiPlayer, setAiPlayer] = useState('O'); // AI plays as O by default
  const [difficulty, setDifficulty] = useState('medium'); // 'easy', 'medium', 'hard'

  // Process the AI move when it's AI's turn
  useEffect(() => {
    if (aiMode && !winLine && gameStatus === 'playing' && board.includes(null)) {
      // If it's AI's turn, make a move after a short delay
      if ((aiPlayer === 'O' && !isXNext) || (aiPlayer === 'X' && isXNext)) {
        const timer = setTimeout(() => {
          makeAiMove();
        }, 500); // Delay for 500ms to make it feel more natural
        return () => clearTimeout(timer);
      }
    }
  }, [board, isXNext, aiMode, aiPlayer, gameStatus, winLine]);

  // Check for a winner or draw after each move
  useEffect(() => {
    const result = calculateWinner(board);
    if (result) {
      setWinLine(result.line);
      setGameStatus('won');
      setScores(prev => ({ ...prev, [result.winner]: prev[result.winner] + 1 }));
    } else if (!board.includes(null)) {
      setGameStatus('draw');
      setScores(prev => ({ ...prev, draw: prev.draw + 1 }));
    }
  }, [board]);

  const makeAiMove = () => {
    if (gameStatus !== 'playing' || !board.includes(null)) return;

    let moveIndex;
    const currentPlayer = isXNext ? 'X' : 'O';

    switch (difficulty) {
      case 'easy':
        moveIndex = makeRandomMove();
        break;
      case 'hard':
        moveIndex = makeBestMove(board, currentPlayer);
        break;
      case 'medium':
      default:
        // 50% chance of making the best move, 50% chance of random move
        moveIndex = Math.random() > 0.5 
          ? makeBestMove(board, currentPlayer) 
          : makeRandomMove();
        break;
    }

    if (moveIndex !== null) {
      const newBoard = [...board];
      newBoard[moveIndex] = currentPlayer;
      setBoard(newBoard);
      setIsXNext(!isXNext);
    }
  };

  // Random move for easy AI
  const makeRandomMove = () => {
    const availableMoves = board
      .map((cell, index) => cell === null ? index : null)
      .filter(index => index !== null);
    
    if (availableMoves.length === 0) return null;
    
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
  };

  // Minimax algorithm for hard AI
  const makeBestMove = (currentBoard, player) => {
    // Find all available moves
    const availableMoves = currentBoard
      .map((cell, index) => cell === null ? index : null)
      .filter(index => index !== null);
    
    if (availableMoves.length === 0) return null;
    
    // If there's only one move available, take it
    if (availableMoves.length === 1) {
      return availableMoves[0];
    }
    
    // If it's the first move, choose a corner or center for better strategy
    if (availableMoves.length === 9) {
      const strategicMoves = [0, 2, 4, 6, 8]; // corners and center
      return strategicMoves[Math.floor(Math.random() * strategicMoves.length)];
    }

    // Look for winning move
    for (const moveIndex of availableMoves) {
      const boardCopy = [...currentBoard];
      boardCopy[moveIndex] = player;
      
      const result = calculateWinner(boardCopy);
      if (result && result.winner === player) {
        return moveIndex; // Found a winning move
      }
    }
    
    // Look for blocking opponent's winning move
    const opponent = player === 'X' ? 'O' : 'X';
    for (const moveIndex of availableMoves) {
      const boardCopy = [...currentBoard];
      boardCopy[moveIndex] = opponent;
      
      const result = calculateWinner(boardCopy);
      if (result && result.winner === opponent) {
        return moveIndex; // Block opponent's winning move
      }
    }
    
    // Try to take the center if available
    if (currentBoard[4] === null) {
      return 4;
    }
    
    // Take a corner if available
    const corners = [0, 2, 6, 8].filter(index => currentBoard[index] === null);
    if (corners.length > 0) {
      return corners[Math.floor(Math.random() * corners.length)];
    }
    
    // Take any available edge
    const edges = [1, 3, 5, 7].filter(index => currentBoard[index] === null);
    if (edges.length > 0) {
      return edges[Math.floor(Math.random() * edges.length)];
    }
    
    // Fallback to random move
    return makeRandomMove();
  };

  const handleClick = (index) => {
    if (board[index] || gameStatus !== 'playing') return;
    
    // If it's AI's turn, don't allow human to make a move
    if (aiMode && ((aiPlayer === 'O' && !isXNext) || (aiPlayer === 'X' && isXNext))) {
      return;
    }

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinLine(null);
    setGameStatus('playing');
  };

  const toggleAiMode = () => {
    setAiMode(!aiMode);
    handleReset();
  };

  const toggleAiPlayer = () => {
    setAiPlayer(aiPlayer === 'X' ? 'O' : 'X');
    handleReset();
  };

  const changeDifficulty = (level) => {
    setDifficulty(level);
    handleReset();
  };

  // Check if the cell is part of the winning line
  const isWinningCell = (index) => {
    return winLine && winLine.includes(index);
  };

  // Determine cell background gradient based on its state
  const getCellBackgroundStyle = (index, value) => {
    if (isWinningCell(index)) {
      return 'from-green-400 to-green-600';
    }
    
    if (value === 'X') {
      return 'from-blue-400 to-blue-600';
    } else if (value === 'O') {
      return 'from-red-400 to-red-600';
    }
    
    return 'from-purple-500/30 to-indigo-500/30';
  };

  const getCellContent = (value) => {
    if (!value) return null;
    
    return (
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 20 }}
        className="w-full h-full flex items-center justify-center"
      >
        {value === 'X' ? 
          <svg className="w-2/3 h-2/3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg> 
          : 
          <svg className="w-2/3 h-2/3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="8"></circle>
          </svg>
        }
      </motion.div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center py-3.5 w-full  bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white rounded-lg">
      <motion.h1 
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
      >
        ✨ Tic Tac Toe ✨
      </motion.h1>

      {/* Game Controls */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-wrap gap-2 justify-center mb-2"
      >
        <button 
          onClick={toggleAiMode}
          className={`px-2 py-1 text-xs rounded-md transition-all ${aiMode ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-600 hover:bg-gray-700'}`}
        >
          AI: {aiMode ? 'ON' : 'OFF'}
        </button>
        
        {aiMode && (
          <>
            <button 
              onClick={toggleAiPlayer}
              className="px-2 py-1 text-xs bg-blue-500 hover:bg-blue-600 rounded-md transition-all"
            >
              AI Plays: {aiPlayer}
            </button>
            
            <select 
              value={difficulty}
              onChange={(e) => changeDifficulty(e.target.value)}
              className="px-2 py-1 text-xs bg-purple-500 hover:bg-purple-600 rounded-md transition-all"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </>
        )}
      </motion.div>

      {/* Scores */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-2 flex space-x-6 text-sm"
      >
        <div className="text-center">
          <span className="text-blue-400 font-bold">X</span>
          <div className="text-lg font-bold">{scores.X}</div>
        </div>
        <div className="text-center">
          <span className="text-yellow-400 font-bold">Draw</span>
          <div className="text-lg font-bold">{scores.draw}</div>
        </div>
        <div className="text-center">
          <span className="text-red-400 font-bold">O</span>
          <div className="text-lg font-bold">{scores.O}</div>
        </div>
      </motion.div>

      {/* Game Board */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-3 gap-2 relative"
      >
        {board.map((cell, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: cell ? 1.02 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-16 h-16 rounded-lg text-xl font-bold 
                       bg-gradient-to-br ${getCellBackgroundStyle(index, cell)} 
                       shadow-md shadow-purple-500/20 transition-colors duration-300
                       border border-white/10 backdrop-blur-sm`}
            onClick={() => handleClick(index)}
          >
            {getCellContent(cell)}
          </motion.button>
        ))}
      </motion.div>

      {/* Game Status */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-2 text-sm"
      >
        {gameStatus === 'won' ? (
          <motion.p
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-green-400 font-bold"
          >
            {isXNext ? 'O' : 'X'} wins! 🎉
          </motion.p>
        ) : gameStatus === 'draw' ? (
          <motion.p
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-yellow-400 font-bold"
          >
            Draw! 🤝
          </motion.p>
        ) : (
          <motion.p
            animate={{ 
              color: isXNext ? ['#60a5fa', '#60a5fa'] : ['#f87171', '#f87171']
            }}
            transition={{ duration: 0.3 }}
            className="font-bold"
          >
            {isXNext ? "X's Turn" : "O's Turn"}
            {aiMode && ((aiPlayer === 'X' && isXNext) || (aiPlayer === 'O' && !isXNext)) && " (AI)"}
          </motion.p>
        )}
      </motion.div>

      {/* Reset Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleReset}
        className="mt-2 px-4 py-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 
                  text-white font-medium text-sm rounded-full shadow-md shadow-purple-500/40 transition-all duration-300"
      >
        New Game
      </motion.button>
    </div>
  );
};

// Winner calculation function with winning line
function calculateWinner(board) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6],            // Diagonals
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return {
        winner: board[a],
        line: line
      };
    }
  }
  return null;
}

export default TicTacToe;