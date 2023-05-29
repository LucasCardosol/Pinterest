import React, { useEffect, useState } from "react";
import { useImageSize } from "react-image-size";
import { PhotoFrameContainer } from "./style";
import share from "../../assets/icons/share.svg";
import points from "../../assets/icons/3points.svg";
import chain from "../../assets/icons/chain.svg";
import { useLocation } from 'react-router-dom';

function PhotoFrame({ image }) {
  const location = useLocation()
  const [data, { loading, error }] = useImageSize(image);
  const { width, height } = data ? data : { width: 0, height: 0 };
  const [heightComment, setHeightComment] = useState(284);
  const [commentList, setCommentList] = useState([]);
  const [commentText, setCommentText] = useState();
  


  const users = [
    "joão",
    "lucas",
    "ronaldo",
    "carlos",
    "roberta",
    "silvana",
    "cleber",
    "aurélio",
    "jorge",
    "arnaldo",
  ];
  const [randomUser ,setRandomUser] = useState(Math.floor(Math.random() * users.length))
  const [user, setUser] = useState(users[randomUser]) 

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const comments = [
    "Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a mobilidade dos capitais internacionais garante a contribuição de um grupo importante na determinação dos procedimentos normalmente adotados",
    "Por outro lado, o fenômeno da Internet deve passar por modificações independentemente das diretrizes de desenvolvimento para o futuro",
    "Assim mesmo, a contínua expansão de nossa atividade agrega valor ao estabelecimento das direções preferenciais no sentido do progresso",
    "Ainda assim, existem dúvidas a respeito de como a estrutura atual da organização auxilia a preparação e a composição das posturas dos órgãos dirigentes com relação às suas atribuições",
    "Todavia, o comprometimento entre as equipes maximiza as possibilidades por conta do processo de comunicação como um todo",
    "A nível organizacional, o surgimento do comércio virtual assume importantes posições no estabelecimento dos conhecimentos estratégicos para atingir a excelência",
    "Caros amigos, o desafiador cenário globalizado facilita a criação do investimento em reciclagem técnica",
    "O incentivo ao avanço tecnológico, assim como a determinação clara de objetivos não pode mais se dissociar das condições inegavelmente apropriadas",
    "Não obstante, o novo modelo estrutural aqui preconizado oferece uma interessante oportunidade para verificação do fluxo de informações.",
    "Pensando mais a longo prazo, o início da atividade geral de formação de atitudes ainda não demonstrou convincentemente que vai participar na mudança das diversas correntes de pensamento.",
  ];

  

  useEffect(() => {
    setHeightComment(height / width > 1 ? (height / width) * 508 - 188 : 284);
    
  });

  var commentsToShow = [];
  useEffect(() => {
    var randomLength = numbers[Math.floor(Math.random() * numbers.length)];
    console.log(randomLength)
    let random = Math.floor(Math.random() * users.length)
    setRandomUser(random)
    setUser(users[random])
    for (var i = 0; i < randomLength; i++) {
      const randomComment = Math.floor(Math.random() * comments.length);

      commentsToShow.push({
        comment:comments[randomComment],
        name:users[Math.floor(Math.random() * users.length)],
        color:`#${Math.floor(
          Math.random() * 16777215
        ).toString(16)}`
      }
      );
    }
    setCommentList(commentsToShow);
  }, [location]);

  function AddComment() {
    let commentListCopy = [...commentList]
    commentListCopy.push(
      {
        comment:commentText,
        name:'Eu',
        color:'#808080'
      }
    )
    setCommentList(commentListCopy)
  }

  return (
    <PhotoFrameContainer>
      <div className="container">
        <div className="column1">
          <img src={image} alt={image}></img>
        </div>
        <div className="column2">
          <div className="backgrounStick">
            <div className="subheader">
              <div className="circleButtons">
                <button className="circleButton">
                  <img src={points}></img>
                </button>
                <button className="circleButton">
                  <img src={share}></img>
                </button>
                <button className="circleButton">
                  <img src={chain} style={{ transform: "scale(0.3)" }}></img>
                </button>
              </div>
              <div>
                <button
                  className="normalButton salvar"
                  style={{ height: "48px" }}
                >
                  <p>Salvar</p>
                </button>
              </div>
            </div>
          </div>

          <div style={{ flex: "1", marginTop: "-92px", padding: "0 24px" }}>
            <div
              className="listComment"
              style={{
                maxHeight: `${heightComment}px`,
                height: `${heightComment}px`,
              }}
            >
              <h2>
                Carregado por{" "}
                <span style={{ fontWeight: "600" }}>{users[randomUser]}</span>
              </h2>
              <h1>{users[randomUser]}</h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "38px",
                }}
              >
                <div className="userName">
                  <div className="circle">{user[0]}</div>
                  <p>
                    <span>{user}</span>
                    <br></br>{randomUser} seguidores
                  </p>
                </div>
                <div>
                  <button className="normalButton" style={{ height: "48px" }}>
                    <p>Seguir</p>
                  </button>
                </div>
              </div>
              <h2>
                <span style={{ fontWeight: "600" }}>Comentários</span>
              </h2>
              <div className="comments">
               

                {commentList.map((item, index) => (
                  <div key={index} className="commentUser">
                    <div
                      className="user"
                      style={{
                        backgroundColor: item.color,
                      }}
                    >
                      <p>{item.name[0]}</p>
                    </div>
                    <p>
                      <strong>{item.name}</strong>
                      &nbsp;
                      {item.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="comment">
            <div className="circle"></div>
            <div className="divInput">
              <input
                value={commentText?commentText:''}
                onChange={(e) => setCommentText(e.target.value)}
              ></input>
              { (commentText?.length > 0) &&
              <div className="sendButton" onClick={AddComment}>
                <svg
               
                  height="18"
                  width="18"
                  fill="white"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  aria-label=""
                  role="img"
                >
                  <path d="M.461 2.427.43 2.46a1.474 1.474 0 0 0-.282 1.68L3 10.5 16 12 3 13.5.147 19.86a1.474 1.474 0 0 0 .277 1.674l.041.042c.403.388 1.013.56 1.626.3l20.99-8.493c.185-.078.343-.184.472-.31l.034-.033c.686-.71.517-1.994-.507-2.423L2.09 2.123A1.52 1.52 0 0 0 1.496 2c-.398 0-.764.164-1.035.427z"></path>
                </svg>
              </div>
              }
            </div>
          </div>
        </div>
      </div>
    </PhotoFrameContainer>
  );
}

export default PhotoFrame;
