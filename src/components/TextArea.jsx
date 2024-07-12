import React from 'react'

const TextArea = ({id, value, placeholder, onChange}) => {
  return (
    <textarea 
        rows={5}
        id={id}
        className='py-2.5 px-4 border-none focus:outline-none w-full border-transparent rounded-lg dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />
  )
}

export default TextArea