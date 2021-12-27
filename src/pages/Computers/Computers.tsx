import React from 'react';
import {Grid, Card, CardContent, Button} from '@mui/material';
import {Box} from '@mui/system';
import Computer from '../../components/Icons/Computers/Computer';
import computersData from './computersData';
import './Computers.css';

interface IComputersProps {
  toggleOpenCreateEntry: () => void;
  setPc: React.Dispatch<React.SetStateAction<string | undefined>>
}

const Computers = ({
  toggleOpenCreateEntry,
  setPc
}: IComputersProps) => {
  const handleClick = (e: any) => {
    toggleOpenCreateEntry();
    const computer = computersData.find((val) => Number(val.id) === Number(e.target.id));
    setPc(computer ? computer.name : '');
  }

  return (
    <Grid>
      <h2 className="fheader">Компьютеры</h2>
      {computersData.map((pc) => {

        return (
          <div className="computers-card">
            <Card>
              <CardContent>
                <Grid container>
                  <Grid item xs={2}>
                    <div style={{position: 'relative', top: '20px'}}>
                      <Computer/>
                    </div>
                  </Grid>
                  <Grid item xs>
                    <p className="fmain-text">
                      {pc.name} <br/>
                      Характеристики:
                      Процессор: {pc.cpu}<br/>
                      Видеокарта: {pc.gpu}<br/>
                      Оперативная память: {pc.ram}<br/>
                      Память: {pc.storage}<br/>
                      Разрешение монитора: {pc.monitor}
                    </p>
                  </Grid>
                  <Button 
                    variant="contained" 
                    className="btn-create-comp-entry" 
                    sx={{
                      backgroundColor: '#51a2f1', 
                      color: '#fff', 
                    }}
                    defaultValue={pc.id}
                  >
                    <p className="p-create-comp-antry" id={`${pc.id}`} onClick={handleClick}>Создать Запись</p>
                  </Button>
                </Grid>
              </CardContent>
            </Card>
          </div>
          )
      })}
    </Grid>
  )
}

export default Computers;