import React, { useEffect, useState } from 'react'
import CommentList from '../CommentList/CommentList'
import AddComment from '../AddComment/AddComment'
import { useDispatch, useSelector } from 'react-redux'
import { allComments, getComments } from '../../reducers/commentReducer'

export default function CommentArea({bookId}) {
    
    // qui devo ottenere l'asin del libro per filtrare i commenti e passarlo come props agli altri componenti

    // const [comments, setComments] = useState([])

    // const getComments = async () => {
    //     try {
    //         const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${bookId}`, {
    //             headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU0ODRmZGRmZmI4YjAwMTQ0MTNiYjEiLCJpYXQiOjE2OTUwNTkwNzUsImV4cCI6MTY5NjI2ODY3NX0.HGN8IMt2TuXfcJ06hBWyHhAghtJCA5E_ap3fKHi75_A"
    //             }
    //         })
    //         const data = await response.json();
    //         setComments(data)
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    // console.log('Array commenti', comments);

    const dispatch = useDispatch()
    const commentsFromApi = useSelector(allComments)

    
    useEffect(()=>{
        dispatch(getComments(bookId))
        console.log('Commenti', commentsFromApi)
    },[bookId])

    return (
        <>
        <div>
            CommentArea
        </div>
        <CommentList comments={commentsFromApi}/>
        {/* <AddComment bookId={bookId} /> */}
        </>
    )
}

