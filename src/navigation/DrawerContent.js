import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Title, Caption, Drawer} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function DrawerContent(props) {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 25}}>
              <Avatar.Image
                source={{
                  uri:
                    'https://scontent.fsaw1-8.fna.fbcdn.net/v/t1.0-9/130723000_4211508225532570_7042456428318549288_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=iU8UMBxNvToAX9PoFV9&_nc_ht=scontent.fsaw1-8.fna&oh=36cda3049b68764375781f45211cb566&oe=600EC911',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Ayberk Gerey</Title>
                <Caption style={styles.caption}>@exyphinos</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home" color={'white'} size={size} />
              )}
              label="Home"
              labelStyle={{color: 'white'}}
              onPress={() => {
                props.navigation.navigate('MainScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="inbox" color={'white'} size={size} />
              )}
              label="Markets"
              labelStyle={{color: 'white'}}
              onPress={() => {
                props.navigation.navigate('TodoApp');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="bitcoin" color={'white'} size={size} />
              )}
              label="My Coins"
              labelStyle={{color: 'white'}}
              onPress={() => {}}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="close" color={'white'} size={size} />
          )}
          label="Sign Out"
          labelStyle={{color: 'white'}}
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    paddingBottom: 15,
    borderBottomColor: 'mediumpurple',
    borderWidth: 2,
  },
  title: {
    color: 'white',
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: 'white',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
});
