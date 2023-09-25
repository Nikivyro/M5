import React, { useEffect } from 'react'
import CommentList from '../CommentList/CommentList'
import AddComment from '../AddComment/AddComment'
import { useDispatch, useSelector } from 'react-redux'
import { allComments } from '../../reducers/comment/commentReducer'
import {getComments} from '../../reducers/comment/post/post'

export default function CommentArea({bookId, title}) {
    
    const dispatch = useDispatch()
    const commentsFromApi = useSelector(allComments)

    useEffect(()=>{
        dispatch(getComments(bookId))
    },[bookId])

    return (
        <>
        <div className='mb-3'>
            <h4>Commenti di {title}</h4>
        </div>
        <AddComment bookId={bookId} />
        <CommentList comments={commentsFromApi}/>
        </>
    )
}

