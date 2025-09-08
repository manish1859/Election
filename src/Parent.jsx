import React, { createContext, useState } from 'react'
import Make from './assets/MAke donation.svg'

export const abc=createContext()



const Parent = ({children}) => {
      const [pageTitle, setPageTitle] = useState("Home");
          const [currentIndex, setCurrentIndex] = useState(0);

  const cardData = [
    {
      id: 1,
      title: "BECOME A VOLUNTEER",
      text: "Lorem Ipsum is simply dummy text the industry's standard dummy text ever scrambled type specimen",
iconColor: "#DC2A4E",
      img:'https://election-react.wpolive.com/static/media/1.ef49ba6e73e0ff446edb4a59d07b6f71.svg'
    },
    {
      id: 2,
      title: "MAKE DONATION",
      text: "Lorem Ipsum is simply dummy text the industry's standard dummy text ever scrambled type specimen",
      iconColor: "#DC2A4E",
      img:Make
    },
    {
      id: 3,
      title: "BECOME A VOLUNTEER",
      text: "Lorem Ipsum is simply dummy text the industry's standard dummy text ever scrambled type specimen",
iconColor: "#DC2A4E",
      img:'	https://election-react.wpolive.com/static/media/2.c65ec636c2aebfefab2c5a228089a168.svg'
    },
    {
      id: 4,
      title: "OUR CAMPAIGN",
      text: "Lorem Ipsum is simply dummy text the industry's standard dummy text ever scrambled type specimen",
     iconColor: "#DC2A4E",
      img:'https://election-react.wpolive.com/static/media/1.ef49ba6e73e0ff446edb4a59d07b6f71.svg'
    },
  ];

   const Manish = [
    {
      img:'https://election-react.wpolive.com/static/media/1.01d0daa47aaa3779be9f.jpg',
      head:'Founder',
      h3:"Harry Abraham",
    },
    {
      img:'https://election-react.wpolive.com/static/media/2.3a80aa7b88eb357e517a.jpg',
      head:'Admin',
      h3:"Robert Johnson",
    },
    {
      img:'https://election-react.wpolive.com/static/media/3.9aff99f10d6fa8886e43.jpg',
      head:'Merketer',
      h3:"Jenelia Orkid",
    },
    {
      img:'https://election-react.wpolive.com/static/media/4.1420d2df40825bd35860.jpg',
      head:'Merketer',
      h3:"Aliza Anny",
    },
  ]

  const goLeft = () => {
    setCurrentIndex(prev => (prev === 0 ? cardData.length - 1 : prev - 1));
  };

  const goRight = () => {
    setCurrentIndex(prev => (prev === cardData.length - 1 ? 0 : prev + 1));
  };


  return (
    <div>
      <abc.Provider value={{pageTitle,setPageTitle,cardData, currentIndex,Manish,goLeft,goRight}}>
        {children}
      </abc.Provider>
    </div>
  )
}

export default Parent
