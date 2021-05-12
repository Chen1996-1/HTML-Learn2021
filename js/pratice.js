// 图片名称规则 根据图标位置设计，第一行第一个 1-1.png 第二行第二个 2-2.png 其他的类似

const TOTALWIDTH = 400
const IMAGENUM = 4

const SINGERWIDTH = TOTALWIDTH / IMAGENUM


function LoadImages(point, width, height) {
    let [startWidth, startHeight] = point
    // 处理边界条件, 边界条件向上取整不生效
    startWidth = startWidth % SINGERWIDTH === 0 ? startWidth + 1 : startWidth
    startHeight = startHeight % SINGERWIDTH === 0 ? startHeight + 1 : startWidth

    const endWidth = startWidth + width
    const endHeight = startHeight + height
    // 获取左上角 位置 坐标
    const startPoint = [Math.ceil(startWidth / SINGERWIDTH), Math.ceil(startHeight / SINGERWIDTH)]
    // 获取右下角 位置 坐标
    const endPont = [Math.ceil(endWidth / SINGERWIDTH), Math.ceil(endHeight / SINGERWIDTH)]

    const result = []
    // 循环生成二维矩阵数组
    for (let i = startPoint[0]; i <= endPont[0]; i++) {
        for (let j = startPoint[1]; j <= endPont[1]; j++) {
            result.push([i, j])
        }
    }
    // 根据数组规则拼接图片名称
    const imageList = result.map((item) => {
         return item.join('-') + '.png'
    })
    return imageList
}

// const result = LoadImages([150, 150], 200, 200)
const result = LoadImages([100, 100], 200, 200)
console.log(result)
