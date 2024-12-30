import { createContext, useContext, createMemo, createSignal, onCleanup } from 'solid-js';
import Lenis from 'lenis';

// 创建 Lenis 上下文
const LenisContext = createContext(null);

// LenisProvider 组件
export const LenisProvider = (props) => {
  const [lenis, setLenis] = createSignal(null);

  // 使用 createMemo 初始化 Lenis 实例并缓存
  const lenisInstance = createMemo(() => {
    if (typeof window !== 'undefined') {
      const instance = new Lenis({
        autoRaf: true,
      });
      setLenis(instance);

      // 监听滚动事件
      instance.on('scroll', (e) => {
        // 处理滚动事件
      });

      // 注册清理函数
      onCleanup(() => {
        instance.destroy();
      });

      return instance;
    }
    return null;
  });

  return (
    <LenisContext.Provider value={{ lenis: lenisInstance() }}>
      {props.children}
    </LenisContext.Provider>
  );
};

// 自定义 Hook 用于使用 Lenis
export const useLenis = () => {
  return useContext(LenisContext);
};