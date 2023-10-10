import React from 'react'

/*
Work Experience
@ The Plaza at Richardson| 1301 Richardson Dr, Richardson
TX 75080| April 2005- May 2014
> Provided service to residents
> Help residents with transforring, help resident with
toileting
> Communication with charge nurses and team.
> Responding to call light when resident is in need.
> Documentation
@ Bethany on 42%| 4255 30" Ave S, Fargo, ND 58104]
January 2015- November 2015
> Providing care to resident
> Helping resident with transferring, help resident with
toileting
> Communication with charge nurse and team
> Responding to call light when resident is in need
> Documentation
% Moorhead Rehabilitation & Healthcare Center) 2810 2%
Ave N, Moorhead MN 56560| November 2015-Decemeber
2018
> Providing care for resident
> Helping resident transferring, help resident with
toiletings
> Communication with charge nurses and team
> Responding to call light when resident is in need
> Documentation
# Vibra Hospital of Fargo| 5225 23 Ave S 7* Floor, Fargo
ND 58104- April 2017
> Providing care for resident.
> Helping resident transferring, help resident with
oilets
> Communications with charge nurses and tcam
> Responding to call light when resident is in need
*/



function Resume2() {
    return (
        <div id='selector' className="bg-blue-200 w-screen h-full flex flex-row items-center justify-center">
            <div className='bg-white flex flex-col max-h-[14in] max-w-[8.5in]'>
                <div className='flex flex-col'>
                    <div className='flex flex-row justify-center items-center p-5 border-b-2 border-black'>
                        <div className='text-center'>
                            <h1 className='text-[40px] font-bold'>Shinna Benson</h1>
                            <h4 className='text-[25px]'>CNA</h4>
                            <div className='flex-row'>
                                <p>2714 41st St S Fargo, ND 58104 | 701-809-1479</p>
                                <p>Royalpeace30@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mx-auto p-4 pl-0">
                        <div className=" px-8 pb-8 mb-4 max-w-[800px]">
                            <div className="mb-4 w-full">
                                <h3 className="text-xl font-bold text-[25px]">Summary</h3>
                                <p className="">Dedicated and compassionate Certified Nursing Assistant with near 20 years of experience providing exceptional patient care</p>
                                <br />
                            </div>
                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-[25px] mb-2">Work Experience</h3>
                                <div className="mb-2">
                                    <p className="text-gray-800 font-semibold text-[25px]">PRN</p>
                                    <p className="text-gray-800 font-semibold text-[17px]">Cobalt Rehabilitation Center</p>
                                    <p className="text-gray-600 text-[17px]">January 2019 - Current / Fargo, ND</p>
                                    <li>Providing care for resident.</li>
                                    <li>Helping resident transferring, help resident with toilets</li>
                                    <li>Communications with charge nurses and team</li>
                                    <li>Responding to call light when resident is in need</li>
                                </div>
                                <div className="mb-2">
                                    <p className="text-gray-800 font-semibold text-[25px]">Certified Nursing Assistant</p>
                                    <p className="text-gray-800 font-semibold text-[17px]">Moorhead Rehabilitiation & Healthcare Center</p>
                                    <p className="text-gray-600 text-[17px]">November 2015 - December 2018 / Moorhead, MN</p>
                                    <li> Provided service to residents</li>
                                    <li>Help residents with transforring, help resident with
                                        toileting</li>
                                    <li>Communication with charge nurses and team.</li>
                                    <li>Responding to call light when resident is in need.</li>
                                    <li>Documentation</li>
                                </div>
                                <div className="mb-2">
                                    <p className="text-gray-800 font-semibold text-[25px]">Certified Nursing Assistant</p>
                                    <p className="text-gray-800 font-semibold text-[17px]">The plaza at Richardson</p>
                                    <p className="text-gray-600 text-[17px]">April 2005 - May 2014 / Richardson, TX</p>
                                    <li> Provided service to residents</li>
                                    <li>Help residents with transforring, help resident with
                                        toileting</li>
                                    <li>Communication with charge nurses and team.</li>
                                    <li>Responding to call light when resident is in need.</li>
                                    <li>Documentation</li>
                                </div>
                                {/* <div className="mb-2">
                                    <p className="text-gray-800 font-semibold text-[25px]">Certified Nursing Assistant</p>
                                    <p className="text-gray-800 font-semibold text-[17px]">Bethany on 42nd</p>
                                    <p className="text-gray-600 text-[17px]">January 2015 - November 2015 / Fargo, ND</p>
                                    <li> Provided service to residents</li>
                                    <li>Providing care to resident</li>
                                    <li>Helping resident with transferring, help resident with toileting</li>
                                    <li>Communication with charge nurse and team</li>
                                    <li>Responding to call light when resident is in need</li>
                                    <li>Documentation</li>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume2