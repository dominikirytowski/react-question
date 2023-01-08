import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import './App.css';
import { useState } from 'react';

const questionsAndAnswers = [
  {
    singleline: "When were the French wars of religion?",
    multiline: "The French Wars of Religion in the 16th century and French Revolution in the 18th successively destroyed much of what existed in the way of the architectural and artistic remnant of this Norman creativity. The former, with their violence, caused the wanton destruction of many Norman edifices; the latter, with its assault on religion, caused the purposeful destruction of religious objects of any type, and its destabilisation of society resulted in rampant pillaging.",
    answer: "16th century"
  },
  {
    singleline: "What is Norman art's most well known piece?",
    multiline: "By far the most famous work of Norman art is the Bayeux Tapestry, which is not a tapestry but a work of embroidery. It was commissioned by Odo, the Bishop of Bayeux and first Earl of Kent, employing natives from Kent who were learned in the Nordic traditions imported in the previous half century by the Danish Vikings.",
    answer: "Bayeux Tapestry"
  }

]


function App() {
  const [multiline, setMultiline] = useState('');
  const [singleline, setSingleline] = useState('');
  const [result, setResult] = useState('');
  const [showResult, setShowResult] = useState(false);

  const clearAllFields = () => {
    setMultiline("");
    setSingleline("");
    setShowResult(false);
  }

  const handleClickOk = () => {

    questionsAndAnswers.forEach(el => {
      if (el.multiline === multiline && el.singleline === singleline) {
        setResult(el.answer);
      }
    })
    if (result !== '') {
      setShowResult(true);
    }
  }

  const showStateValue = () => {
    return (
      <>
        <h3>{result}</h3>
      </>
    )
  }

  return (
    <div className="App">
      <Grid container className="innerDiv" style={{ display: "flex", justifyContent: "center" }}>
        <Grid xs={7} className="item" style={{ height: "40%" }}>
          <TextField
            id="outlined-multiline-flexible"
            label={<Typography fontWeight="bold">Context</Typography>}
            multiline
            rows={4}
            variant="outlined"
            style={{ width: "50%" }}
            inputProps={{ style: { fontWeight: "bold" } }}
            onChange={e => setMultiline(e.target.value)}
            value={multiline}
          />
        </Grid>
        <Grid xs={7} className="item">
          <TextField id="outlined-basic" label={<Typography fontWeight="bold">Question</Typography>} variant="outlined" style={{ width: "50%" }} inputProps={{ style: { fontWeight: "bold" } }} value={singleline} onChange={e => setSingleline(e.target.value)} />
        </Grid>
        <Grid xs={7} className="item-generated">
          {showResult ? showStateValue() : null}
        </Grid>
        <Grid xs={7} className="item" container>
          <Grid xs={5} className="buttonContainerClear">
            <Button variant="contained" className='button' onClick={clearAllFields}>Clear</Button>
          </Grid>
          <Grid xs={5} className="buttonContainerOk">
            <Button variant="contained" className='button' onClick={handleClickOk}>Ok</Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
