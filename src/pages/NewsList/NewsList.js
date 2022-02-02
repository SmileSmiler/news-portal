// import './App.css';
import { NEWS_INFO } from '../../newsInfo';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { NewsDetail } from './NewsDetail/NewsDetail';
import { UserModal } from './UserModal/UserModal';

export const NewsList = () => {
  // const allNews = useSelector(state => state.news)
  const [showUserModal, setShowUserModal] = useState(false)//!!! true
  const [isNewsPage, setIsNewsPage] = useState(true)
  const [newsId, setNewsId] = useState(null)
  const [newsInfo, setNewsInfo] = useState()

  const [page, setPage] = useState(1)
  const [countPageNews, setCountPageNews] = useState(5)
  const maxPages = Math.ceil(NEWS_INFO.length / countPageNews)
  const [leftPage, setLeftPage] = useState(page > 1 ? true : false)
  const [rightPage, setRightPage] = useState(maxPages > 1 ? true : false)

  useEffect(() => {
    changeNewsInfo(page)
  }, [])

  const infoForPage = (count) => {
    let info = []
    NEWS_INFO.forEach((el, index) => {
      if ((index >= (count - 1) * countPageNews) && (count * countPageNews > index)) {
        info.push(el)
      }
    })
    return info
  }

  const changeNewsInfo = (count) => {
    let info = infoForPage(count)
    setNewsInfo(info)
  }

  const handlePrev = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1)
      if (page - 1 == 1) {
        setLeftPage(false)
      }
      setRightPage(true)
      changeNewsInfo(page - 1)
    }
  }

  const handleNext = () => {
    if (page < maxPages) {
      setPage(prevPage => prevPage + 1)
      if (page + 1 == maxPages) {
        setRightPage(false)
      }
      setLeftPage(true)
      changeNewsInfo(page + 1)
    }
  }

  const handleSearch = (e) => {
    let news = infoForPage(page)
    let val = e.target.value
    if (val == '') {
      setNewsInfo(news)
      return
    }
    news = news.filter(el => el.text.includes(val))
    setNewsInfo(news)
  }

  const handleNews = (id) => {
    setNewsId(id)
    setIsNewsPage(false)
  }
  const handleGoBack = () => {
    setIsNewsPage(true)
    setNewsId(null)
  }

  return (
    <div className="container">
      {showUserModal ?
        <UserModal setShowUserModal={setShowUserModal} />
        :
        <div className="news-page">
          {isNewsPage ?
            <>
              <div className="search">
                <input type="text" onChange={handleSearch} placeholder='Search...' />
              </div>
              <div style={{ marginLeft: 5, marginBottom: 5 }}>Новости:</div>
              {newsInfo && newsInfo.map((news, index) => {
                return (
                  <div className="news">
                    <div key={news.id} onClick={() => handleNews(news.id)}>{news.text}</div>
                  </div>
                )
              })}
              <div className="pagination">
                <button style={{ marginRight: 10 }} disabled={!leftPage} onClick={handlePrev}>prev</button>
                <button style={{ marginRight: 10 }} disabled>{page}</button>
                <button disabled={!rightPage} onClick={handleNext}>next</button>
              </div>
            </>
            :
            <NewsDetail postId={newsId} handleGoBack={handleGoBack} />
          }
        </div>
      }
    </div>
  );
}
