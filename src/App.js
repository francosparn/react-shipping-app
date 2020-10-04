import React, { useState, Fragment } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';
import Spinner from './components/Spinner';
import Footer from './components/Footer';

import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 630px;
  margin: 0 auto;
  -webkit-box-shadow: 0px 3px 7px 0px rgba(191,191,191,1);
  -moz-box-shadow: 0px 3px 7px 0px rgba(191,191,191,1);
  box-shadow: 0px 3px 7px 0px rgba(191,191,191,1);
`;

const FormContainer = styled.div`
  background-color: #FFF;
  padding: 1rem;
`;

function App() {

  const [ summary, saveSummary ] = useState({
    cost: 0,
    data: {
      address: '',
      numberAddress: '',
      postalCode: '',
      province: '',
      weight: '',
      plan: ''
    }
  });

  const [ loading, saveLoading] = useState(false);

  // Extract data
  const { cost, data } = summary;

  return (
    <Fragment>

      <Container>
          
          <Header 
            title='Shipping App'
          />

          <FormContainer>
            <Form 
              saveSummary={saveSummary}
              saveLoading={saveLoading}
            />

            { loading ? <Spinner /> : null }

            { !loading ? 
              <Summary 
                data={data}
            /> : null 
            }

            { !loading ? 
              <Result 
                cost={cost}
              /> : null 
            }

          </FormContainer>
      </Container>

        <Footer />

      </Fragment>

  );
}

export default App;
