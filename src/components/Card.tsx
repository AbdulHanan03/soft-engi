import React, { useState } from "react"

const Card = (props:any) => {

  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const[id, setId] = useState(0);
  const [type,setType] = useState("")
  
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Save user details
    saveUserDetails(firstName, lastName, phoneNumber, email, id);
    // Reset form fields and hide the modal
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setEmail('');
    setAccountNumber('');
    setShowModal(false);
    props.onClick(id)
    
  };

  const saveUserDetails = (firstName, lastName, phoneNumber, email, id) => {
    // Here, you can save user details to another data structure or perform any other action
    console.log('Saving user details:', { firstName, lastName, phoneNumber, email, accountNumber, id });
  };
  

  return (
    <>
  
 <div onClick={() =>   setShowModal(true) } className= {`${props.status==='unavailable'? 'cursor-not-allowed' : 'mb-6 hover:-translate-y-2 ease-in-out duration-300 '}`} >
      {props.status==='unavailable' && <div className=" cursor-not-allowed absolute bg-slate-300 rounded-lg pl-2 pr-2 p-1 mt-3 ml-3 hover:bg-emerald-400 hover:text-gray-100 text-slate-700">SOLD OUT</div>}
        <img className= "h-64 w-64 rounded-xl md:h-72 md:w-72 lg:h-80 lg:w-80" src={props.img} />
            
        <div className="flex flex-row">
            <img src="src/images/star.png" className="mt-0 h-6 w-6 md:shrink-0"/>
            <span>{props.rating}</span>
            <span style={{color:'gray'}}> ({props.reviews})</span>
            <span style={{color:'gray'}}> * {props.location}</span>
        </div>
        <p>{props.desc}</p>
        <p><span style={{color:'Blue'}}>From ${props.price}</span> /person</p>
 </div>

{(showModal && props.status==='available') && (

/* main div of form with bg */
 <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-40 justify-center items-center flex">
    {/* form div with white bg     */}
    <div className="relative bg-white p-5 rounded-lg w-[30%]">
      {/* close button on the form */}
      <span className="absolute top-0 right-3 cursor-pointer text-3xl hover:text-red-400" onClick={() => setShowModal(false)}>&times;</span>
      {/* form element */}
      <form onSubmit={handleFormSubmit} className="relative top-8 flex flex-col gap-10 pb-12">
        <input className=" h-16 border-2 rounded-md pl-2 "
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input className="h-16 border-2 rounded-md pl-2"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input className="h-16 border-2 rounded-md pl-2"
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <input className="h-16 border-2  rounded-md pl-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input className="h-16 border-2  rounded-md pl-2"
          type="tel"
          placeholder="Account Number"
          value={accountNumber}
          onChange={(e) => {setAccountNumber(e.target.value);setId(props.id);}}
          required
        />
        <button className="bg-red-400 w-96 rounded-lg self-center h-12" type="submit">Confirm Booking</button>
      </form>
    </div>
  </div>
  
)}
   </>
  )
}

export default Card