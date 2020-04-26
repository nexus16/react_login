import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon, Button } from 'native-base';

class TabComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
    };
  }
  static TabItem = ({content}) => {content};

  changeActiveTab = activeTab => {
    this.setState({ activeTab });
  };

  render() {
    const { activeTab } = this.state;
    const children = React.Children.toArray(this.props.children);
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderTopWidth: 1,
            borderTopColor: '#eae5e5',
          }}
        >
          {children.map((child, index) => (
            <Button
              key={index}
              transparent
              onPress={() => this.changeActiveTab(index)}
            >
              <Icon
                type="FontAwesome"
                name={child.props.iconName}
                style={[activeTab === index ? {} : { color: 'grey' }]}
              />
            </Button>
          ))}
        </View>
        {children[activeTab]}
      </View>
    );
  }
}


export default TabComponent;