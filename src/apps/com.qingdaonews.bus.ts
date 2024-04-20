import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qingdaonews.bus',
  name: '青岛公交查询',
  groups: [
    {
      key: 0,
      name: '弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[id="com.qingdaonews.bus:id/iv_native_dislike"]',
          snapshotUrls: 'https://i.gkd.li/i/13467193',
        },
      ],
    },
  ],
});
