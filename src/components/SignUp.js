import plant from '../Plant.png'

function Register() {
  const emaillogin = () => {
    var x = document.getElementById("email-class") ;
    var y = document.getElementById("number-class") ;
    var ec = document.getElementById("emailclick") ;
    var nc = document.getElementById("numberclick") ;
    y.classList.add("hidden");
    x.classList.remove("hidden");
    nc.classList.remove("border-[#E75A7C]");
    nc.classList.remove("text-[#E75A7C]");
    nc.classList.add("border-transparent");
    ec.classList.remove("border-transparent")
    ec.classList.add("border-[#E75A7C]");
    ec.classList.add("text-[#E75A7C]");
  }
  const numberlogin = () => {
    var x = document.getElementById("email-class") ;
    var y = document.getElementById("number-class") ;
    var ec = document.getElementById("emailclick") ;
    var nc = document.getElementById("numberclick") ;
    x.classList.add("hidden");
    y.classList.remove("hidden");
    nc.classList.remove("border-transparent")
    nc.classList.add("border-[#E75A7C]");
    nc.classList.add("text-[#E75A7C]");
    ec.classList.remove("border-[#E75A7C]");
    ec.classList.remove("text-[#E75A7C]");
    ec.classList.add("border-transparent");
  }
  const signup = () => {
    var x = document.getElementById("signup-class");
    var y = document.getElementById('signin-class');
    var sub = document.getElementById("signupbtn") ;
    var sib = document.getElementById("signinbtn") ;
    y.classList.add("hidden");
    x.classList.remove("hidden");
    sub.classList.add("border-[#E75A7C]")
    sub.classList.add("text-[#E75A7C]") ;
    sub.classList.remove("border-transparent") ;
    sib.classList.add("border-transparent") ;
    sib.classList.remove("text-[#E75A7C]");
    sib.classList.remove("border-[#E75A7C]");
  }
  const signin = () => {
    var x = document.getElementById("signup-class");
    var y = document.getElementById('signin-class');
    var sub = document.getElementById("signupbtn") ;
    var sib = document.getElementById("signinbtn") ;
    y.classList.remove("hidden");
    x.classList.add("hidden");
    sub.classList.remove("border-[#E75A7C]")
    sub.classList.remove("text-[#E75A7C]") ;
    sub.classList.add("border-transparent") ;
    sib.classList.remove("border-transparent") ;
    sib.classList.add("text-[#E75A7C]");
    sib.classList.add("border-[#E75A7C]");
  }
  return (
    <div className="flex justify-center items-center overflow-scroll bg-green-200 w-screen">
      <div className="p-10  w-2/3 border rounded-lg backdrop-blur-2xl bg-white/50 ">
        <div className="border h-full w-full rounded-lg bg-white flex flex-col">
          <div className="flex justify-between h-20 items-center  mx-10">
            <div className="flex space-x-24 justify-center items-center">
              <button id="signupbtn" onClick={signup} className=" border-b-2 border-[#E75A7C] hover:border-[#E75A7C] hover:text-[#E75A7C] authtext text-[#E75A7C]">SIGN UP</button>
              <button id='signinbtn' onClick={signin} className='border-b-2 border-transparent hover:border-[#E75A7C] hover:text-[#E75A7C]'>SIGN IN</button>
            </div>
          </div>
          <div className="flex ">
            <div id='signup-class' className="left border-r-2 w-full md:w-1/2 h-[400px]">
              <div className="m-4">
                <label className="mx-5 text-[12px] text-gray-500" for="fname">First Name*</label><br />
                <input className="mx-5 border-[1px] border-gray-300 rounded-md px-6 py-1 outline-none" type="text" id="fname" name="" /><br />
                <label className="mx-5 text-[12px] text-gray-500" for="lname">Last Name*</label><br />
                <input className="mx-5 border-[1px] border-gray-300 rounded-md px-6 py-1 outline-none" type="text" id="lname" name="" /><br />
                <label className="mx-5 text-[12px] text-gray-500" for="pno">Phone Number*</label><br />
                <input className="mx-5 border-[1px] border-gray-300 rounded-md px-6 py-1 outline-none" type="text" id="pno" name="" /><br />
                <label className="mx-5 text-[12px] text-gray-500" for="email">Email*</label><br />
                <input className="mx-5 border-[1px] border-gray-300 rounded-md px-6 py-1 outline-none" type="text" id="enail" name="" /><br />
                <label className="mx-5 text-[12px] text-gray-500" for="pswd">Create Password*</label><br />
                <input className="mx-5 border-[1px] border-gray-300 rounded-md px-6 py-1 outline-none" type="text" id="pswd" name="" /><br />
                <div className=" mx-[90px] my-5"><button className="mx-auto  py-1 px-4 rounded-md place-content-center text-center bg-[#E75A7C] text-white">SIGN UP</button></div>
              </div>

            </div>
            <div id='signin-class' className="left hidden border-r-2 w-full md:w-1/2 h-[400px]">
            <div className='mx-14 my-8 space-x-6'>
              <button onClick={numberlogin} id="numberclick" className=" border-b-2 text-[14px] border-[#E75A7C] hover:border-[#E75A7C] hover:text-[#E75A7C] authtext text-[#E75A7C]">Phone Number</button>
              <button onClick={emaillogin} id="emailclick" className='border-b-2 border-transparent hover:border-b-2 text-[14px] hover:border-[#E75A7C] hover:text-[#E75A7C]'>Email</button>
            </div>
            <div id='number-class' className="mx-4 my-6">
              <label className="mx-5 text-[12px] text-gray-500" for="pno">Phone Number*</label><br />
              <input className="mx-5 border-[1px] border-gray-300 rounded-md px-6 py-1 outline-none" type="text" id="pno" name="" /><br />
              <label className="mx-5 text-[12px] text-gray-500" for="pswd">Password*</label><br />
              <input className="mx-5 border-[1px] border-gray-300 rounded-md px-6 py-1 outline-none" type="text" id="pswd" name="" /><br />
              <div className=" mx-[90px] my-5"><button className="mx-auto  py-1 px-4 rounded-md place-content-center text-center bg-[#E75A7C] text-white">SIGN IN</button></div>
            </div>
            <div id="email-class" className="mx-4 my-6 hidden">
              <label className="mx-5 text-[12px] text-gray-500" for="email">Email*</label><br />
              <input className="mx-5 border-[1px] border-gray-300 rounded-md px-6 py-1 outline-none" type="text" id="enail" name="" /><br />
              <label className="mx-5 text-[12px] text-gray-500" for="pswd">Password*</label><br />
              <input className="mx-5 border-[1px] border-gray-300 rounded-md px-6 py-1 outline-none" type="text" id="pswd" name="" /><br />
              <div className=" mx-[90px] my-5"><button className="mx-auto  py-1 px-4 rounded-md place-content-center text-center bg-[#E75A7C] text-white">SIGN IN</button></div>
            </div>

          </div>
            <div className="right hidden w-1/2 md:flex flex-col  items-center h-[400px]">
              <div className='my-5'>
                <img src={plant} alt="" />
              </div>
              <div className='w-60'>
                <span className='w-20'>by clicking submit you agree to the
                  <span className='underline'> Terms and Conditions</span> </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register