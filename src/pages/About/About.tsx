import React from 'react';
import {Grid} from '@mui/material';
import {Box} from '@mui/system';
import Computer from '../../components/Icons/About/Computer';
import Person from '../../components/Icons/About/Person';
import Main from '../../components/Main/Main';
import Station from '../../components/Icons/About/Station';

const About = () => {
  return (
    <div>
      <h2 className="fheader">О нас</h2>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Computer />
        </Grid>
        <Grid item xs={8}>
          <p>
            Компьютерный клуб "PClub" предоставляет доступ к компьютерам с выходом в интернет и возможностью поиграть в любимые игры.
          </p>
        </Grid>
        <Grid item xs={2}/>

        <Grid item xs={2}/>
        <Grid item xs={8}>
          <p>
            Видеоигры - это современное хобби, которое имеет миллиарды поклонников по всему миру. По данным Statista, в 2020 году в мире насчитывается примерно 2,7 миллиарда геймеров, а в Азиатско-Тихоокеанском регионе - почти 1,5 миллиарда.
          </p>
        </Grid>
        <Grid item xs={2}>
          <Person />
        </Grid>


        <Grid item>
          <Station />
        </Grid>
        <Grid item xs={8}>
          <p>
          Здесь вы можете записаться в наш компьютерный клуб "PClub" и для этого не надо никому звонить! 
          Скорее нажимайте на кнопку записаться и играйте в топовые игры у нас ;)
          </p>
        </Grid>
        <Grid item xs={2}/>
      </Grid>
    </div>
  )
}

export default About;