import captain from "../assets/modal-assets/captain.png";
import char from "../assets/modal-assets/char.png";
import Content from "../components/modalquestions/content";
import vil0 from "../assets/modal-assets/vil0.png";
import vil1 from "../assets/modal-assets/vil1.png";
import vil2 from "../assets/modal-assets/vil2.png";
import vil3 from "../assets/modal-assets/vil3.png";
import vil4 from "../assets/modal-assets/vil4.png";
import vil5 from "../assets/modal-assets/vil5.png";
import ironman from "../assets/modal-assets/ironman.png";
import starlord from "../assets/modal-assets/starlord.png";
import cpatainmarvel from "../assets/modal-assets/capmarvel.png";
import drstrange from "../assets/modal-assets/strange.png";
import spiderman from "../assets/modal-assets/spiderman.png";

export const modalData = [
  {
    id: 1,
    name: "Captain Marvel",
    heroImg: cpatainmarvel,
    vilImg: vil3,
    heroContent: "Recruit, we're up against Supreme Intelligence for the Reality Stone. It's using its vast intellect to distort reality. Solve the puzzles to break through its illusions and reclaim the stone.",
    vilContent: "Some stuff related to the event and the character 2",
    heroMainContent: <Content id={1} />,
    vilMainContent: <Content id={1} />, //here either the instruction form or Ques form
  },

  {
    id: 2,
    name: "Ironman",
    heroImg: ironman,
    vilImg: vil1,
    heroContent: "Some stuff related to the event and the character",
    vilContent: "Some stuff related to the event and the character 2",
    heroMainContent: <Content id={2} />,
    vilMainContent: <Content id={2} />, //here either the instruction form or Ques form
  },
  {
    id: 3,
    name: "Star Lord",
    heroImg: starlord,
    vilImg: vil2,
    heroContent: "Some stuff related to the event and the character",
    vilContent: "Some stuff related to the event and the character 2",
    heroMainContent: <Content id={3} />,
    vilMainContent: <Content id={3} />, //here either the instruction form or Ques form
  },
  {
    id: 4,
    name: "Captainamerica",
    heroImg: captain,
    vilImg: vil0,
    heroContent: "Some stuff related to the event and the character",
    vilContent: "Some stuff related to the event and the character 2",
    heroMainContent: <Content id={4} />,
    vilMainContent: <Content id={4} />, //here either the instruction form or Ques form
  },
  {
    id: 5,
    name: "Spider Man",
    heroImg: spiderman,
    vilImg: vil4,
    heroContent: "Some stuff related to the event and the character",
    vilContent: "Some stuff related to the event and the character 2",
    heroMainContent: <Content id={5} />,
    vilMainContent: <Content id={5} />, //here either the instruction form or Ques form
  },
  {
    id: 6,
    name: "Dr. Strange",
    heroImg: drstrange,
    vilImg: vil5,
    heroContent: "Some stuff related to the event and the character",
    vilContent: "Some stuff related to the event and the character 2",
    heroMainContent: <Content id={6} />,
    vilMainContent: <Content id={6} />, //here either the instruction form or Ques form
  },
  {
    id: 7,
    name: "Endgame",
    heroImg: char,
    vilImg: vil0,
    heroContent: "Some stuff related to the event and the character",
    vilContent: "Some stuff related to the event and the character 2",
    heroMainContent: <Content id={7} />,
    vilMainContent: <Content id={7} />, //here either the instruction form or Ques form
  },
];
