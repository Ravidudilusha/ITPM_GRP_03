import React from 'react'
import { Container,Row,Col } from 'reactstrap'

import categoryImg01 from '../assets/images/category-01.png'
import '../styles/category.css'
import { Link } from 'react-router-dom'


const categoryData = [
    {
        display:"Donation",
        imgUrl: categoryImg01,
        link:"/get"
        
    },
    {
        display:"Volunteer",
        imgUrl: categoryImg01,
        link:"/get"
        
    },
    {
        display:"Question and answers",
        imgUrl: categoryImg01,
        link:"/update"
        
    },
    {
        display:"underwater areas ",
        imgUrl: categoryImg01,
        link:"/add"
        
    },
    {
        display:"Articles",
        link:"/edit"
        
    },
]

const DashboardData = () => {
  return <Container>
    <Row>

        {
            categoryData.map((item,index)=>(
                <Col lg='3' md='4' sm='6' xs='6' className='mb-4'>
                    <div className='category__item d-flex align-items-center gap-3'>
                        <div className='category__img'>
                            <img src={item.imgUrl} alt='category__item'/>

                        </div>
                        <h6>{item.display}</h6>
                        <Link to={item.link}>Click Here</Link>
                    

                    </div>
                
                </Col>
            ))
        }

    </Row>
  </Container>
}

export default DashboardData;