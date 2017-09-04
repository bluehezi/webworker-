WebWorker处理canvas图像数据

> 
在主页面中创建worker对象，添加message事件监听worker线程发送过来的数据，并使用postMessage方法开始线程执行，并把canvas显示图片的原始图像数据发送给线程。
worker线程中添加message事件监听主页面发送过来的数据，处理完成后发送数据到主页面。

- 主页面中： 获取img的dom对象，处理load事件，在图片加载完成之后执行processImage函数
processImage函数中获取img图像的宽高，创建canvas Dom对象,获取对应的上下文环境，设置canvas的宽高与img的宽高相同
- 创建web worker对象，监听message事件，向web workder发送canvas显示图像的原始图像数据, 收到webworker线程数据后，把数据放在画布上，然后把canvas加入到body中

- webworker线程中， 监听主页面发送的message事件， 处理原始图像数据，每4个元素(rgba)为一个图像元素数据，处理完数据后发送给主页面

