import React from 'react'
import { SunIcon, BoltIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid'

function HomePage() {
  return (
    <div className="flex flex-col h-screen items-center justify-center text-slate-100 px-2">
        <h1 className='text-5xl font-semibold mb-20'>
            ChatGPT</h1>

        <div className='flex space-x-3 items-center text-center'>
            <div>
                <div className='flex flex-col items-center justify-center mb-5'>
                    <SunIcon className='w-8 h-8'/>
                    <h2>Example</h2>
                </div>
                <div className='space-y-3'>
                    <p className='infoText'>Explain Something to Me ..</p>
                    <p className='infoText'>What is Defferent about Jomblo dan Single</p>
                    <p className='infoText'>What is the color about soul</p>
                </div>
            </div>

            <div>
                <div className='flex flex-col items-center justify-center mb-5'>
                    <BoltIcon className='w-8 h-8'/>
                    <h2>Capabilities</h2>
                </div>
                <div className='space-y-3'>
                    <p className='infoText'>Remembers what user said earlier</p>
                    <p className='infoText'>What is Defferent about Jomblo dan Single</p>
                    <p className='infoText'>What is the color about soul</p>
                </div>
            </div>

            <div>
                <div className='flex flex-col items-center justify-center mb-5'>
                    <ExclamationTriangleIcon className='w-8 h-8'/>
                    <h2>Limitations</h2>
                </div>
                <div className='space-y-3'>
                    <p className='infoText'>Explain Something to Me ..</p>
                    <p className='infoText'>What is Defferent about Jomblo dan Single</p>
                    <p className='infoText'>What is the color about soul</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default HomePage