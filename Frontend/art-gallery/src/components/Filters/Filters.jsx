import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtist, getTechnique } from "../../redux/actions/actions";

import { BiDollarCircle } from "react-icons/bi";
import { MdOutlinePhotoSizeSelectLarge } from "react-icons/md";
import { BsPersonBadge } from "react-icons/bs";
import { FaPaintBrush } from "react-icons/fa";
import { GiWoodFrame } from "react-icons/gi";
import { MdCleaningServices } from "react-icons/md";

import Title from "../utils/Title";
import ContainerRange from "../utils/ContainerRange/ContainerRange";
import ListArtist from "../utils/ListArtist/ListArtist";

import "./Filters.css";

function Filters({ handleOnChange, filter, addList, cleanFilter, name }) {
  const artists = useSelector((state) => state.artist);
  const technique = useSelector((state) => state.technique);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArtist(name));
    dispatch(getTechnique());
  }, [dispatch, name]);

  /*   useEffect(() => {
    dispatch(getArtist(filter.name));
  }, [dispatch, filter, addList]); */

  return (
    <div className="filter-container">
      <select className="order" name="order" onChange={handleOnChange}>
        <option value="">Select sorting:</option>
        <option value="ASC">A to Z</option>
        <option value="DESC">Z to A</option>
      </select>

      <Title
        texto="PRICE"
        logo={<BiDollarCircle className="icon-fiilter-g" />}
        mostrar={() => mostrar(0)}
      />
      <div className="container-range">
        <ContainerRange
          max="30000"
          maxName="maxPrice"
          minName="minPrice"
          handleOnChange={handleOnChange}
          filter={filter}
        />
      </div>
      <Title
        texto="DIMENSIONS"
        logo={<MdOutlinePhotoSizeSelectLarge className="icon-fiilter-g" />}
        mostrar={() => mostrar(1)}
      />
      <div className="container-range">
        <ContainerRange
          max="1000"
          texto="Width"
          maxName="maxWidth"
          minName="minWidth"
          handleOnChange={handleOnChange}
          filter={filter}
        />
        <ContainerRange
          max="1000"
          texto="Height"
          maxName="maxHeight"
          minName="minHeight"
          handleOnChange={handleOnChange}
          filter={filter}
        />
      </div>
      <Title
        texto="ARTIST"
        logo={<BsPersonBadge className="icon-fiilter-g" />}
        mostrar={() => mostrar(2)}
      />
      <div className="container-range">
        <ListArtist
          name="artist"
          data={artists}
          search="true"
          addList={addList}
          handleOnChange={handleOnChange}
          filter={filter}
        />
      </div>
      <Title
        texto="TECHNIQUE"
        logo={<FaPaintBrush className="icon-fiilter-g" />}
        mostrar={() => mostrar(3)}
      />
      <div className="container-range">
        <ListArtist data={technique} name="technique" addList={addList} />
      </div>
      <Title
        texto="ORIENTATION"
        logo={<GiWoodFrame className="icon-fiilter-g" />}
        mostrar={() => mostrar(4)}
      />
      <div className="container-range">
        <div
          className="listArtist"
          onChange={(e) => handleOnChange(e, "horizontal")}
        >
          <input type="radio" id="check1" name="orientation" />
          <label>HORIZONTAL</label>
        </div>
        <div
          className="listArtist"
          onChange={(e) => handleOnChange(e, "vertical")}
        >
          <input type="radio" id="check2" name="orientation" />
          <label>VERTICAL</label>
        </div>
        <div
          className="listArtist"
          onChange={(e) => handleOnChange(e, "square")}
        >
          <input type="radio" id="check3" name="orientation" />
          <label>SQUARED</label>
        </div>
      </div>
      <div className="btnFilter">
        <div className="contBtn">
          <MdCleaningServices className="btnClean" />
          <button onClick={cleanFilter}>Clean filters</button>
        </div>
      </div>
    </div>
  );
}

export default Filters;

function mostrar(num) {
  const title = document.getElementsByClassName("slider-title");
  const containerRange = document.getElementsByClassName("container-range");
  const btn = document.getElementsByClassName("btn-filter-title");

  containerRange[0].style.height = "25%";
  containerRange[3].style.height = "30%";
  containerRange[4].style.height = "15%";

  title[num].classList.toggle("color-title-filter");
  containerRange[num].classList.toggle("select-filter-gallery");

  if (containerRange[num].style.display === "none") {
    containerRange[num].classList.remove("select-filter-gallery");
  }

  btn[num].innerHTML = btn[num].innerHTML === "▲" ? "▼" : "▲";
}
