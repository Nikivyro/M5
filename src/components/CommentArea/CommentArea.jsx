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
    },[bookId, dispatch])

    return (
        <div className='sticky-top'>
        <div className='mb-3'>
            <h5>Commenti di <br></br><span className='h4 text-primary'>{title}</span></h5>
        </div>
        <AddComment bookId={bookId} />
        <CommentList comments={commentsFromApi}/>
        </div>
    )
}

