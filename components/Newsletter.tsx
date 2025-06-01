'use client'
import { useState, useRef, ChangeEvent, FormEvent } from 'react'

const Newsletter = () => {
    const formRef = useRef<HTMLFormElement>(null)
    const [email, setEmail] = useState<string>('');
    const [errorText, setErrorText] = useState<string>('')
    const [colorText, setColorText] = useState<string>('error')


     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;    
        setEmail(value);
        emailRegex(email)
    };

    const emailRegex = (email: string): boolean => {
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return email.match(mailFormat) !== null;
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('send')
      
        const clean = () => { setTimeout(() => setErrorText(""), 9000);}

        if(email === '' || email === null || email === undefined){
            setColorText('error')
            setErrorText('Campo vacio')
            clean()
           
        }
        else if (emailRegex(email) === true){
            setColorText('success')
            setErrorText('valid')
            clean()
            
        } else {
            setColorText('error')
            setErrorText('invalid')
            clean()
        }

    }
    


  return (
    <div className='newsletter-container'>
         <h4 className='feed-title'>Newsletter</h4>
         <p className='feed-description'>Suscribete a la newsletter para recibir las últimas ofertas</p>
         <form className='newsletter-form' ref={formRef}
          onSubmit={handleSubmit}>

         <input placeholder='Escribe aquí tu correo' type='email' 
              name='email'
              onChange={handleChange}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
          />
              <h6 className={`error-text ${colorText}-color`} >{errorText}</h6>

         <span  className='primary-button-visual newsletter' onClick={handleSubmit}>Suscríbete</span>
         </form>
    </div>
  )
}

export default Newsletter