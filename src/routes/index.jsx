import { LenisProvider, useLenis} from '~/context/LenisContext';
import { onCleanup, onMount, createEffect} from 'solid-js';
import DarkSwitcher from '~/components/Switch';

export default function Home() {

  const {lenis} = useLenis(); // 获取 Lenis 实例


  const handleScroll = () => {
    console.log('Scrolling...', lenis.scroll); // 处理滚动事件
  };


  if(lenis){
    lenis.on('scroll', handleScroll); // 监听滚动事件
  }


  return (
        <div w-full h-1000px bg-white dark:bg-black>
          <DarkSwitcher />

            <article className=":uno: prose prose-lg prose-black mx-auto max-w-3xl p-8 bg-white dark:bg-gray-700 dark:prose-white rounded-lg shadow-md">
              <h1>这是一个标题</h1>
              <p>这是一段使用 UnoCSS Typography preset 设置样式的文本。它使用了较大的字号（lg）和蓝色主题。This is a paragraph of text styled with the UnoCSS Typography preset. It uses a larger font size (lg) and a blue theme.</p>
              <ul>
                <li>列表项 1</li>
                <li>列表项 2</li>
              </ul>
              <pre><code class="language-javascript">console.log('Hello, world!');</code></pre>
              <table>
                <thead>
                  <tr>
                    <th>表头 1</th>
                    <th>表头 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>单元格 1</td>
                    <td>单元格 2</td>
                  </tr>
                </tbody>
              </table>
              <img src="https://via.placeholder.com/300" alt="示例图片"/>
            </article>
        </div>

  );
}
