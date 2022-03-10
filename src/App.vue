<template>
  <div class="konva-box">
    <div id="demo1" ref="demo1">
      <div class="info-box">
        <p class="score">{{ score }}</p>
        <p class="info-text">考试得分</p>
      </div>
      <div id="chart" ref="chart" class="chart-box"></div>
    </div>
    <div id="demo2">
      <button @click="handlerTest()">resetArc</button>
    </div>
    <div id="demo3"></div>
    <div id="demo4"></div>
    <div id="demo5"></div>
    <div id="demo6"></div>
    <div id="demo7"></div>
    <div id="demo8"></div>
    <div id="demo9"></div>
    <div id="demo10"></div>
    <div id="demo11"></div>
    <div id="demo12"></div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import _ from 'lodash'
  import { onMounted, getCurrentInstance } from 'vue'
  import ArcFigure from './ArcFigure'

  let arcFigure: ArcFigure
  let score = ref(0)

  const handlerTest = (): void => {
    score.value = _.random(0, 100)
    arcFigure.resetArc(score.value * 1.8)
  }

  onMounted(() => {
    const instance: any = getCurrentInstance()
    arcFigure = new ArcFigure({
      container: 'chart',
      width: instance.refs.chart.offsetWidth,
      height: instance.refs.chart.offsetHeight,
      radius: 150,
      strokeWidth: 22
    })
  })
</script>
<style lang="scss" scoped>
  .konva-box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  @for $i from 1 to 12 {
    #demo#{$i} {
      overflow: hidden;
      height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
  }

  .chart-box {
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .info-box {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    z-index: 2;
    height: 30%;
    p {
      margin: 0;
    }

    .score {
      font-size: 32px;
      font-weight: bold;
      color: #333;
      margin-bottom: 10px;
    }

    .info-text {
      font-size: 14px;
      color: #999;
    }
  }
</style>
