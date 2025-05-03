import { reviews } from "../constants"

const CustomersReviews = () => {
  return (
    <section className="flex flex-col items-center">
      <h3 className="text-4xl font-medium">What Our <span className="text-amber-600">Customers</span> says? </h3>
      <p className="text-gray-600 xl:text-lg mt-6 mb-20 text-center">Hear genuine stories from our satisfied consumers about their exceptional experience with us</p>
      <div className="flex max-lg:flex-col gap-10">
        {reviews.map((temp)=>(<div key={temp.customerName}>
          <div className="flex flex-col items-center mb-8 ">
          <p className="mb-4 font-medium text-2xl">{temp.customerName}</p>
          <img src={temp.imgURL} alt="profile" className="rounded-full" width={120} height={120}/>
          <p className="text-gray-600 xl:text-lg mt-6 text-center max-w-sm">{temp.feedback}</p>
          <p className="mt-2">⭐ {temp.rating}</p>
          </div>

        </div>))}
      </div>
    </section>
  )
}

export default CustomersReviews
