
import Jquery from "../../public/assets/images/jquery.svg";
import Api from "../../public/assets/images/api.png";
import Firebase from "../../public/assets/images/firebase.svg";
import Typescript from "../../public/assets/images/typescript.svg"
import Vs from "../../public/assets/images/vs-code.svg";
import Responsive from "../../public/assets/images/responsive.svg";
import Web from "../../public/assets/images/icon-w3c.svg";
import Next from "../../public/assets/images/next.svg";
import Cactus from "../../public/assets/images/cactus.svg";
import Home from "../../public/assets/images/home1.svg";
import About from "../../public/assets/images/About1.svg";
import Seyi1 from "../../public/assets/images/seyi1.svg";
import Seyi2 from "../../public/assets/images/seyi2.svg";
import Seyi3 from "../../public/assets/images/seyi3.svg";
import Seyi4 from "../../public/assets/images/seyi4.svg";
import Desktop1 from "../../public/assets/images/desk-new.png";
import Trust from "../../public/assets/images/Trust1.png";
import Figma from "../../public/assets/images/figma1.png";
import Wizz from "../../public/assets/images/wizz.png";











export const JqueryImg = Jquery;
export const ApiImg =   Api;
export const FirebaseImg  = Firebase;
export const TypescriptImg = Typescript;
export const VsImg = Vs;
export const ResponsiveImg = Responsive;
export const WebImg = Web;
export const NextImg = Next;
export const CactusImg = Cactus;
export const homeImg = Home;
export const AboutImg = About;
export const SeyiImg = Seyi1;
export const SeyiImg2 = Seyi2;
export const SeyiImg3 = Seyi3;
export const SeyiImg4 = Seyi4;
export const DesktopImg1 = Desktop1;
export const TrustImg = Trust;
export const FigmaImg = Figma;
export const WizzImg = Wizz;



// export const downloadCV = () => {
//     const cvLink = 'https://flowcv.com/resume/uw2p8logp7';
//     const anchor = document.createElement('a');
//     anchor.href = cvLink;
//     anchor.setAttribute('download', 'Ajewole_Seyi_CV.pdf');
//     anchor.click();
//   };


  export const downloadCV = () => {
  
    const pdfPath = "../../public/files/Seyi-best-CV.pdf";

    // Fetch the PDF file
    fetch(pdfPath)
      .then(response => response.blob())
      .then(blob => {
       
        const url = window.URL.createObjectURL(new Blob([blob]));

      
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.setAttribute('download', 'Ajewole_Seyi_CV.pdf');

       
        document.body.appendChild(anchor);
        anchor.click();

      
        document.body.removeChild(anchor);
        window.URL.revokeObjectURL(url);
      })
      .catch(error => console.error("Error fetching PDF:", error));
};
