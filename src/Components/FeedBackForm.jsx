import React, { useEffect, useMemo, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { feedData } from './feedData'



function FeedBackForm() {

    const [name, setName] = useState("");       //  Name 
    const [psName, setPSName] = useState('');   // police station Name  
    const [pinCode, setPinCode] = useState(0);   // pin code 
    const [suggetion, setSuggetion] = useState('');
//    this is for star 
    const [rating, setRating] = useState(0);   // rating 
    const [hover, setHover] = useState(0);    // star hover Effect 
//
    const [district, setDistrict] = useState('');  // for district 

  


    function  postData(e) {
            e.preventDefault();

            console.log('name : ' , name);
            console.log(" district : " , district);
            console.log("rating : ",rating);
            console.log("PS Name : " , psName);
            console.log("Pin code:",pinCode);
            console.log("Suggestion ",suggetion);


           
        }

     






    return (
        <>
            <div className=' container  lg:flex lg:justify-center md:flex  md:justify-center md:shrink-0 sm:flex sm:justify-center '>






                <form  action="" className=' bg-slate-600 lg:w-1/3 md:w-2/3  sm:w-0  rounded-lg p-5  mt-8'>

                    <div className='md-6 text-center lg:text-5xl md:text-4xl sm:text-4xl  text-gray-900  dark:text-white'>
                        Feedback Form
                    </div>

                    <div className=' mb-6 '>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900  dark:text-white" >Name</label>
                        <input onChange={(e) => setName(e.target.value)} type="text"
                            className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id='name'  />
                    </div>


                    <div className=' mb-6'>

                        <label htmlFor="District" className="block mb-2 text-sm font-medium text-gray-900  dark:text-white"> District </label>

                        <select value={district} onChange={(e)=> setDistrict(e.target.value)}
                            className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           >
                            {


                                feedData.map((item, index) => (

                                    <option key={index}>{item.district}</option>
                                ))

                            }


                        </select>
                    </div>


                    <div className=' mb-6'>
                        <label htmlFor="PSName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Police Station Name</label>  {/*PSName = police statin Name */}
                        <input type="text" onChange={(e) => setPSName(e.target.value)}
                            className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                    </div>


                    <div className=' mb-6'>
                        <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >PinCode</label>
                        <input type="number" onChange={(e) => setPinCode(e.target.value)}

                            className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                    </div>
                    <div className=' mb-6'>

                        <div className='  '>
                            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white  ">Rating </div>
                            <div className="star-rating  text-gray-900 rounded-md text-center dark:bg-gray-700  p-2 " >
                                {[...Array(5)].map((star, index) => {
                                    index += 1;
                                    return (
                                        <button
                                            type="button" key={index} className={index <= (hover || rating) ? "on" : "off"}
                                            onClick={() => setRating(index)}
                                            onMouseEnter={() => setHover(index)}
                                            onMouseLeave={() => setHover(rating)}

                                        >
                                            <span key={index} className="star m-2">
                                                <FontAwesomeIcon icon={faStar} />


                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                    </div>



                    <div className=' mb-6 '>
                        <label htmlFor="pinCode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" > Suggestion </label>
                        <textarea type="text" onChange={(e) => setSuggetion(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id='pinCode' />
                    </div>

                    <div className=' mb-6'>

                        <button className=' bg-slate-300 rounded-sm   p-1' onClick={postData} >Submit</button>
                       
                    </div>
                </form>

            </div>
        </>
    )
}

export default FeedBackForm
