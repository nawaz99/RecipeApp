import React from 'react';



const Form = ({getRecipie}) =>(
    <div >
        <form onSubmit={getRecipie} style={{marginBottom:'2rem'}}>
           <input className={'form__input'}  type='text' name={'recipeName'}/>
           <button className={'form__button'}  type="submit" >search</button>
        </form>
   </div>
)
export default Form;