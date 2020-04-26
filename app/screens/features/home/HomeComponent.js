import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { 
  Container, 
  Content, 
  Thumbnail, 
  Header, 
  Title, 
  Left, 
  Right, 
  Body, 
  Spinner 
} from 'native-base';

import CardComponent from "../../../components/CardComponent";
import AppHeader from "../../../components/AppHeader";
import Post from "../../../components/Post";
import { feed, stories } from '../../../services/fakeData';

function HomeComponent(props) {
  // console.log(props);

  const {
    loading,
    followings,
    onScroll,
    navigation
  } = props;

  return (
    <Container style={styles.container}>        
      <AppHeader
          leftIconName="camera"
          title="Instagram"
          styleTitle={styles.title}
          rightIconName="send"
        />
      <Content 
        scrollEventThrottle={300} 
        onScroll={onScroll}
        removeClippedSubviews={true}>
        <View style={{ height: 100 }}>
          <View style={{ flex: 1 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: 'center',
                paddingStart: 5,
                paddingEnd: 5
              }}>
                {stories.map(story => (
                  <Thumbnail 
                  style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                  source={story.picture} />
                ))}
            </ScrollView>
          </View>
        </View>
        {feed.map(post => (
          <Post key={post.id} {...post} navigation={navigation}/>
        ))}

      </Content>
    </Container>
  );
}

HomeComponent.propTypes = {
  followings: PropTypes.array,
  feeds: PropTypes.object,
  onScroll: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 25,
    color: '#242424',
  }
});

export default HomeComponent;