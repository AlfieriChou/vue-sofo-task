import Vue, { VNode, PluginObject as _PluginObject } from 'vue'

declare global {
  // Element-UI 2.9.1 的bug 没有引入PluginObject却使用了PluginObject(node_modules\element-ui\types\element-ui.d.ts)
  // tslint:disable no-empty-interface
  interface PluginObject<T> extends _PluginObject<T> {}
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
