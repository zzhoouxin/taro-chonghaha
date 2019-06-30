import {Component} from '@tarojs/taro';
import {Text, View} from '@tarojs/components';
import './index.scss'


export default class Index extends Component {
  config = {
    navigationBarTitleText: 'one'
  }

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View>
        <Text>第二个页面</Text>
      </View>

    );
  }
}
