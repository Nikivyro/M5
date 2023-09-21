import React, { useEffect } from 'react'
import CommentList from '../CommentList/CommentList'
import AddComment from '../AddComment/AddComment'
import { useDispatch, useSelector } from 'react-redux'
import { allComments, getComments } from '../../reducers/commentReducer'

export default function CommentArea({bookId}) {
    
    const dispatch = useDispatch()
    const commentsFromApi = useSelector(allComments)

    
    useEffect(()=>{
        dispatch(getComments(bookId))
    },[bookId])

    return (
        <>
        <div>
            CommentArea
        </div>
        <AddComment bookId={bookId} />
        <CommentList comments={commentsFromApi}/>
        </>
    )
}

