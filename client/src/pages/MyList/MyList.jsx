import React from "react";
import { useEffect, useState } from "react";
import "./myList.scss";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { motion } from "framer-motion";
import {
  staggerHalf,
  posterFadeInVariants,
  defaultPageFadeInVariants,
} from "../../motionUtils";
// import { FaChevronDown, FaMinus, FaPlay, FaPlus } from "react-icons/fa";
import ListFav from "../../components/listFav/ListFav";

export default function MyList() {
  // const [isHovered, setIsHovered] = useState(false);
  const [myMovie, setMyMovie] = useState([]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    if (movieFavourites) {
      setMyMovie(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = myMovie.filter(
      (favourite) => favourite._id !== movie._id
    );

    setMyMovie(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };
  console.log(myMovie);
  return (
    <>
      <Navbar />
      <motion.div
        className="MyList"
        variants={defaultPageFadeInVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {myMovie && myMovie.length > 0 && (
          <h2 className="MyList__title">My List</h2>
        )}
        <motion.div
          className="MyList__wrp"
          variants={staggerHalf}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {myMovie && myMovie.length > 0 ? (
            myMovie.map((result) => (
              <ListFav key={result.id} item={result} {...result} onDelete={() => removeFavouriteMovie(result)} />
            ))
          ) : (
            <h2 className="MyList__title">
              Sorry, you dont have a favourite movie or tv-show yet.
            </h2>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
