import React, {useState, useContext} from 'react';
import {Text, View, Button, ActivityIndicator, Alert, TouchableOpacity} from 'react-native';
import { connect } from "react-redux";
import { Icon, Container, Content } from 'native-base';
import CardComponent from "../../../components/CardComponent";
import AppHeader from "../../../components/appHeader";
import IconHeader from "../../../components/appHeader/IconHeader";
import BackIcon from "../../../components/appHeader/BackIcon";
import TabComponent from "../../../components/TabComponent";
import IconTabs from "../../../components/iconTabs";
import ProfileHeader from "../../../components/profileHeader";
import GridView from './GridView';
import ListView from './ListView';

export default ProfileComponent = ({
  profile,
  type,
  navigation
}) => {
  return (
    <Container>
      {
        (type == 1) ?
        (
          <AppHeader
            title={profile.nickname}
          >
            <AppHeader.LeftHeader>
              <BackIcon
                navigation={navigation}
              />
            </AppHeader.LeftHeader>
            <AppHeader.RightHeader>
              <IconHeader
                name="ellipsis-h"
              />
            </AppHeader.RightHeader>
          </AppHeader>
        )
        :
        (
          <AppHeader
            title="Profile"
          >
            <AppHeader.LeftHeader>
              <></>
            </AppHeader.LeftHeader>
            <AppHeader.RightHeader>
              <IconHeader
                name="bars"
              />
            </AppHeader.RightHeader>
          </AppHeader>
        )
      }
      
      <Content>
        <ProfileHeader
          profilePic={profile.avatar}
          nickname={profile.nickname}
          followDetail={{
            posts: profile.posts,
            followers: profile.followers,
            following: profile.following,
          }}
        >
          <Text>{profile.description}</Text>
        </ProfileHeader>
        <IconTabs>
          <IconTabs.TabItem iconName="th">
            {
              !!profile.feed && (<GridView posts={profile.feed} />)
            }
          </IconTabs.TabItem>
          <IconTabs.TabItem iconName="list">
            {
              !!profile.feed && (<ListView posts={profile.feed} />)
            }
          </IconTabs.TabItem>
          <IconTabs.TabItem iconName="id-card">
            <View>
              <Text>3</Text>
            </View>
          </IconTabs.TabItem>
          <IconTabs.TabItem iconName="bookmark">
            <View>
              <Text>4</Text>
            </View>
          </IconTabs.TabItem>
        </IconTabs>
      </Content>
    </Container>
  );
}