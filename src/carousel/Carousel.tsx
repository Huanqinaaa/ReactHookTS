import React, {useState, useEffect} from "react";
import "./Carousel.css";
interface IFunExampleProps {
    width: number;
};

const Carousel: React.FC<IFunExampleProps> = (props: IFunExampleProps) => {

    const [navIdx, setNavIdx] = useState(0);

    useEffect(() => {
        let firstBar = document.getElementsByClassName('first_bar')[0];
        let secondBar = document.getElementsByClassName('second_bar')[0];
        let thirdBar = document.getElementsByClassName('third_bar')[0];
            if(navIdx == 0) {
                firstBar.classList.add('progress_bar');
                secondBar.classList.remove('progress_bar');
                thirdBar.classList.remove('progress_bar');
                setNavIdx(navIdx => navIdx + 1);
            }
    }, []);

    useEffect(() => {
        let firstBar = document.getElementsByClassName('first_bar')[0];
        let secondBar = document.getElementsByClassName('second_bar')[0];
        let thirdBar = document.getElementsByClassName('third_bar')[0];
        let timer = setTimeout(() => {
            if(navIdx == 0) {
                firstBar.classList.add('progress_bar');
                secondBar.classList.remove('progress_bar');
                thirdBar.classList.remove('progress_bar');
                setNavIdx(navIdx => navIdx + 1);
            }else if(navIdx == 1) {
                firstBar.classList.remove('progress_bar');
                secondBar.classList.add('progress_bar');
                thirdBar.classList.remove('progress_bar');
                setNavIdx(navIdx => navIdx + 1);
            }else{
                firstBar.classList.remove('progress_bar');
                secondBar.classList.remove('progress_bar');
                thirdBar.classList.add('progress_bar');
                setNavIdx(0);
            }
        },5000);
    }, [navIdx]);
  
    return (
        <>
         <div className="integrity">
            <div className="section one">
                <div className="headline">xPhone</div>
                <div className="sub_headline">Lots to love. Less to spend.</div>
                <div className="sub_headline">Starting at $399.</div>
            </div>
            <div className="section two">
                <div className="headline">Tablet</div>
                <div className="sub_headline">Just the right amount of everything.</div>
            </div>
            <div className="section three">
                <div className="top headline">Buy a Tablet or xPhone for college.</div>
                <h2 className="bottom headline">Get airPods.</h2>
            </div>
            <div className="navBar">
                <div><div className="first_bar"></div></div>
                <div><div className="second_bar"></div></div>
                <div><div className="third_bar"></div></div>
            </div>
         </div>
        </>
    )
  }

  export default Carousel;
