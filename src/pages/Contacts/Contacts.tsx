import React from 'react';
import {Box, Grid} from '@mui/material';
import {GoogleMap} from '../../components/GoogleMap/GoogleMap';
import Address from '../../components/Icons/Contacts/Address';
import Phone from '../../components/Icons/Contacts/Phone';
import Email from '../../components/Icons/Contacts/Email';
import Persons from '../../components/Icons/Contacts/Persons';
import './Contacts.css';

const Contacts = () => {
  
  return (
    <Box>
      <h2>Контакты</h2>
      <Grid 
        container
        spacing={2}
        justifyContent={'center'}
      >
        <Grid item xs={5}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1867.6178245781193!2d56.189326197280884!3d58.006621877992664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43e8c76999ca46c3%3A0x606e021a65d16a67!2z0JrQvtC70LvQtdC00LYg0L_RgNC-0YTQtdGB0YHQuNC-0L3QsNC70YzQvdC-0LPQviDQvtCx0YDQsNC30L7QstCw0L3QuNGPINCf0JPQndCY0KM!5e0!3m2!1sru!2sru!4v1640501829103!5m2!1sru!2sru" width="600" height="450" style={{border: 0}} allowFullScreen={false} loading="lazy"></iframe>
        </Grid>
        <Grid item xs={4}>
          <Grid container >
            <Grid item xs>
              <div className="icons"><Address/></div>
            </Grid>
            <Grid item xs={11}>
              <h2>Адрес</h2>
              <p>ул. Генкеля, 7а, к.4, Пермь, Пермский край, 614068</p>
            </Grid>
          </Grid>

          <Grid container >
            <Grid item xs>
              <div className="icons"><Phone/></div>
            </Grid>
            <Grid item xs={11}>
              <h2>Номер телефона</h2>
              <p>+7 (900) 123 45 67</p>
            </Grid>
          </Grid>

          <Grid container >
            <Grid item xs>
              <div className="icons"><Email/></div>
            </Grid>
            <Grid item xs={11}>
              <h2>E-mail</h2>
              <p>PClub@hotmail.com</p>
            </Grid>
          </Grid>

          <Grid container >
            <Grid item xs>
              <div className="icons"><Persons/></div>
            </Grid>
            <Grid item xs={11}>
              <h2>Аналитик/Дизайнер</h2>
              <p>Калинина Кристина</p>
            </Grid>
          </Grid>

          <Grid container >
            <Grid item xs>
              <div className="icons"><Persons/></div>
            </Grid>
            <Grid item xs={11}>
              <h2>Разработчик</h2>
              <p>Соболев Артем</p>
            </Grid>
          </Grid>

          <Grid container >
            <Grid item xs>
              <div className="icons"><Persons/></div>
            </Grid>
            <Grid item xs={11}>
              <h2>Разработчик</h2>
              <p>Габдулбаров Рустам</p>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Box>
  )
}

export default Contacts;