import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.codoon.gps',
  name: '咕咚',
  groups: [
    {
      key: 1,
      name: '广告弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: 'com.codoon.gps.ui.SlideActivity',
      rules: [
        {
          name: '首页-广告弹窗',
          matches:
            '[id="android:id/content"] >2 RelativeLayout > ViewGroup[childCount=2] > ImageView[clickable=true] + ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13358586',
        },
        {
          name: '运动圈-广告弹窗',
          matches:
            '[id="android:id/content"] >4 FrameLayout > ImageView + FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13348663',
        },
      ],
    },
  ],
});
