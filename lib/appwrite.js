import { Account, Avatars, Client } from 'react-native-appwrite';

export const client = new Client().setEndpoint('https://sgp.cloud.appwrite.io/v1').setProject('6924263a001a8b1be012').setPlatform('com.elmo.demoapp');

export const account = new Account(client);
export const avatars = new Avatars(client);
