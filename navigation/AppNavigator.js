import * as React from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import * as Icon from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DeckList from '../components/DeckList';
import AddDeck from '../components/AddDeck';
import DeckDetail from '../components/DeckDetail';
import AddCard from '../components/AddCard';
import Quiz from '../components/Quiz';
import Settings from '../components/Settings';

import { darkGray, white, green, lightGreen } from '../utils/colors';

const isIOS = Platform.OS === 'ios' ? true : false;

const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name='DeckList'
      component={DeckList}
      options={{
        title: 'Decks',
        tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => (
          <Icon.Ionicons
            name={isIOS ? 'ios-bookmarks' : 'md-bookmarks'}
            size={30}
            color={tintColor}
          />
        ),
      }}
    />
    <HomeStack.Screen
      name='DeckDetail'
      component={DeckDetail}
      options={{
        headerTintColor: green,
        headerStyle: {
          backgroundColor: lightGreen,
        },
        title: 'Deck Details',
      }}
    />
    <HomeStack.Screen
      name='AddCard'
      component={AddCard}
      options={{
        headerTintColor: green,
        headerStyle: {
          backgroundColor: lightGreen,
        },
        headerTitleStyle: {
          justifyContent: 'center',
          textAlign: 'center',
        },
        title: 'Add Card',
      }}
    ></HomeStack.Screen>
    <HomeStack.Screen
      name='Quiz'
      component={Quiz}
      options={{
        headerTintColor: green,
        headerStyle: {
          backgroundColor: lightGreen,
        },
        title: 'Quiz',
      }}
    />
  </HomeStack.Navigator>
);

const Tabs = createBottomTabNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: green,
          showIcon: true,
        }}
      >
        <Tabs.Screen
          name='Home'
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Decks',
            tabBarIcon: ({ tintColor }) => (
              <Icon.Ionicons
                name={isIOS ? 'ios-bookmarks' : 'md-bookmarks'}
                size={30}
                color={tintColor}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='AddDeck'
          component={AddDeck}
          options={{
            tabBarLabel: 'Add Deck',
            tabBarIcon: ({ tintColor }) => (
              <Icon.FontAwesome
                name='plus-square'
                size={30}
                color={tintColor}
              />
            ),
            title: 'Add Deck',
          }}
        />
        <Tabs.Screen
          name='Settings'
          component={Settings}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ tintColor }) => (
              <Icon.FontAwesome name='sliders' size={30} color={tintColor} />
            ),
            title: 'Settings',
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
