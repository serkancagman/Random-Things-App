import Box from "./Boxes";
import {isWebpSupported} from 'react-image-webp/dist/utils';
import mainWEB from '../images/main.webp';
import mainJPG from '../images/main.jpg'

const Home = () => {
  return (
    <section>
    <div className="container mt-3">
      <h1 className=" fw-bold text-center home-header">ARE YOU UNDECIDED ?</h1>
      <h1 className=" fw-bold text-center home-header-second">don't worry because that's what we're here for</h1>
      <div className="row flex-wrap">
        <Box
          link="/Dogs"
          header="Random Dog Image Generator"
          imgSrc="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:* "
        />
        <Box
          link="/Cats"
          header="Random Cat Image Generator"
          imgSrc="https://media.istockphoto.com/photos/curious-kitten-looking-at-the-camera-picture-id1270023880?b=1&k=20&m=1270023880&s=170667a&w=0&h=7tAE4L2d7qJ4k1OMydwof1kObkG6TuNkDj2n2QC88ic="
        />
        <Box
          link="/Giphy"
          header="Random Gif Generator from GIPHY"
          imgSrc="https://media4.giphy.com/media/fXgyKSkRdT4Ay0ROcZ/200.gif?cid=c0a2d5e0e2349f6152a60c43e40fa2ea33af69c601dd3a0f&rid=200.gif&ct=g"
        />
        <Box
          link="/Images"
          header="Random High Quality Image Generator from UNSPLASH"
          imgSrc="https://images.unsplash.com/photo-1637841522571-e60202b045f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzk0NTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzgzMTAwMDY&ixlib=rb-1.2.1&q=80&w=1080"
        />
        <Box
        link="/Random_User"
        header="Random User Informations"
        imgSrc="https://image.freepik.com/free-vector/avatars-icons-set_98292-764.jpg"
      />
      <Box
      link="/Cannabis"
      header="Random Cannabis"
      imgSrc="https://www.ecovis.com/global/wp-content/uploads/2020/02/seedling-1062908_1920.jpg"
    />
      </div>
    </div>
    <div className="w-100 h-100 main-bg">
    {isWebpSupported()
      ? <img className="" src={mainWEB} />
      : <img className="" src={mainJPG} />
    }
  </div>
    </section>
    
  );
};

export default Home;
