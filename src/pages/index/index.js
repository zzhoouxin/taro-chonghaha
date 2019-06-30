import Taro, {Component} from '@tarojs/taro';
import {View, Text, Button, Image, ScrollView} from '@tarojs/components';
import './index.scss'
import {getWindowHeight} from './../../utils/style'
import moeny from './img/moeny.png';

import aboutus from './img/aboutus.png';
import order from './img/order.png';
import balance from './img/balance.png';
import useHelp from './img/useHelp.png';
import repairs from './img/repairs.png';
import vehicle from './img/vehicle.png';
import downLoad from './img/download.png';
import right from './img/right.png';

const menuList = [
  {id: 1, title: "余额充值", url: balance},
  {id: 2, title: "历史订单", url: order},
  {id: 3, title: "使用帮助", url: useHelp},
  {id: 4, title: "关于我们", url: aboutus},
  {id: 5, title: "故障报修", url: repairs},
  {id: 6, title: "车队入口", url: vehicle},
  {id: 7, title: "APP下载", url: downLoad}
];

export default class Index extends Component {
  config = {
    navigationBarTitleText: 'one'
  }

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <ScrollView
        scrollY
        style={{height: getWindowHeight()}}
      >
        {/*用户信息*/}
        <View className='user_view'>
          <View className='user_view-info'>
            <Text style={{fontWeight:"bold"}}>7和左灯</Text>
            <View className='user_view-info-phone-f'>
              <Text className='user_view-info-phone'>绑定手机号码</Text>
              <Image className='user_view-info-right-icon'src={right}/>
            </View>
          </View>
          <View className='user_view-info-img'>
            <Image className='user_view-info-img'
                   src='https://yanxuan.nosdn.127.net/7c1e14b2736484bf92b76b9fc3a0c50b.png'/>
          </View>
        </View>
        {/*余额*/}
        <View className='balance'>
          <Image src={moeny} className='balance-icon'/>
          <Text className='balance-desc'>余额:</Text> <Text className='balance-money balance-desc'> ￥0元</Text>
        </View>

        {/*菜单*/}
        <View className='menu'>
          {
            menuList.map((item) => {
              return (
                <View className={item.id === 7 ? 'menu-item menu-onLine' : 'menu-item '} key={item.id} onClick={()=>{console.log("点击了时间")}}>
                  <Image src={item.url} className='menu-icon'/>
                  <Text className='menu-title'>{item.title}</Text>
                </View>
              )

            })
          }
        </View>

        <View className='extract'>
          <Text className='extract-title'>提现</Text>
        </View>




      </ScrollView>
    );
  }
}
