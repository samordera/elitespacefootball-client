import { AppBar, Button } from '@mui/material';
import React from 'react';
import { AccountBox, Delete, Edit } from '@mui/icons-material';

import CustomTypography from '../../CustomTypgraphy';
import styles from './styles';
import PlayerIcon from '../../PlayerIcon';
import { useNavigate } from 'react-router-dom';


export default function RosterElement(props) {

  const navigate = useNavigate();

  const handlePlayerClick = () => {
    navigate(`/academy/roster/${props.id}`);
  }

  return (
    <Button onClick={handlePlayerClick} style={ { ...styles.main, padding: '30px 10px 30px 10px' } }>
      { props.imgURL? <PlayerIcon src={props.imgURL} style={ { width: window.innerWidth < props.responsiveThreshold ? '30px' : '50px', hieght: window.innerWidth < props.responsiveThreshold ? '30px' : '50px', border: '2px solid green' } } /> : <AccountBox /> }
      <CustomTypography text={props.playerName}  style={ { ...styles.customTypography, ...{ marginLeft: window.innerWidth < props.responsiveThreshold ? '10' : '12%', fontSize: window.innerWidth < props.responsiveThreshold ? '15px' : '20px' } } } />
      <CustomTypography text={`${props.height} cm`} style={ { ...styles.customTypography,  marginLeft: '60%', fontSize: window.innerWidth < props.responsiveThreshold ? '15px' : '20px' } } />
      <CustomTypography text={props.position} style={ { ...styles.customTypography, ...{ marginLeft: '80%', fontSize: window.innerWidth < props.responsiveThreshold ? '15px' : '20px' } } } />
      {props.editMode? <><Edit /><Delete /></>: <></>}
    </Button>
  );
}