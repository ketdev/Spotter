import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Load SVG icons
import IconBarbell from "../assets/barbell.svg";
import IconBarbellOutline from "../assets/barbell-outline.svg";
import IconSearch from "../assets/search.svg";
import IconSearchOutline from "../assets/search-outline.svg";
import IconTrophy from "../assets/trophy.svg";
import IconTrophyOutline from "../assets/trophy-outline.svg";
import IconNotifications from "../assets/notifications.svg";
import IconNotificationsOutline from "../assets/notifications-outline.svg";
import IconChatboxEllipses from "../assets/chatbox-ellipses.svg";
import IconChatboxEllipsesOutline from "../assets/chatbox-ellipses-outline.svg";

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

// Create tab navigator
const Tab = createBottomTabNavigator();

export default function MainScreen({ navigation, route }) {
	return (
    <>
    <FocusAwareStatusBar barStyle='light-content' backgroundColor='#000' />
		<Tab.Navigator
        initialRouteName={RANKING_TAG}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case WORKOUT_TAG:
                if(focused) return <IconBarbell width={size} height={size} color={color}/>;
                else return <IconBarbellOutline width={size} height={size} color={color}/>;
                
              case SEARCH_TAG:
                if(focused) return <IconSearch width={size} height={size} color={color}/>;
                else return <IconSearchOutline width={size} height={size} color={color}/>;
                
              case RANKING_TAG:
                if(focused) return <IconTrophy width={size} height={size} color={color}/>;
                else return <IconTrophyOutline width={size} height={size} color={color}/>;
                
              case NOTIFICATION_TAG:
                if(focused) return <IconNotifications width={size} height={size} color={color}/>;
                else return <IconNotificationsOutline width={size} height={size} color={color}/>;

              case MESSAGE_TAG:
                if(focused) return <IconChatboxEllipses width={size} height={size} color={color}/>;
                else return <IconChatboxEllipsesOutline width={size} height={size} color={color}/>;
            }

            // You can return any component that you like here!
						return <IconWithBadge name={iconName} size={size} color={color} badgeCount={0} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          // showLabel: false,
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
