import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';
import UserOnly from '../../components/auth/UserOnly';
import { Colors } from '../../constans/colors';

const DashboardLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <UserOnly>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.background,
            paddingTop: 5,
            height: 100,
          },
          tabBarActiveTintColor: theme.iconColorFocused,
          tabBarInactiveTintColor: theme.iconColor,
        }}
      >
        <Tabs.Screen
          name='books'
          options={{
            title: 'Books',
            tabBarIcon: ({ focused }) => <Ionicons name={focused ? 'book' : 'book-outline'} size={24} color={focused ? theme.iconColorFocused : theme.iconColor} />,
          }}
        />
        <Tabs.Screen
          name='create'
          options={{
            title: 'Create',
            tabBarIcon: ({ focused }) => <Ionicons name={focused ? 'create' : 'create-outline'} size={24} color={focused ? theme.iconColorFocused : theme.iconColor} />,
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            title: 'Profile',
            tabBarIcon: ({ focused }) => <Ionicons name={focused ? 'person' : 'person-outline'} size={24} color={focused ? theme.iconColorFocused : theme.iconColor} />,
          }}
        />
      </Tabs>
    </UserOnly>
  );
};

export default DashboardLayout;
