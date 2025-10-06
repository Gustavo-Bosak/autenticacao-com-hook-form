import type { FieldError } from 'react-hook-form'

function MensagemErro ({ error }: { error?: FieldError }) {
  if (!error) return null
  
  return <p className='mt-4 p-1 bg-fiap-cor rounded text-center uppercase font-kumbh-sans text-xs font-semibold w-full'>{error.message}</p>
}

export default MensagemErro