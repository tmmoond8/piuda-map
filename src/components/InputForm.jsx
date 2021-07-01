import React, { useState } from 'react';
import styled from '@emotion/styled';
import { IonHeader, IonToolbar, IonInput, IonButton, IonList, IonItem } from '@ionic/react';

const InputForm = () => {

  const [departure, setDeparture] = useState("");
  const [arrival, setArrval ] = useState("");

  return (
    <IonHeader>
      <IonToolbar>
        <Form>
          <IonList>
            <IonItem>
              <IonInput value={departure} placeholder="Enter Departure" onIonChange={e => setDeparture(e.detail.value)}></IonInput>
            </IonItem>
            <IonItem>
              <IonInput value={arrival} placeholder="Enter Arrival" onIonChange={e => setArrval(e.detail.value)}></IonInput>
            </IonItem>
          </IonList>
          <IonButton>
            <span className="button--text">길찾기</span>
          </IonButton>
        </Form>
      </IonToolbar>
    </IonHeader>
  )
}

export default InputForm;

const Form = styled.form`
  display: flex;

  .list-md {
    flex: 1;
    padding: 16px 0 16px 16px;
  }

  .button {
    height: auto;
    margin: 16px;
  }
  .button--text {
    color: white !important;
  }
`;
