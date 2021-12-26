import React from 'react';
import {Box, Grid} from '@mui/material';
import GoogleMap from '../../components/GoogleMap/GoogleMap';
import Address from '../../components/Icons/Contacts/Address';
import Phone from '../../components/Icons/Contacts/Phone';
import Email from '../../components/Icons/Contacts/Email';
import Persons from '../../components/Icons/Contacts/Persons';
import './Contacts.css';

const Contacts = () => {
  
  return (
    <Box>
      <h2 className="fheader">Контакты</h2>
      <Grid 
        container
        spacing={10}
        justifyContent={'center'}
      >
        <Grid item xs>
          <GoogleMap />
        </Grid>
        <Grid item xs>
          <Grid container >
            <Grid item xs>
              <div className="icons"><Address/></div>
            </Grid>
            <Grid item xs={11}>
              <h2 className='fadd-header'>Адрес</h2>
              <p className='fmain-text'>ул. Генкеля, 7а, к.4, Пермь, Пермский край, 614068</p>
            </Grid>
          </Grid>

          <Grid container >
            <Grid item xs>
              <div className="icons"><Phone/></div>
            </Grid>
            <Grid item xs={11}>
              <h2 className='fadd-header'>Номер телефона</h2>
              <p className='fmain-text'>+7 (900) 123 45 67</p>
            </Grid>
          </Grid>

          <Grid container >
            <Grid item xs>
              <div className="icons"><Email/></div>
            </Grid>
            <Grid item xs={11}>
              <h2 className='fadd-header'>E-mail</h2>
              <p className='fmain-text'>PClub@hotmail.com</p>
            </Grid>
          </Grid>

          <Grid container >
            <Grid item xs>
              <div className="icons"><Persons/></div>
            </Grid>
            <Grid item xs={11}>
              <h2 className='fadd-header'>Аналитик/Дизайнер</h2>
              <p className='fmain-text'>Калинина Кристина</p>
            </Grid>
          </Grid>

          <Grid container >
            <Grid item xs>
              <div className="icons"><Persons/></div>
            </Grid>
            <Grid item xs={11}>
              <h2 className='fadd-header'>Разработчик</h2>
              <p className='fmain-text'>Соболев Артем</p>
            </Grid>
          </Grid>

          <Grid container >
            <Grid item xs>
              <div className="icons"><Persons/></div>
            </Grid>
            <Grid item xs={11}>
              <h2 className='fadd-header'>Разработчик</h2>
              <p className='fmain-text'>Габдулбаров Рустам</p>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Box>
  )
}

export default Contacts;