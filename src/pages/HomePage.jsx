import styled from '@emotion/styled';
import { IonContent, IonHeader, IonPage, IonButton } from '@ionic/react';
import { useHistory } from 'react-router';
import Map from '../components/Map';
import InputForm from '../components/InputForm';

const HomePage = () => {
  return (
    <IonPage>
      <InputForm />
      <IonContent fullscreen>
        <Map />
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
