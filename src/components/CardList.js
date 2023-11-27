import React, { useState } from 'react'
import Card from './Card';
import Pagination from 'react-js-pagination';
import img1 from '../assets/images/pag1.jpg'
import img2 from '../assets/images/pag2.jpg'
import img3 from '../assets/images/pag3.jpg'
import img4 from '../assets/images/pag4.jpg'
import img5 from '../assets/images/pag5.jpg'
import img6 from '../assets/images/pag6.jpg'
import '../index.css'

export default function CardList() {

    const [activePage, setActivePage] = useState(1);

    const cardsData = [
    {discount: '15%', likes: 15,image: img1},
    {discount: '15%', likes: 15,image: img2},
    {discount: '15%', likes: 15,image: img3},
    {discount: '15%', likes: 15,image: img4},
    {discount: '15%', likes: 15,image: img5},
    {discount: '15%', likes: 15,image: img6},
    {discount: '15%', likes: 15,image: img1},
    {discount: '15%', likes: 15,image: img2},
    {discount: '15%', likes: 15,image: img3},
    {discount: '15%', likes: 15,image: img1},

      ];
      const cardsPerPage = 6;

      const indexOfLastCard = activePage * cardsPerPage;
      const indexOfFirstCard = indexOfLastCard - cardsPerPage;
      const currentCards = cardsData.slice(indexOfFirstCard, indexOfLastCard);
    
      const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
      };
  return (
    <div>
    <div className="my-container">
      {currentCards.map((data, index) => (
        <Card key={index} {...data} />
      ))}
    </div>
    <div className='flex justify-center flex-row' >
    <Pagination
        activePage={activePage}
        itemsCountPerPage={cardsPerPage}
        totalItemsCount={cardsData.length}
        pageRangeDisplayed={5}
        onChange={handlePageChange}     
        itemClass="page-item"
        linkClass="page-link"
        activeClass="active-page"
        activeLinkClass="active-page-link"
       
        hideFirstLastPages

      />
    </div>
  </div>
        )
}
