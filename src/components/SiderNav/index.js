import React from 'react'
import CustomMenu from "../CustomMenu/index";
{/* <Icon type="project" /> */}
const menus = [
  {
    title: '首页',
    icon: 'home',
    key: '/home'
  },
  {
    title: '内容',
    icon: 'book',
    key: '/home/general',
    subs: [
      {key: '/content/add', title: '添加', icon: 'plus',},
      {key: '/content/manager', title: '管理', icon: 'appstore',},
      // {key: '/content/category', title: '栏目', icon: 'gold',},
    ]
  },
  {
    title: '设置',
    icon: 'book',
    key: '/home/general2',
    subs: [
      {key: '/home/general/manager2', title: '基本信息', icon: 'plus',},
      {key: '/home/general/manager3', title: '语言', icon: 'appstore',},
      {key: '/home/general/manage4', title: '图片水印', icon: 'appstore',},
      {key: '/home/general/manager5', title: '检测更新', icon: 'appstore',},
    ]
  },
  {
    title: '营销',
    icon: 'book',
    key: '/home/general2',
    subs: [
      {key: '/home/general/kefu', title: '客服', icon: 'plus',},
      {key: '/home/general/seo', title: 'SEO', icon: 'appstore',},
      {key: '/home/general/link', title: '友情链接', icon: 'appstore',},
    ]
  },
  {
    title: '用户',
    icon: 'user',
    key: '/home/user',
    subs: [
      {key: '/home/general/users', title: '客服', icon: 'user',},
      {key: '/home/general/admin', title: 'SEO', icon: 'user',},
    ]
  },
  {
    title: '安全',
    icon: 'user',
    key: '/home/safeindex',
    subs: [
      {key: '/home/general/safe', title: '安全与效率', icon: 'safety',},
      {key: '/home/general/backup', title: '备份与回复', icon: 'copy',},
    ]
  },
  {
    title: '基本组件',
    icon: 'laptop',
    key: '/home/general',
    subs: [
      {key: '/home/general/button', title: '按钮', icon: '',},
      {key: '/home/general/icon', title: '图标', icon: '',},
    ]
  },
  {
    title: '导航组件',
    icon: 'bars',
    key: '/home/navigation',
    subs: [
      {key: '/home/navigation/dropdown', title: '下拉菜单', icon: ''},
      {key: '/home/navigation/menu', title: '导航菜单', icon: ''},
      {key: '/home/navigation/steps', title: '步骤条', icon: ''},
    ]
  },
  {
    title: '输入组件',
    icon: 'edit',
    key: '/home/entry',
    subs: [
      {
        key: '/home/entry/form',
        title: '表单',
        icon: '',
        subs: [
          {key: '/home/entry/form/basic-form', title: '基础表单', icon: ''},
          {key: '/home/entry/form/step-form', title: '分步表单', icon: ''}
        ]
      },
      {key: '/home/entry/upload', title: '上传', icon: ''},
    ]
  },
  {
    title: '显示组件',
    icon: 'desktop',
    key: '/home/display',
    subs: [
      {key: '/home/display/carousel', title: '轮播图', icon: ''},
      {key: '/home/display/collapse', title: '折叠面板', icon: ''},
      {key: '/home/display/list', title: '列表', icon: ''},
      {key: '/home/display/table', title: '表格', icon: ''},
      {key: '/home/display/tabs', title: '标签页', icon: '',},
    ]
  },
  {
    title: '反馈组件',
    icon: 'message',
    key: '/home/feedback',
    subs: [
      {key: '/home/feedback/modal', title: '对话框', icon: '',},
      {key: '/home/feedback/notification', title: '通知提醒框', icon: ''},
      {key: '/home/feedback/spin', title: '加载中', icon: '',}
    ]
  },
  {
    title: '其它',
    icon: 'bulb',
    key: '/home/other',
    subs:[
      {key: '/home/other/animation', title: '动画', icon: '',},
      {key: '/home/other/gallery', title: '画廊', icon: '',},
      {key:'/home/other/draft',title:'富文本',icon:''},
      {key:'/home/other/chart',title:'图表',icon:''},
      {key:'/home/other/loading',title:'加载动画',icon:''},
      {key:'/home/other/404',title:'404',icon:''},
      {key:'/home/other/springText',title:'弹性文字',icon:''},
    ]
  },
  {
    title: '关于',
    icon: 'info-circle-o',
    key: '/home/about'
  },
  {
    title: '幻灯片',
    icon: 'home',
    key: '/slide'
  },
]


class SiderNav extends React.Component {
  render() {

    return (
      <div style={{height: '100vh',overflowY:'scroll'}}>
        <div style={styles.logo}></div>
        <CustomMenu menus={menus}/>
      </div>
    )
  }
}

const styles = {
  logo: {
    height: '32px',
    background: 'rgba(255, 255, 255, .2)',
    margin: '16px'
  }
}

export default SiderNav