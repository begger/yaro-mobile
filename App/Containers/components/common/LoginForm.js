//@flow

import React, { Component } from 'react';
import firebase from 'firebase';
import { Alert } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './';

type State = {
    email: string,
    password: string,
    loding: boolean
}

const initState = {
    email: '',
    password: '',
    loading: false
};

export class LoginForm extends Component {
    state: State = initState;
    onButtonPress = async () : Promise<void> => {
        const { email, password } = this.state;
        this.setState({ loading: true });
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            this.setState(initState);
        } catch (e) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password);
                this.setState(initState);                
            } catch (err) {
                this.setState({ loading: false });
                console.log(err)
                Alert.alert('Authentication failed!');
            }
        }
    }
    render() {
        const { loading } = this.state;
        return (
            <Card>
                <CardSection>
                    <Input 
                        value={this.state.email}
                        label="E-mail"
                        placeholder="username@gmail.com"
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        value={this.state.password}
                        label="Password"
                        secureTextEntry
                        placeholder="password"
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                <CardSection>
                    {
                        loading ?   <Spinner /> :
                                    <Button
                                        onPress={this.onButtonPress}
                                        autoCorrect={false}
                                    >
                                        Login
                                    </Button>
                    }
                </CardSection>
            </Card>
        );
    }
}
