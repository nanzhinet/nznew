import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ct.client',
  name: '中国电信',
  groups: [
    {
      key: 1,
      name: '用户引导',

      quickFind: true,
      activityIds: 'com.ct.client.activity.UserGuideActivity',
      rules: '[id="com.ct.client:id/tvSkip"]',
      snapshotUrls: ['https://i.gkd.li/i/12508971'],
    },
    {
      key: 3,
      name: '浮窗广告',
      desc: '会出现在首页、查询办理页面',
      quickFind: true,
      activityIds: [
        'com.ct.client.common.ConfirmDialogActivity',
        'com.ct.client.activity.MainActivity',
      ],
      rules: [
        {
          matches: 'ImageView[id="com.ct.client:id/close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12819676',
            'https://i.gkd.li/i/12913735',
          ],
        },
        {
          matches: 'ImageView[id="com.ct.client:id/ivFloatClose"]',
          snapshotUrls: ['https://i.gkd.li/i/13043345'],
        },
      ],
    },
    {
      key: 4,
      name: '业务办理-弹窗广告',
      // quickFind: true, 实机测试使用无法跳过
      activityIds: [
        'com.ct.client.common.webview.OnlineBusinessWebkitActivity',
      ],
      rules: 'Image[text="tishi-close"]',
      snapshotUrls: ['https://i.gkd.li/i/12913804'],
    },
    {
      key: 5,
      name: '消息-开启消息通知',
      desc: '自动点击关闭',
      // quickFind: true, 实机测试使用无法跳过
      activityIds: ['com.ct.client.activity.MainActivity'],
      rules: 'ImageView[id="com.ct.client:id/msg_close"]',
      snapshotUrls: ['https://i.gkd.li/i/13043522'],
    },
    {
      key: 6,
      name: '功能类-领金豆',
      desc: '点击右上角领金豆',
      quickFind: true,
      activityIds: 'com.ct.client.common.ConfirmDialogActivity',
      rules: '[id="com.ct.client:id/ivSign"]',
      exampleUrls:
        'https://m.gkd.li/57941037/fe4862c7-44ce-4d2f-9f3f-1621a373b075',
      snapshotUrls: 'https://i.gkd.li/i/14121382',
    },
  ],
});
