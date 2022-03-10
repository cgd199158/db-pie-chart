# db-pie-chart
> 一个简单的进度条

![image](https://user-images.githubusercontent.com/18514077/157575829-2c6f745e-2fdb-4b71-8136-f31d876f2290.png)
![image](https://user-images.githubusercontent.com/18514077/157576654-aa78426c-2f9b-438b-ae47-3b2f9ac44524.png)

## demo 
https://codepen.io/cgd199158/pen/bGYXEwd

## 安装
```
yarn add db-pie-chart
```

## 使用
```
import DbPieChart from 'db-pie-chart'

const pie = new ArcFigure({
  container: 'chart', // 渲染容器的id
  width: 400, // 画布宽度默认400
  height: 400, // 画布高度
  radius: 150, // 弧形班级
  strokeWidth: 22, // 弧形宽度
  themeColor: '#22B9FF', // 主题颜色
  centerX: '', // 中心点x坐标
  centerY: '' // 中心点y坐标
})


pie.resetArc(Math.random()*180) // 设置arc角度0~180   

// 图形上的文字可用定位自行设置就行了
```
## github地址
https://github.com/cgd199158/db-pie-chart
