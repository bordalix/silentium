import { useState } from 'react'
import Label from './Label'
import Input from './Input'

interface InputAmountProps {
  label: string
  onChange: (arg0: any) => void
}

export default function InputAddress({ label, onChange }: InputAmountProps) {
  const [error, setError] = useState('')

  function validateAddress(address: string) {
    if (address.length < 26) {
      setError('Address too short')
    } else {
      setError('')
    }
  }

  return (
    <fieldset className='text-left text-gray-800 dark:text-gray-100 w-full'>
      {label ? <Label text={label} /> : null}
      <div className='flex items-center h-12 rounded-l-md bg-gray-100 dark:bg-gray-800'>
        <Input 
            type='text'
            onChange={(e) => {
                validateAddress(e.target.value)
                if (!error) onChange(e.target.value)
            }} 
          />
      </div>
      <div className='flex justify-between'>
        <p className='text-xs mb-2 sm:mb-4 sm:mt-2'>{error}</p>
      </div>
    </fieldset>
  )
}
