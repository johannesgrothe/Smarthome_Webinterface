/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import HomeScreen from "../screens/HomeScreen";
import ClientScreen from "../screens/ClientScreen";
import GadgetScreen from "../screens/GadgetScreen";
import LogInScreen from "../screens/LogInScreen";
import { useState } from "react";
import { store } from "../store/store";


export default function Navigation({colorScheme}: { colorScheme: ColorSchemeName }) {
  const [isAuthorized, setIsAuthorized] = useState(store.getState().auth.isAuthorized)

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      { isAuthorized === false ? ( <LogInScreen setIsAuthorized={setIsAuthorized}/> ) : ( <RootNavigator/> ) }
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {

  return (
    <Stack.Navigator>
        <Stack.Screen name="Root" component={BottomTabNavigator} options={{headerShown: false}}/>
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}}/>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      {/*<BottomTab.Screen*/}
      {/*  name="TabOne"*/}
      {/*  component={TabOneScreen}*/}
      {/*  options={({navigation}: RootTabScreenProps<'TabOne'>) => ({*/}
      {/*    title: 'Tab One',*/}
      {/*    tabBarIcon: ({color}) => <TabBarIcon name="code" color={color}/>,*/}
      {/*    headerRight: () => (*/}
      {/*      <Pressable*/}
      {/*        onPress={() => navigation.navigate('Modal')}*/}
      {/*        style={({pressed}) => ({*/}
      {/*          opacity: pressed ? 0.5 : 1,*/}
      {/*        })}>*/}
      {/*        <FontAwesome*/}
      {/*          name="info-circle"*/}
      {/*          size={25}*/}
      {/*          color={Colors[colorScheme].text}*/}
      {/*          style={{marginRight: 15}}*/}
      {/*        />*/}
      {/*      </Pressable>*/}
      {/*    ),*/}
      {/*  })}*/}
      {/*/>*/}
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => <TabBarIcon name="code" color={color}/>,
        }}
      />
      <BottomTab.Screen
        name="Client"
        component={ClientScreen}
        options={{
          title: 'Clients',
          tabBarIcon: ({color}) => <TabBarIcon name="code" color={color}/>,
        }}
      />
      <BottomTab.Screen
        name="Gadget"
        component={GadgetScreen}
        options={{
          title: 'Gadgets',
          tabBarIcon: ({color}) => <TabBarIcon name="code" color={color}/>,
        }}
      />
      {/*<BottomTab.Screen*/}
      {/*  name="User"*/}
      {/*  component={LogInScreen}*/}
      {/*  options={{*/}
      {/*    title: 'User Management',*/}
      {/*    tabBarIcon: ({color}) => <TabBarIcon name="code" color={color}/>,*/}
      {/*  }}*/}
      {/*/>*/}
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{marginBottom: -3}} {...props} />;
}
