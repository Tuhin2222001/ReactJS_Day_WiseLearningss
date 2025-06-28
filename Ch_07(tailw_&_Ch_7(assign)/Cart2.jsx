import React from 'react'
import './Carts02.css'
function Cart2({username,email,role}) {
  return (
    <div className='carts02'>
        <div class="py-8 px-8 max-w-sm mx-auto space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
  <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://media.istockphoto.com/id/1324786533/photo/studio-portrait-of-smiling-african-teen-girl-with-curly-afro-hairstyle-isolated-on-gray.jpg?s=612x612&w=0&k=20&c=HlK8TO-_d1RzWxr0fl-YIB9ve8BquDFWIVQmH5S9e0A=" alt="Woman's Face" />
  <div class="text-center space-y-2 sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg text-black font-semibold">
        {username}
      </p>
      <p class="text-slate-500 font-medium">
        {email}
      </p>
       <p class="text-slate-500 font-medium">
        {role}
      </p>
    </div>
    <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
  </div>
</div>
    </div>
  )
}

export default Cart2;