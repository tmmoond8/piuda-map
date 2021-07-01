import styled from '@emotion/styled';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useHistory } from 'react-router';

const HomePage: React.FC = () => {
  const history = useHistory();
  const handleMoveMap = () => {
    history.push('/map');
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Content>
          <IonButton onClick={handleMoveMap}>Map 으로</IonButton>
        </Content>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;