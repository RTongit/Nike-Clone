import Button from "../Components/button"
const Subscribe = () => {
  return (
    <div className="flex lg:flex-row flex-col max-lg:items-start justify-around gap-5">
      <h1 className="text-4xl leading-12 font-medium">Sign Up for 
       <span className="text-amber-600 font-medium"> Updates</span> <br />& Newsletter</h1>
       <div className="flex flex-row justify-between border-gray-500 border-2 rounded-3xl p-1 lg:w-[700px] lg:max-h-14  w-[400px] max-h-14">
       <input type="text" placeholder="subscribe@nike.com" className="border-0 w-[60%] rounded-3xl px-4 py-2 placeholder:italic placeholder:text-gray-400"/>
       <Button content="Sign Up"/>
       </div>
 
    </div>
  )
}

export default Subscribe
