import React, { useRef } from 'react'
import { useState, useContext } from 'react'
import Box from '@mui/material/Box';


const watcherModal = ({ isOpen, onClose }) => {

  const [count, setcount] = useState(0)


  return (
    <>
      {isOpen && (count == 0 && <Box className="flex items-center justify-center">
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="relative bg-white rounded-lg w-11/12 max-w-screen-lg xl:max-w-screen-md h-auto overflow-y-auto">
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                  <img src="https://upload.wikimedia.org/wikipedia/en/e/e5/Uatu_the_Watcher.png" alt="Image" className="w-full h-auto" />
                </div>
                {/* Content Section */}
                <div className="w-full md:w-1/2 p-5 overflow-y-auto">
                  <div className="max-h-full">
                    <h1 className="text-x2 font-bold mb-4">Life After Snap Apocalypse</h1>
                    <p className="mb-4">
                      In the aftermath of Thanos' devastating snap, the world descended into chaos. With half of humanity wiped out, those who remained struggled to survive amidst a power vacuum left by the absence of billions. Opportunistic villains seized control, plunging the world into darkness. 
                    </p>
                    <p className="mb-4">
                      As one of the few remaining heroes, burdened with the responsibility to save humanity, the weight of the task ahead felt insurmountable. Each passing day claimed the lives of friends and allies, leaving me to confront the growing tyranny alone.
                    </p>
                    {/* Close Button */}
                    <button onClick={()=>{setcount(count+1)}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>


      )}

        {isOpen && (count == 1 &&  <Box className="flex items-center justify-center">

        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="relative bg-white rounded-lg w-11/12 max-w-screen-lg xl:max-w-screen-md h-auto overflow-y-auto">
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                  <img src="https://upload.wikimedia.org/wikipedia/en/e/e5/Uatu_the_Watcher.png" alt="Image" className="w-full h-auto" />
                </div>
                {/* Content Section */}
                <div className="w-full md:w-1/2 p-5 overflow-y-auto">
                  <div className="max-h-full">
                    <h1 className="text-xl font-bold mb-4">Life After Snap Apocalypse</h1>
                    <p className="mb-4">
                      But hope flickered in the darkness when I encountered Gamora, Thanos' adopted daughter. Despite her tumultuous past, she offered her assistance in the battle against her tyrannical father. With her knowledge and skills, we embarked on a journey to reclaim the Infinity Stones, the source of Thanos' power. 
                    </p>
                    <p className="mb-4">
                      Gathering the stones proved to be a perilous endeavor. Thanos, now emboldened by his unmatched might guarded them fiercely. However, with Gamora's guidance and the remnants of the hero community rallying behind us, we mounted a united front against the Mad Titan.
                    </p>
                    {/* Close Button */}
                    <button onClick={()=>{setcount(count+1)}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </Box>)}

        {isOpen && (count == 2 &&  <Box className="flex items-center justify-center">

        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="relative bg-white rounded-lg w-11/12 max-w-screen-lg xl:max-w-screen-md h-auto overflow-y-auto">
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                  <img src="https://upload.wikimedia.org/wikipedia/en/e/e5/Uatu_the_Watcher.png" alt="Image" className="w-full h-auto" />
                </div>
                {/* Content Section */}
                <div className="w-full md:w-1/2 p-5 overflow-y-auto">
                  <div className="max-h-full">
                    <h1 className="text-xl font-bold mb-4">Life After Snap Apocalypse</h1>
                    <p className="mb-4">
                      Together, we faced relentless battles and overwhelming odds. Yet, with each victory, our resolve strengthened. United by a common purpose, we forged an unbreakable bond, transcending our individual differences.
                    </p>
                    <p className="mb-4">
                      Finally, the moment arrived. Standing face to face with Thanos, I knew the fate of the universe hung in the balance. With the Space Stone, Reality Stone, Power Stone, Mind Stone, Time Stone, and Soul Stone secured within a robotic arm, I confronted the embodiment of tyranny and chaos.
                    </p>
                    <p className="mb-4">
                      In a climactic showdown, we unleashed our combined strength against Thanos. With unwavering determination, we fought for the survival of humanity, for the fallen, and for the hope of a brighter tomorrow.
                    </p>
                    {/* Close Button */}
                    <button onClick={()=>{setcount(count+1)}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </Box>)}

        {isOpen && (count == 3 &&  <Box className="flex items-center justify-center">

        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="relative bg-white rounded-lg w-11/12 max-w-screen-lg xl:max-w-screen-md h-auto overflow-y-auto">
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                  <img src="https://upload.wikimedia.org/wikipedia/en/e/e5/Uatu_the_Watcher.png" alt="Image" className="w-full h-auto" />
                </div>
                {/* Content Section */}
                <div className="w-full md:w-1/2 p-5 overflow-y-auto">
                  <div className="max-h-full">
                    <h1 className="text-xl font-bold mb-4">Life After Snap Apocalypse</h1>
                    <p className="mb-4">
                      And as the dust settled, and the echoes of battle faded, I raised the robotic arm, adorned with the Infinity Stones, and made the ultimate sacrifice. With a snap of my fingers, I harnessed the power of the stones to reverse the effects of the snap apocalypse, restoring balance to the universe and bringing back those who were lost.
                    </p>
                    <p className="mb-4">
                      From the heart of Manhattan, from the Avengers Headquarters at 890 Fifth Avenue, the beacon of hope radiated once more. The world may have been scarred by tragedy, but through unity and resilience, we emerged victorious. Together, we had overcome the darkness, proving that even in the face of despair, heroes will always rise to the challenge, ready to defend the world against any threat, no matter how formidable.
                    </p>
                    {/* Close Button */}
                    <button onClick={onClose} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </Box>)}
    </>
  );
};
    

export default watcherModal;