import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Ionicons from 'react-native-vector-icons/Ionicons';

// common utils
import IconWithBadge from './common/IconWithBadge';
import FocusAwareStatusBar from './common/FocusWareStatusBar';

// Import our tab components
import WorkoutTab from './tabs/WorkoutTab';
import SearchTab from './tabs/SearchTab';
import RankingTab from './tabs/RankingTab';
import NotificationTab from './tabs/NotificationTab';
import MessageTab from './tabs/MessageTab';

// Tag names for navigator
const WORKOUT_TAG = 'Workouts';
const SEARCH_TAG = 'Search';
const RANKING_TAG = 'Rankings';
const NOTIFICATION_TAG = 'Notifications';
const MESSAGE_TAG = 'Messages';

// Theme Constants
const STATUS_BG_COLOR = '#fff'; // '#6a51ae'

// Create tab navigator
const Tab = createBottomTabNavigator();

export default function MainScreen({ navigation, route }) {
	const [count, setCount] = React.useState(0);

	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<Button onPress={() => setCount(c => c + 1)} title="Right" />
			),
			headerLeft: () => (
				<Button onPress={() => setCount(c => c + 1)} title="Left" />
			),
		});
	}, [navigation]);

	return (
    <>
    <FocusAwareStatusBar barStyle='dark-content' backgroundColor={STATUS_BG_COLOR} />
		<Tab.Navigator
        initialRouteName={RANKING_TAG}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case WORKOUT_TAG:
                iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                break;
              case SEARCH_TAG:
                iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                break;            
              case RANKING_TAG:
                iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                break;                
              case NOTIFICATION_TAG:
                iconName = focused ? 'ios-notifications' : 'ios-notifications-outline';
                break;
              case MESSAGE_TAG:
                iconName = focused ? 'ios-chatboxes' : 'ios-chatboxes';
                break;
            }

            // You can return any component that you like here!
						return <IconWithBadge name={iconName} size={size} color={color} badgeCount={0} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          //showLabel: false,
        }}
      >
			<Tab.Screen name={WORKOUT_TAG} component={WorkoutTab} />
			<Tab.Screen name={SEARCH_TAG} component={SearchTab} />
			<Tab.Screen name={RANKING_TAG} component={RankingTab} />
			<Tab.Screen name={NOTIFICATION_TAG} component={NotificationTab} />
			<Tab.Screen name={MESSAGE_TAG} component={MessageTab} />
		</Tab.Navigator>
    </>
	);
}
