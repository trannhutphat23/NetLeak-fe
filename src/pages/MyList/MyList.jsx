import Navbar from "../../components/Navbar/Navbar";
import "./MyList.scss";
import React, { useContext, useEffect, useState } from "react";
import MyListSlide from "../../components/MyListSlide/MyListSlide";
import { AppContext } from "../../context/AppContext";
import Lottie from "lottie-react";
import animationData from "../../assets/Lottie/Nothing.json";
import { useNavigate } from "react-router-dom";

const TabPage = () => {
  const { genres } = useContext(AppContext);
  const navigate= useNavigate()
//   const [myList, setMyList] = useState(genres[0].movies); // list
  const myList= []
  const [recommend, setRecommend] = useState(genres[1].movies); // đề xuất

 const handleToHome=()=>{
    navigate(`/home`);
 }
  useEffect(() => {
    console.log("genre", genres[0]);
  }, []);
  return (
    <div className="mylist-container">
      <Navbar />
      {myList.length == 0 ? (
        <div className="flex mt-20 justify-center items-center">
        <Lottie height={400} width={400} animationData={animationData} className="flex-grow"/>
        <div className="flex-grow items-center justify p-5"> 
            <p className="text-3xl text-bold mb-5">Danh sách yêu thích của bạn đang trống</p>
            <p className="hover:text-green-500 cursor-pointer" onClick={handleToHome}> Hãy khám phá thêm các phim khác tại Trang chủ nào</p>
        </div>
        
        </div>
      ) : (
        <>
          <div className="movies-slide">
            <MyListSlide movies={myList} title="Danh sách phim của tôi" />
          </div>
          <div className="movies-slide">
            <MyListSlide movies={recommend} title="Đề xuất" />
          </div>
        </>
      )}
    </div>
  );
};

export default TabPage;
