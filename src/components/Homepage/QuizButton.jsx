import React from 'react'
import { Link } from 'react-router-dom'

function QuizButton() {
  return (
    <Link
    to ='/quiz'>
   <button className='inline-bock px-6 py-2 duration-200 hover:bg-gray-800 hover:text-white'>
    Dashboard
   </button>
   </Link>
  )
}

export default QuizButton