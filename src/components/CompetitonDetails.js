import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { getCompetition } from '../Redux/competitions/competitionAction'

const CompetitionDetails = ({ match, competition, getCompetition }) => {

  useEffect(() => {
    const fetchData = async () => {
      const { params: {id} } = match;
      await getCompetition(id)
    };
    fetchData()
  },[]) 

  return (
    <>
    <div style={{color: 'white'}}>{JSON.stringify(competition)}</div>
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