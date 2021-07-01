import styled from '@emotion/styled';
import { IonContent, IonHeader, IonPage } from '@ionic/react';
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
