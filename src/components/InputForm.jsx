import React, { useState } from 'react';
import styled from '@emotion/styled';
import { IonHeader, IonToolbar, IonTitle, IonInput, IonButton, IonList, IonItemDivider, IonItem } from '@ionic/react';

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
          <IonButton>길 찾기</IonButton>
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
  }

  .button {
    height: auto;
    margin: 16px;
  }
  .button-native {
    color: white !important;
  }
`;
