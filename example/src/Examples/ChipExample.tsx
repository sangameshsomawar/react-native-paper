import React, { useRef } from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  DrawerLayoutAndroid,
} from 'react-native';

import { Card, Chip } from 'react-native-paper';

const navigationView = () => <View style={{ margin: 5, marginTop: 50 }} />;

export default function App() {
  const drawer = useRef(null);

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      style={{
        width: '100%',
        height: '100%',
      }}
      renderNavigationView={navigationView}
    >
      <View style={styles.container}>
        <ScrollView
          style={{
            flex: 1,
          }}
        >
          <Chip
            onPress={() => alert('clicked')}
            style={{
              backgroundColor: '#F0BF05',
            }}
          >
            This chip should take full width
          </Chip>

          <Card style={{ marginBottom: 5 }}>
            <Card.Title
              title={'Title'}
              subtitle={'SubTitle'}
              subtitleNumberOfLines={2}
            />
            <Card.Content>
              <View style={{ alignItems: 'flex-end' }}>
                <Chip
                  style={{
                    backgroundColor: '#F0BF05',
                  }}
                >
                  Right
                </Chip>
              </View>
              <View style={{ alignItems: 'flex-start' }}>
                <Chip
                  style={{
                    backgroundColor: '#00BFFF',
                  }}
                >
                  Left
                </Chip>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Chip
                  style={{
                    backgroundColor: '#F0BF05',
                  }}
                >
                  Right
                </Chip>
              </View>
            </Card.Content>
          </Card>
        </ScrollView>
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 12,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
