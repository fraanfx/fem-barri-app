'use client'
import { useState, useRef } from 'react'

const Newsletter = () => {
    const formRef = useRef()
    const [email, setEmail] = useState('');
    const [errorText, setErrorText] = useState('')
    const [colorText, setColorText] = useState('error')
    const handleChange = (e) => {
        const { target } = e;    
        setEmail(target.value);
        console.log(email)
        emailRegex(email)
      };
    const emailRegex = (email) => {
        let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
       if(email.match(mailFormat) === email) return true 
        //alert( email)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('send')
      
        const clean = () => { setTimeout(() => setErrorText(""), 9000);}
        if(email == '' || null || undefined){
            setColorText('error')
            setErrorText('Campo vacio')
            clean()
           
        }
        else if (emailRegex(email) == true){
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
    <div>
         <h4 className='feed-title'>Newsletter</h4>
         <p className='feed-description'>Suscribete a la newsletter para recibir las últimas ofertas</p>
         <form className='newsletter-form' ref={formRef}
          onSubmit={handleSubmit}>

         <input placeholder='Escribe aquí tu correo' type='email' 
              name='email'
              onChange={handleChange}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
     ></input>
              <h6 className={`error-text ${colorText}-color`} >{errorText}</h6>

         <span  className='primary-button-visual newsletter' onClick={handleSubmit}>Suscríbete</span>
         </form>
    </div>
  )
}

export default Newsletter