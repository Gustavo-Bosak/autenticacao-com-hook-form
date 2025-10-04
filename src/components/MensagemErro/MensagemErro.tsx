import type { FieldError } from 'react-hook-form'

function MensagemErro ({ error }: { error?: FieldError }) {
  if (!error) return null
  
  return <p className='text-red-500'>{error.message}</p>
}

export default MensagemErro