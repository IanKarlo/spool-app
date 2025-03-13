import { TouchableOpacity, View } from 'react-native'
import { Typography } from "../atomics/Typography";
import { usePathnameColor } from '@/hooks/usePathnameColor'
import { useTheme } from 'styled-components'
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import type { Colors } from '@/themes'

export default function NavBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const theme = useTheme();
  const { tabColor } = usePathnameColor();

  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      width: '100%',
      paddingHorizontal: 32,
      paddingTop: 16,
      paddingBottom: 24,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: theme.colors.tabBarBackground,
      boxShadow: '0px -4px 8px 0px rgba(0, 0, 0, 0.15)',
    }}>
    {state.routes.map((route, index) => {
      const TabBarIcon = descriptors[route.key].options.tabBarIcon;

      const { options } = descriptors[route.key];
      const label =
      options.tabBarLabel !== undefined
      ? options.tabBarLabel
      : options.title !== undefined
      ? options.title
      : route.name;

      const isFocused = state.index === index;

      const color = isFocused ? theme.colors[tabColor as Colors] : theme.colors.gray;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name, route.params);
        }
      };

      const onLongPress = () => {
        navigation.emit({
          type: 'tabLongPress',
          target: route.key,
        });
      };

      return (
        <TouchableOpacity
          key={route.key}
          accessibilityState={isFocused ? { selected: true } : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarButtonTestID}
          onPress={onPress}
          onLongPress={onLongPress}
          style={{ flex: 1 }}
        >
          <View style={{
            borderWidth: 1,
            borderColor: 'blue',
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            gap: 8,
          }} >
            {TabBarIcon && <TabBarIcon color={color} focused={isFocused} size={32} />}
            <Typography style={{ color, fontSize: 12, lineHeight: 16 }}>
              {label as string}
            </Typography>
          </View>
        </TouchableOpacity>
      );
    })}
  </View>
);

}