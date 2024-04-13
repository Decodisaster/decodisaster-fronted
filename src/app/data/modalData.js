import captain from "../assets/modal-assets/captain.png"
import char from "../assets/modal-assets/char.png"
import LoginCard from "../components/LoginCard"

export const modalData = [
    {
        id: 1,
        name: "captainamerica",
        heroImg: captain,
        vilImg: char,
        heroContent: "Some stuff related to the event and the character",
        vilContent: "Some stuff related to the event and the character 2",
        heroMainContent: <LoginCard /> ,
        vilMainContent: <LoginCard /> //here either the instruction form or Ques form
    },
    {
        id: 2,
        name: "ironman",
        heroImg: char,
        vilImg: captain,
        heroContent: "Some stuff related to the event and the character",
        vilContent: "Some stuff related to the event and the character 2",
        heroMainContent: <LoginCard /> ,
        vilMainContent: <LoginCard /> //here either the instruction form or Ques form
    },
]