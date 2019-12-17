// npm install if someerror comes
import React from 'react';
import { StyleSheet,View } from 'react-native';//Duplication Error+Cannot 
// import {  Button } from 'native-base'; //Aware of what you are copying + impact
import { 
  Container,
  Header, 
  Content, 
  Card,
  Button,
  Image, // Imp
  CardItem, 
  Thumbnail,
  Icon, 
  Text,
  Left,
  Body,
  Right } from 'native-base';
//import Expo from 'expo' //More Error Comes
// Error 3: Robot medium font --node_modulus
  
// import App from './App.js'
export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      isLoading:true
    }
  }

  //Error 4 :used if before it finished loading
  async componentWillMount(){
    await Expo.Font.loadAsync(
      {
        Roboto:require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium:require('native-base/Fonts/Roboto_medium.ttf')
      }
    );

    this.setState({isLoading:false})
  }

  //Error 5: Not Explained by Hitesh
  // Invariant Violation: Element type is invalid: expected a string( for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in.

  render() {
    if(this.state.isLoading){
      return <Expo.AppLoading/>;
    }
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 
                'data:image/jpeg;base64,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'}
                }
                style={{height: 200, width: null, flex: 1}} />
                <Body>
                  <Text>Animesh</Text>
                  <Text note>Code | </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRIVFRIVFRcVFRUVFRUVFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0fHyUtLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLf/AABEIAQMAwgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EADkQAAIBAwIEAwcDAgYCAwAAAAABAgMEEQUhEjFBUWFxgQYTIjKRocFCsdFS8BQjYnLh8ZKiM0OC/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACoRAAICAQQCAQMDBQAAAAAAAAABAhEDBBIhMRNBUSIy0WGB8AUUI3Gx/9oADAMBAAIRAxEAPwDcq9h6UBkshVGBoegTp0y6MB4RLoRGBBQJcJPImwChKIkkMx8CHRNorkhZG4mBSiR4BcJLi8BpSQiqIOJFok6iIuYCog0M0huDPNkoNIKBxQ0aLfQsVnJl0KpdGqOkQ7BVYS7orrafJrpkP94J1h0iOTDnp9T+n7gtSjKL3TXodG6hVKWRUgs55oRsVLWMumPIAubNx8V/fMKBg2RFTESFGlTiGUoFNGIbRiUWyUIExZHSGFDcIzYqkweVQDRQLskJ1kgWpcdilsmzVY/kJlcPoKM89QbiEqgF+MPSG4ASNctjcALxsvcRcJCNQs4hkOJW0RcSbZBsA2lbWCUKhFsYQnEJhXJOQJksUwM3AtlITZVxj8Q7IcS3iGlMqcxuIZLQ/wDh4dkIfKGAVD0YhUUVUolsWI0HHnLAmwWtUA0jEarMErVOhKtPAKpE2dUIcFmRpTK3MonMDaOOy91CDrYB5VCpzFZusYX78dV0A+8GU87dRWV4kacLnBfTuzJdKaWXGWPIrjWHZDwqXR0UayYnIxKd2wunddx2YywNBzYslEapOEgMXAmSiypsSkMhwLWsEeIktyqQGe0sciKkQTHAzcSfEIbKGGTtD/AtgVJbloDSK608Iz51C6+qGdOqS2deKA9apllbkVORXKoKzsUCydQplMhKZTKoS2bwgWSkQcyNNOb4YrLZ0GlaOo4lPEpdF0X8sEmx5ckcSuQBZaTUqbv4I93zfkjdtNNhTWyy+7DoxGnI0So8yefJk/RFMqUewJVsaLe9NZ8Mr9gupUx1BZ1l3GEIyXTBZaXR6KS8pP8AJTPSMfJU9JL8oKlWXcaNcXBqpZF7M2pCdP5lt35r6hFBSkspNr++oc6qfkKdfbAUhvI2uuShUZ9vuiFWLXNfdMslWCI0G4Sb7fs8gZOXyUU5Eqq6ltKhnluWOlsOjOVJgA+SMo4bQkxCcSzI42RARtNGmSm9iMCFWWzGTFcmXeVdzPqVC29qbgLnuZtnq4cfBbKY0YuXLl3Gs6XvJqPTdv0NSdLCwCRcpqDr2ZsqeCiUMvC5vZBlZBGkWvFLjfJbLzCrK8m2O5mhpOnKC7yfN9/DyNiEccyuEcIFurzBp0ea92WVsIr3CXUDlXbTfJd/4M+FV1Z8K5fqfZFOpXePhWEo7CbOmOGntXYXO5XX9wO5uGt/mj916GFVvlnm36/gVO7zyZG9HYtM1yabrxfh5FVSvKO+cx79vMCnU4vCXfv5jWt3vwy8mmKy/F7NOlfZCFcnNVa3BOUM8n9nuvs0G2l1kFP0LJp1Vo6OzfFJG5cfJJL+iX7HMWNbEkdLbPiTXdNfg1ieXnhtZnadcmyuGfmcpZTafC+aePozetqvIEGox82gTUaTiwSDNfVY8VPPWOH6GLBiZnDmITgRXxCAe01Iciqu9iVOWxGtyAyh2c7qDM9SNDVFzMZzMpM9vBG4HU+yiTVXbdcG/wD5fwFXMdwL2PmnCquvFH6Y2/IfXW5oukcGbjPL+ejJuomvpNPEVntn67mbcwy0u7Rqe+UIZBFZXcEkPqN6oLx6HM32oYzuNqF5xS3fc5nU7zOUZznR3aTS/J6P7P2/DRcsL3sln4ntlrZehyvtHN05cDTy/v45Ou0+X+XgF1OxhWi4T3XR9YvumXJWqRx4s2zM5S5R53Vnjm/oRpXST5v1N/UfZrC3k8YSUlhrw4o/8mNP2brfplCS6buL+jWPuczhJHsQ1GKS7CY3O37MjcT5TXk/wyiNnUown72LTa+HO626prZlFrVc1wJZb5LxC30y4qPa6Cdei8wqLm4Qb+mCVlKTjxdEss07rTXUUaeflioyl0WELVYRp0VShstl4t82347FbXdmUcyqMFz+ArTLjOGdjp0t/wC/A8x0e7+LDPStHll+Sh94o2xStHnf1DFtMvU4KFxJL9WJfXn90wynPYB9pJ4ul/sj+8i2E9i75Zg1eOLfwblq1JNPk1h+pzsouMnHqm19De09mVq+FWljrh+uBvo5cf3tEcjCQxJpQdTq7DVJglOoScxmcY8mbqK5mBzeDfvN9gWFmo+ZnJWz1cGRQjyP7PVPd1o5e0/gfry++Dpa8d2crUhg6mNVVIRn/UlnwfVfUqPwc2qVyU/ngDrL4k/UDvrltYDrzYxK8stgy8Md3Jk3tTGX13wYlnD3lVLpnLD9brYXnsR9n6WMy7nLLmVHrxe3HZ6Lp9T4EPOZn6dcYhgv57nWeFPH9TCIT77p7Y7mVWo8M2lye68g7jLYS69egCg3AGlCDjwSimnzTWV6pkLbTaFP5Kajnnjr68zQnGM1vz79QSvRnFbLiXh/AUXGV8XQHczS5bI5zW55nTXi39v+TTu6++HsYt1PiqxS5pMyyP0elp4U7MyxhKVyqcecqij9ZHrOhvNSrjkpRivSKOU9jtBlCU7qrHD+JUk+e/OTXTbb1Z1vsrT/AMuUn+qcpemcL7JDwxa5Zy6/MpppeuP3/iML2xaV3Du6cc/+Ui+EtkjM9squb6K7U6f3lNh1F8i7+pkKP+GH+joNOYBqVs3Wk8/04+iDNNQFf3GajxyW30L9HBC/I6EqYiHvGOI0BIyHlMpUhnIRSjyFWlm6m/Qurae0bWkW+KUe7WX67k7mBVGPme6jj7mhgK0CrvOk+3FH9n+A+7oZ6GLOTozU1+l/VdV9CXwdqfkg4+zS1F7fU5+vLCfqb+oTU6aqR3jJZOZvqmIkSNNKrRzWs1eKaXb8mvpeyRzznxTb7s3rCWyOaD5s9PIvpo6SxkHe9Mi1qBsJnUmebOHITkupsGiy2MijJxCSUKwPxlVep2eGMFjssu7iL5pPzSf7lOnWbqy+GKhBfNKMUv8A8prqPp+mTrPin8NNdesvCP8AJs3F1ClDCwlFbIXYTls+iHLBdarqEFThtnEYpeJt6XRUKMV2RyWlylcV+N/LDaP+5/wjqdWuVSpPvjC8+hUeeTn1EXFRxLv2clqkVOvUn44XlFY/klaohTgG2NEn2dM5KMK+DUtZcEHJ9Fkx6b3NXVPhpJd2l+fwZdJDZx4+nL5L8CGEAWZkZj5Boz3wXZJOmqZ2+mVOKlBr+lfsW1omF7L3XzU2/wDUvz+DoKi2NOzzckdk2jMrxMfUbbMWb1eJnXEegmdOGdME0aipWyg/9a/9mcf7Q0pUlKMuaT9fE6zSq/C5030k2vX/AJKvarTf8RRfD/8AJFfD4/6TKauPB2Y8vjzO+mzy6hzNqymYzpyi8STXmaNrUOSPB7EuUdBQkH05GNb1Q+lWOmLOKcTSpzLlMz41hSreJaZlssKrVsGhpOmcX+dW2preMX+rt6FWmaUtqtfaPOMOsvNdvA0bqFWtu8UqS6y228EUkZZMi+2Lr5f4KNT1nfhivBJfhGFeOTa9495P4YdX4vsieo6pSopxofFLrUl+CrRbaTbq1Mucu/NIlu3RtjxrHDdVf9f4Oo0KgoJeALrlz7yooLlHn5/3+5dK7UI4XzPkgezspzecN55s09HCvueSRTGnsaWnW+WvAsqaY0gm6rxt6e3ztbLx7+QUYZMm7iIBr1ZNxpr9OW/N9P77gNNFcN3l83uwiKED+iO0YRbwCAz3HLVJF1GrlA9UppVMS8zOz1VG0bWn3HBUhLonv5PZneRkmjzXjOj0DXIpKlUeGtot8n2TNIv0cWqwuS3L0b1emzPuIGo2nuC1oZKOTHOjlNQThUUlye3qgqjdhOpWnEmv7yYdObi8PmtjN8HpxrJElq2mRqZmop/1L8o556bTfyTSfbOTqaVfxK7nTbes+KcXGX9UNm/FrkyJQvo3x5nDh9HOU7GquUc+TQTCjVX6JfRm5aaBbx51asvDKibNuqFJfDT37yk5fuEcY56telf7UYGl6LWq804R7tb+iOmstHo0Pik05LrLdryXJFFzrDS5+iMW71By5s0VI528uX9Eb13rtOGXCPFLvI5TWNYqVfmlt25JegLdXZlNuclFdTOczt0+ljD6jQ0u295Lifyp7eLOooweyistgWn0VGKil4HV6NY4XE+bLhGjn1ef2V2Gjfqqbv7GzTppLCWCZGc8GvR42TLKfYDqlbhi5dk2ctVrTqSc57t/ZdkbmsVvha77GPTpkyN8NKNkqcS6JKlRbCI22BGeSZXgRZwiAys46qgGrzNOtEDVLLMmj28ciNKv0ZZKRCpRKcuPkBtSfKNnTPaCdFqMsyp9uq8n+Dr7LUaVaOYST7915o8zqyAKl1Om+OEnGS6p4/7Dy12Y5NDHLyuGet16WUzntWsn80Vuufiij2a9rVUxTr4UnspdH59mdPVpZ3NOJLg4Fv086kcVTrF8awdqej8TcobS7dH/AAYE5uLallNc0yHwejBxyK0an+KaK6l4+5nSuCidcTkWsKDatyB1rgFqVgadUzczphjRZXrGj7PWjk+LG72XkZ+n6fUuJcNOLxneXReb/B6h7P6JGlFLsVji5OzLV6mOKNexaRpON5czehTwSxgZyOpKj53JllN2yMpAl1UwiGpXqh4t8kYta5lPny7CbCGNy5I3FTjfgPBDRRbSjuSaydKjRtksDXUkk32Hp7Gbql1n4V6/wV0cqVsElcyEDDkWzopAM4gzjh+ZoSpg84CO3HMqlAGq0jRpxyPOzYqNY5KZzVzFozLyWzOou7Q5nVaDj5GGSNHfimmga0rHUaR7RVqeI8XFHtLf7nFU5cLNChWIhNxKnCORVJWepafrNOts/hn2fJ+TG1LTYVVhrfpJc1/wcHa3R0mma21iM949+q/k6ozUlyedPTSxvdABu9BuIv4Y8a7x5/RlMdBu5cqLXm4r8neWVaM1s00alJbYDwpk/wB9OPFI83p+x9zL5uGPq2/sjW0/2FjlOpKUvBbR/k7dItpy7lLFExnr8rXDoD0/SoUopRikl0SwaEY45CyQnURpVHBKUpO2SbB7u5UI5Yq9zFLdmJeV3N+HQGEIWwatJzk5P/oeKHSESdDl6GbCraJVSpj3N2oLxAxk74RK+uuBYXN8jFnU7ka9w289QZszlMqMaRf70Yp4hCtlhiRGdMsgi3gLIjOgSjHEs9DWjbZQIqRo2VTC4ZPyZSRpKftAdbT880Y2qaHxJna+7TK6lsn0E4pjx6mUWeI6nYSpScZLAHCbR7LqWhU6yxOOf3XkzjtS9g5rLpTTXaez+qOWeFro9TFrIS74ZzFG4D6F4VVvZe8h/wDTJ/7cS/ZioaDePlb1PVY/chbkdHlxvto17bU5R+WTXkzXtvauukorEn4rcyrH2QupfPwwXi8v6L+TpNP9nI0ueZS7s3hvZy5p6f3TYTba5XfzKOfBMKjqtZ9I48mRVvjpgmom/JwylD0i6Wo1WsZS8luVKUubk36jxQmgsztLoQmxsD+7bEZuRBltOAoUX1BdR1BQWI7y/bzAi3J0ieoahGmsZ3MSd05PLAanFKTlLdsupmMptmygooI4yPEQTFkSJomIryIqh0bsIJLcfIN7xsugjY5rCIIs4NiqDLqbAe4tt67hs8uP3QZC/pv9S9dgPmUV7dcx2PiXZrKvTf6k/Ui6tPlxL6o52UCtxFZaxL5OnUY9ME0kcvFtcm15F0L2ouufMLQPE/TOjeBNJnOzv6ncq/x1RfqC0Cwy+Tp3CLIOhE52Op1V1X0JS1ep4BaF4ZnQ8EUUzqU1zaRzNW8qS5yfpsDcItyLWB+2dTUvaK/VEjC/pPlJHM8IuENw3hXydLdXkIxbyn2Xc5iSy23zZPBLBLdjhFQKeAhKBeyqQqK3FRFsVWRFMVCaJCGEOhmrRLeMGdTYlCRocIXCQRF4BYyJ8QxhcahYpAakTjPkAE7il1A50mgydTb6D1FkRpGdGch2FVKAPKDEWplbGkhxZEVuIOI2CbZFgPeRwNgmkMIe4g4iwTZFgLcRwOORGLcRmD1ZFtRgVWeXhAVEaW+xJIeKJJCCUh8CFkQEbi3jCKMjPhUCaVXCx4lHOaCkN7wFVUXvBgg1VCxT3AVURZGqABcpcvNBPvDO94XqqAMLciuoil1yE6+QBClErlEd1BuMRdlbItlkmVyQhpiyJsgRcgHZY5DZK+IZyALLMjMr4iSYCsoup4B6USy65oZAXupDpDjNjNgZuQ+RDDALcQuVh7dRqbEIBLoIpsdscQwFxMvjyEIBseL/AHLovcQgExqrxkr4hCAaHi9iTYwgGOyORCAQzKmxCENDMZCEADIlFiEAMpq8yCGEAmOMIQEMkIQhiP/Z'}} 
              style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}


