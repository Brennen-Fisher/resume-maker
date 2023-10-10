import React from 'react'


function Resume1() {
    return (
            <div id='selector' className="bg-blue-200 w-screen h-full flex flex-row items-center justify-center">
                <div className='bg-white flex flex-col max-h-[14in] max-w-[8.5in]'>
                    <div className='flex flex-row min-h-[1080px]'>
                        <div className='inline-flex flex-col w-[300px] bg-stone-100'>
                            <div className='flex flex-col items-start bg-stone-800 p-5'>
                                <div className='text-stone-100'>
                                    <h1 className='text-[50px] font-bold'>John Doe</h1>
                                    <h4 className='text-[25px]'>Web Dev</h4>
                                    <br />
                                    <div className='text-start'>
                                        <li>email@email.com</li>
                                        <li>Phone Number</li>
                                        <li>Address</li>
                                        <li>Links</li>
                                    </div>
                                </div>
                            </div>
                            <div className='p-[20px] text-start'>
                                <h3 className="text-xl font-bold pb-3">Education</h3>
                                <div className='pb-3'>
                                    <p>B.S.</p>
                                    <p>Computer Science</p>
                                    <p className='whitespace-nowrap'>North Dakota State University</p>
                                    <li>2016-2020</li>
                                    <li>Fargo, ND</li>
                                </div>
                            </div>
                            <div className='p-4 text-start'>
                                <h3 className="text-xl font-bold pb-3">Skills</h3>
                                <li>Skill 1</li>
                                <li>Skill 2</li>
                                <li>Skill 3</li>
                                <li>Skill 4</li>
                                <li>Skill 5</li>
                            </div>
                            <div className='p-4 text-start'>
                                <h3 className="text-xl font-bold pb-3">Certifications</h3>
                                <p>Cert 1</p>
                                <p>Cert 2</p>
                                <p>Cert 3</p>
                            </div>
                        </div>
                        <div className="flex flex-col mx-auto p-4 pl-0">
                            <div className=" px-8 pb-8 mb-4 max-w-[800px]">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-[25px]">Summary</h3>
                                    <p className="text-gray-600">Experienced web developer with a passion for creating clean, responsive, and user-friendly websites. Proficient in HTML, CSS, JavaScript, and various web development frameworks.</p>
                                </div>
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-[25px] mb-2">Work Experience</h3>
                                    <div className="mb-2">
                                        <p className="text-gray-800 font-semibold text-[25px]">Certified Nursing Assistant</p>
                                        <p className="text-gray-800 font-semibold text-[17px]">Cranford Park Rehabilitation</p>
                                        <p className="text-gray-600 text-[17px]">2019- current / Cranford, Nj</p>
                                        <li>Collaborated with 7 nurses in monitoring restorative care and
                                            other clinical programs, such as bowel and bladder care</li>
                                        <li>Designed and led a weekly music hour for residents, which
                                            averaged 40% total resident participation</li>
                                        <li>Created spreadsheet to keep track of equipment and supply
                                            needs used by the entire floor, keeping the D.O.N. informed of
                                            potential shortages</li>
                                        <li>Conducted periodic resident care and unit checks with
                                            appropriate documentation</li>
                                        <li>Ensured 14 CNAs followed best practices of medical asepsis,
                                            sterile techniques, and universal precautions</li>
                                        <li>Practiced effective sterilization of living areas and equipment,
                                            avoiding infection of 37 residents</li>
                                    </div>
                                    <div className="mb-2">
                                        <p className="text-gray-800 font-semibold">Junior Developer - ABC Inc.</p>
                                        <div className='flex gap-[100px]'>
                                            <p className="text-gray-600">June 2018 - December 2019</p>
                                            <p className="text-gray-600">Fargo,ND</p>
                                        </div>
                                        <p className="text-gray-600">Collaborated with the development team to create and maintain web applications, troubleshoot issues, and assist in project planning.</p>
                                        <div className="[&>*]:text-gray-600">
                                            <li>Maintenance and Management of Both C# .net ASP Core Umbraco sites
                                                and Wordpress websites involving the use of PHP, JS, CSS, & HTML.</li>
                                            <li>Resolving various issues related to site upkeep.</li>
                                            <li>Created documentation to teach new team members company standards
                                                and best practices.</li>
                                            <li>Working in a team to launch new projects for clients
                                                Resolving Customer Submitted Ticket</li>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Projects</h3>
                                    <div className="mb-2">
                                        <p className="text-gray-800 font-semibold">Bachelor of Science in Computer Science</p>
                                        <p className="text-gray-600">University of Example</p>
                                        <p className="text-gray-600">Graduated: May 2018</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Resume1