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
    heroMainContent: <Content id={1} />,
  },

  {
    id: 2,
    name: "Ironman",
    heroImg: ironman,
    vilImg: vil1,
    heroContent: "Oh No! Seems like we are late to the scene. Iron Man is already battered. Whiplash does not have the Power Stone. He has hidden it somewhere. You must go there , now!.",
    heroMainContent: <Content id={2} />,
  },
  {
    id: 3,
    name: "Dr. Strange",
    heroImg: drstrange,
    vilImg: vil2,
    heroContent: " Recruit, Dormammu's using the Time Stone to trap us in a time loop. Solve the puzzles to break free from the loop and retrieve the stone. ",
    heroMainContent: <Content id={3} />,
  },
  {
    id: 4,
    name: "Captainamerica",
    heroImg: captain,
    vilImg: vil0,
    heroContent: "Recruit, Red Skull has the Space Stone, using it to distort space itself. Solve the puzzles to retrieve the stone.",
    heroMainContent: <Content id={4} />,
  },
  {
    id: 5,
    name: "Spider Man",
    heroImg: spiderman,
    vilImg: vil4,
    heroContent: "Recruit, Venom's using the Soul Stone to ensnare souls in his web of darkness. Solve the puzzles to break free from his grip and retrieve the stone.", 
    heroMainContent: <Content id={5} />,
  },
  {
    id: 6,
    name: "Star Lord",
    heroImg: starlord,
    vilImg: vil5,
    heroContent: "Recruit, The Collector's using the Mind Stone to play eerie noises inside our head. I can’t bear these noises anymore. What even are they? We need to find the Collector before he drives us insane with this noise.",
    heroMainContent: <Content id={6} />,
  },
];
