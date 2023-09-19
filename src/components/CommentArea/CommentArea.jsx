import React from 'react'
import CommentList from '../CommentList/CommentList'
import AddComment from '../AddComment/AddComment'

export default function CommentArea() {


    return (
        <>
        {/* 
            ENDPOINT
            https://striveschool-api.herokuapp.com/api/comments/

            fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
                headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU0ODRmZGRmZmI4YjAwMTQ0MTNiYjEiLCJpYXQiOjE2OTUwNTkwNzUsImV4cCI6MTY5NjI2ODY3NX0.HGN8IMt2TuXfcJ06hBWyHhAghtJCA5E_ap3fKHi75_A"
                }
            })
                        
            Il componente deve essere renderizzato nel momento in cui il selected viene visualizzato 
            Eseguo una fecth all'endpoint https://striveschool-api.herokuapp.com/api/comments/ con l'autenticazione
            GET, POST e DELETE per i commenti
            GET nei CommentiList -> Renderizza tutti i commenti all'intenro del componente SingleComment
            POST nell'AddComment -> Tramite gli input si scrivono delle recensioni e si fa il post alle API tramite onclick sul button

            extra
            fare DELETE E PUT
            fare messaggi di errore e spinner
        */}
        <div>
            CommentArea
        </div>
        <CommentList/>
        <AddComment/>
        </>
    )
}

