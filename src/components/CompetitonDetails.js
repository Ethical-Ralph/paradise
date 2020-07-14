import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { getCompetition } from '../Redux/competitions/competitionAction'
import { ProgressBar } from 'react-bootstrap';
import Ticket from './Ticket'



const CompetitionDetails = ({ match, competitionss, getCompetition }) => {
  const [ticket, setTicket] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const { params: {id} } = match;
      await getCompetition(id)
    };
    fetchData()
  },[]) 

  const competition = {"id":6,"net_price":28.93,"associated_product":{"id":2,"title":"Tech Tech Tech","image":"/media/ecards/fixcomputers.jpg"},"groups":["Halloween Special"],"prize_to_win":{"title":"Brand New Iphone","image":"/media/TCTM1.png"},"title":"This is a new Competition","slug":"this-is-a-new-competition","date_created":"2020-07-05T21:59:34.458196Z","isFeatured":true,"isActive":true,"description":"gh jtjj rhtjyt htjyt htjy","expiration_date":"2020-07-22T18:00:00Z","price":"34.00","discount_price":"28.93","discount_text":"Free Day","allow_discount":true,"no_of_winners":1}

  return (
    <>
    <div>
      <h3>Prices</h3>
      <img src={competition.associated_product.image} alt={competition.associated_product.image} />
      <div>677 left</div>
      <ProgressBar now={77} label={'77%'} animated/>
      <h3>Description</h3>
      <div>Title: {competition.title}</div>
      <div>
        <h6>Groups</h6>
        <ul>
        {
          competition.groups.map((val,i)=>(
            <li>{val}</li>
          ))
        }
        </ul>
      </div>
      <div>Prize to win: {competition.prize_to_win.title}</div>
      <div>description: {competition.description}</div>
      <br/>
      <div>Select Your ticket</div>
      <div>First click a letter, then cjoose a number. Repeat this in case you want more tickets.<br/>
       Our Lucky Dip makes a random choice.</div>
       <Ticket setTicket={setTicket}/>
    </div>
    </>
  )
}

const mapStateToProps = (state) => {
 return {
   competition: state.competition.competition
 }
}

const mapDispatchToProps = {
  getCompetition
}

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionDetails);