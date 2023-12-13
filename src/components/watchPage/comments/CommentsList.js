import React from 'react'
import Comment from './Comment'

const Comments = ({ data, parentCommentData, oldCommentHistory }) => {


    return (
        <>
            {
                Object.entries(data ? data : {})?.map(([key, value]) =>
                    <Comment data={data[key]} key={key} parentCommentData={parentCommentData} oldCommentHistory={oldCommentHistory}
                    />)
            }
        </>

    )
}

export default Comments