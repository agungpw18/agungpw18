import React from 'react'
import {PlusIcon} from '@heroicons/react/24/solid'
function NewChat() {
  return (
    <div className='border border-gray-700 chatRow'>
        <PlusIcon className='w-5 h-5'/>
        <p>New Chat..</p>
    </div>
  )
}

export default NewChat