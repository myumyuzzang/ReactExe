function Avatar(props) {
    return(
        <img className="avatar" src={props.user.avatarUrl} alt={props.author.name}/>
    )
}

function Userinfo(props){
    return(
            <div className="user-info">
                <Avatar user={props.user}/>
                <div className="user-info-name">{props.user.name}</div>
            </div>
    )
}

function CommentText(props){
    return(
            <div className="comment-text">
                {props.text}
            </div>
            )
}

function CommentDate(props){
        function formatDate(date) {
        <div>날짜 : {date} </div>
         }
        return(
            <div className="comment-date">
                {formatDate(props.date)}
            </div>
        )
}


// 컴포넌트 추출

function Comment(props) {

    return(
        <div className="Comment">
            
            <Userinfo user={props.author}/>

            <CommentText text={props.text}/>

            <CommentDate date={props.date}/>

        </div>
    )
}

export default Comment;