import * as React from 'react'; 
import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Load theme colors
import {COLOR_INACTIVE, COLOR_PRIMARY} from '../components/Theme';

// Load SVG icons
import IconBarbell from "../../assets/barbell.svg";
import IconBarbellOutline from "../../assets/barbell-outline.svg";
import IconSearch from "../../assets/search.svg";
import IconSearchOutline from "../../assets/search-outline.svg";
import IconTrophy from "../../assets/trophy.svg";
import IconTrophyOutline from "../../assets/trophy-outline.svg";
import IconNotifications from "../../assets/notifications.svg";
import IconNotificationsOutline from "../../assets/notifications-outline.svg";
import IconChatboxEllipses from "../../assets/chatbox-ellipses.svg";
import IconChatboxEllipsesOutline from "../../assets/chatbox-ellipses-outline.svg";

// Import our tab components
import WorkoutStack, { WORKOUTS_NAVTAG } from './WorkoutStack';
import SearchTab from '../tabs/SearchTab';
import RankingTab from '../tabs/RankingTab';
import NotificationTab from '../tabs/NotificationTab';
import MessagesScreen, { MESSENGER_NAVTAG } from '../screen/MessagesScreen';

// Tag names for navigator
const SEARCH_TAG = 'Search';
const RANKING_TAG = 'Rankings';
const NOTIFICATION_TAG = 'Notifications';
 
function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();
    return isFocused ? < StatusBar {...props} /> : null;
  }

// Create tab navigator
const Tab = createBottomTabNavigator();

export default function MainTabs({ navigation, route }) {
	return (
    <>
    <FocusAwareStatusBar barStyle='light-content' backgroundColor='#000' />
		<Tab.Navigator
        initialRouteName={RANKING_TAG}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            switch (route.name) {
              case WORKOUTS_NAVTAG:
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

              case MESSENGER_NAVTAG:
                if(focused) return <IconChatboxEllipses width={size} height={size} color={color}/>;
                else return <IconChatboxEllipsesOutline width={size} height={size} color={color}/>;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: COLOR_PRIMARY,
          inactiveTintColor: COLOR_INACTIVE,
          // showLabel: false,
        }}
      >
			<Tab.Screen name={WORKOUTS_NAVTAG} component={WorkoutStack} />
			<Tab.Screen name={SEARCH_TAG} component={SearchTab} />
			<Tab.Screen name={RANKING_TAG} component={RankingTab} />
			<Tab.Screen name={NOTIFICATION_TAG} component={NotificationTab} />
			<Tab.Screen name={MESSENGER_NAVTAG} component={MessagesScreen} />
		</Tab.Navigator>
    </>
	);
}
