import { memo, useEffect, useState } from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import resets from '../../_resets.module.css';
import classes from './Chat.module.css';
import { VectorIcon } from './VectorIcon.js';
import axios from 'axios';
import { json } from 'react-router-dom';
import './chat.css'
interface Props {
  className?: string;
}
/* @figmaId 447:2 */
export const Chat: FC<Props> = memo(function Chat(props = {}) {
  const questions = [
    "What is the business cycle?",
    "What is GDP and its components?",
    "What is the role of the Federal Reserve System?",
    "What determines the impact of economic data?",
    "Why is timeliness important in economic data?",
    "How do market conditions affect economic indicators?",
    "What is continuous compounding?",
    "What does probability measure?",
    "What is the role of a stock exchange?",
    "What are the three types of orders submitted to the exchange?",
    "What additional risk is associated with holding a stock denominated in a foreign currency?",
    "What are equity indices used for?",
    "How are equity indices calculated?",
    "Name one popular equity index in the United States.",
    "What is program trading?",
    "How are portfolio wave orders constructed?",
    "What is a blind risk bid?",
    "What are ETFs?",
    "Why are ETFs popular among investors?",
    "How do ETFs provide liquidity?",
    "What is a forward contract?",
    "How are futures contracts different from forwards?",
    "What is the purpose of index futures?",
    "What is a swap?",
    "Why do investors use swaps?",
    "How are swaps valued?",
    "What are options to buy called?",
    "What is the relationship between stock price and strike price in options?",
    "What determines an option's price?",
    "What are the Greeks in options trading?",
    "How is the trading floor designed?",
    "What factors determine the distribution of the sales force?",
    "What are some groups outside the trading floor that provide essential services?",
    "What is a corporation?",
    "Why is limited liability important for shareholders?",
    "What are the three financial statements?",
    "What are financial ratios used for?",
    "How is the price of a company's shares determined?"
  ]

  const random_questions =questions.sort(() => Math.random() - Math.random()).slice(0, 5);
  const [posts, setPosts] = useState([]);
  var [show_default, setdefault] = useState('True');
  const [message, setInputMessage] = useState('');
  const [respone, setRespone]= useState([{question :'', answer:''}])
  function APIcall()
  {
  
    var question = ''
    if(message != '')
    var question = message
    var data = {
      "question": question,
      "chat_history": [" "]
  }
  var body =  JSON.stringify(data)
  const url = 'https://test-carrw.francecentral.inference.ml.azure.com/score'
  const api_key = 'sOyYN6rhK2yJ8Erb11UrsxPI4HGeuR3W'
  var customConfig  = { 
    headers:{
    'Access-Control-Allow-Origin': '*',
    'Content-Type':'application/json',
   'Authorization':('Bearer '+ api_key), 
   'azureml-model-deployment': 'test-carrw-1' 
  }
  }
  var a_copy = [...respone]
  axios.post(url,body,customConfig)
      .then(response => {
        var answer=response.data.answer + ""
        var responedata = {question: question , answer:  answer}
        a_copy.push(responedata)
        a_copy = a_copy.filter(value => Object.keys(value).length !== 0);
        setRespone(a_copy)
      })
      .catch(error => {
        alert(error)
        console.error(error);
      });
  
  return (
    <div className={classes.frame2609708}>
      <div className={classes.frame39551}>
      <div className={classes.whichInvestmentPlatformShouldI}>{message}</div>
      </div>
          <div className={classes.answer_container}>
                  <div className={classes.answer}>{posts}</div>
           </div>
      </div>
  )
  }

function render_answer()
  {
    if(show_default == "False")
    {
      let result = respone.filter(a =>a.question != "");
    return result.map((item)=>{
        return (
         <>
          <div className='frame39550' >
            <div className='whichInvestmentPlatformShouldI'>
            {item.question}
            </div>
          </div>
            <div className='answer_container'>
                <div  className ='answer'>{item.answer}</div>
             </div>
          </>
        )
      })
  }
}

function render_questions()
{
  
    if(show_default == "True")
    {
    return (
      <div className={classes.frame2609708}>
      <div className={classes.frame39550}>
        <div className={classes.whatIsETF}>
          <a  onClick={()=>questionclick(random_questions[0])}>  {random_questions[0]}</a>
         </div>
      </div>
      <div className={classes.frame39551}>
          <div className={classes.whichInvestmentPlatformShouldI}>{random_questions[1]}</div>
        </div><div className={classes.frame39552}>
          <div className={classes.whatIsUnrealizedProfit}>{random_questions[2]}</div>
        </div><div className={classes.frame39553}>
          <div className={classes.canYouExplainThisLessonInASimp}>{random_questions[3]}</div>
        </div><div className={classes.frame39554}>
          <div className={classes.isStockInvestingSafe}>{random_questions[4]}</div>
        </div>
      </div>
    )
    }   
}

const handleChange = (event:any) => {
  setInputMessage(event.target.value);
};

const handleClick = () => {
  setdefault("False")
  APIcall()
  setInputMessage('')
};
function questionclick(question:string)
{
  setInputMessage(question);
  setdefault("False")
  APIcall()
}


  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.image_222RemovebgPreview1}></div>
      <div className={classes.iMYourAIAssistantAskMeAnything}>
        I’m your AI Assistant. Ask me anything about stock investing!
      </div>
      {render_questions()}
      <div className={classes.frame2609708}>
      {render_answer()}
    </div>
      <div className={classes.frame395502}>
        <div className={classes.askMeAnything}>
          <input type="text" onChange={handleChange} value={message} placeholder="Ask me anything about stock investing" className={classes.question_input}>
             
          </input>
       </div>
        <div className={classes.vector}>
         <button onClick={handleClick}> <VectorIcon className={classes.icon} />
         </button>
        </div>
      </div>
      <div className={classes.cover}></div>
    </div>
  );
});
