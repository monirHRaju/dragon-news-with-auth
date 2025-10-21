import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const {id} = useParams()
    const catIdNumber = parseInt(id)

    const data = useLoaderData()
    // console.log({catId});
    const [categoryNews, setCategoryNews] = useState([])
    
    useEffect(()=>{
        if(catIdNumber === 0){
            setCategoryNews(data)
            return
        } else if (catIdNumber == 1) {
            const filteredNews = data.filter(news => news.others.is_today_pick == true)
            setCategoryNews(filteredNews)
        } else {
            const filteredNews = data.filter(news => news.category_id == catIdNumber)
            setCategoryNews(filteredNews)
        }
    }, [data, catIdNumber])

   
    
    return (
        <div>
            {
                categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default CategoryNews;