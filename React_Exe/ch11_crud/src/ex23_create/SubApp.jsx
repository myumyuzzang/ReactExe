
import {useState} from 'react';

function Header(props){

  return (
    <header>
      <h1>
        <a href="/" onClick={(event)=>{
          event.preventDefault();
          props.onChangeMode();
        }}>{props.title}</a>
      </h1>
    </header>
  )
  
}

function Nav(props){
  const lis = [];
  for(let i=0;i<props.topics.length;i++){
    let t = props.topics[i];    
    lis.push(<li key={t.id}>
              <a id={t.id} href={"/read/" + t.id}
                onClick={event=>{
                  event.preventDefault();  
                  props.onChangeMode(Number(event.target.id));     
                }}>
                {t.title}
              </a>
            </li>);
  }

  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}

function Article(props){
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

function Create(props){

  return (
    <article>
      <h2>Create</h2>
      {/* submit 버튼을 누르면, form에서 onSubmit이 호출된다 */}
      <form onSubmit={event => {
        event.preventDefault(); // 기본동작 막음 (페이지 reload)
        const title = event.target.title.value;
        const body = event.target.body.value;

        // 부모 영역에서 props를 통해 전달한 onCreate 함수를 호출함
        props.onCreate(title, body);
      }}>
        <p><input type="text" name='title' placeholder='title' /></p>
        <p><textarea name="body" placeholder='body'></textarea></p>
        <p><input type="submit" value="Create"/></p>
      </form>
    </article>
  )

}

export default function SubApp(){

  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);       // nav의 어떤 항목(id)이 선택 되었는지
  const [nextId, setNextId] = useState(4);  // 새로운 id 발급, topics의 마지막 id가 3이므로, 새로운 id는 4부터 시작
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ])


  let content = null;
  
  if(mode === 'WELCOME'){
    content = <Article title='Welcome' body='Hello, Web'></Article>
  }else if(mode === 'READ'){
    let title, body = null;
    for (let i = 0; i < topics.length; i++ ){
      console.log(id, typeof id)
      // 선택된 id와 같은 항목을 찾았으면
      if(topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
        break;
      }
    }
    content = <Article title={title} body={body} /> 
  } else if (mode === 'CREATE'){
    // <Create/> 내부에서 submit 이벤트가 발생하면
    // 부모에서 전달한 함수인 onCreate에 title, body를 전달하여 호출한다.
    content = <Create onCreate={(_title, _body) =>{

      // 새로운 항목을 topics에 저장
      const newTopic = {id: nextId, title: _title, body: _body };
      // topics.push(newTopic);
      // topics의 내용은 바뀌었지만, 할당된 참조값은 바뀌지 않아서
      // 기존과 동일한 참조값을 가진 topic을 넣었으므로
      // React Hook이 변화를 감지하지 못함
      // => 그러므로 새로운 newTopic객체를 할당해서 SetTopics에 넣어야 함.

      const newTopics = [...topics];      // topics를 복제해서 새로운 객체 생성
      newTopics.push(newTopic);           // 새로운 항목 추가
      setTopics(newTopics);               // 바뀐 객체를 전달 => Hook이벤트 발생
    }} />
  }

    return (
        <div>
          <Header title='WEB' onChangeMode={()=>{
            setMode('WELCOME');
          }} />
          <Nav topics={topics} onChangeMode={(id)=>{
            setMode('READ');
            setId(id);        // nav의 리스트중에 어떤 항목(id)이 선택되었는지 알 수 있음
          }} />
          {content}
          <a href='/create' onClick={event =>{
            event.preventDefault();
            setMode('CREATE');
          }}>Create</a>
        </div>
      );
}