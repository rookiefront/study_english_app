// https://uniapp.dcloud.net.cn/tutorial/platform.html#preprocessor

type UniappBrowser = Record<
  | 'isVue3'
  | 'isApp'
  | 'isH5'
  | 'isWx'
  | 'isAli'
  | 'isBaidu'
  | 'isTouTiao'
  | 'isLark'
  | 'isQq'
  | 'isKuaiShou'
  | 'isJd'
  | 'is360'
  | 'isXiaoChengXu'
  | 'isQuick'
  | string,
  any
>
type _t = (key: string) => string
export class UniappUnit {


  static getBarHeight() :Promise<Record<'statusBar' | 'customBar', any>>{
    return new Promise((resolve, reject) => {
      uni.getSystemInfo({
        success: (e: any) => {
          // this.compareVersion(e.SDKVersion, '2.5.0')
          let statusBar = 0  //状态栏高度
          let customBar = 0  // 状态栏高度 + 导航栏高度
          let navbar = 0 // 自定义标题与胶囊对齐高度


          // #ifdef MP
          statusBar = e.statusBarHeight
          customBar = e.statusBarHeight + 45
          if (e.platform === 'android') {
            customBar = e.statusBarHeight + 50
          }
          // #endif


          // #ifdef MP-WEIXIN
          statusBar = e.statusBarHeight
          // @ts-ignore
          const custom = wx.getMenuButtonBoundingClientRect()
          customBar = custom.bottom + custom.top - e.statusBarHeight

          navbar = (custom.top - e.statusBarHeight) * 2 + custom.height
          // #endif


          // #ifdef MP-ALIPAY
          statusBar = e.statusBarHeight
          customBar = e.statusBarHeight + e.titleBarHeight
          // #endif


          // #ifdef APP-PLUS
          statusBar = e.statusBarHeight
          customBar = e.statusBarHeight + 45
          // #endif


          // #ifdef H5
          statusBar = 0
          customBar = e.statusBarHeight + 45
          // #endif
          resolve({
            statusBar,
            customBar,
          })
        },
        fail: (e) => {
          reject(e)
        }
      })

    })
  }

  static browser: UniappBrowser = {}
  static $t: any | _t
  static execCurrentBrowser() {
    /*
    ifdef APP-PLUS
    ifndef H5
    ifdef  H5 || MP-WEIXIN
     */
    for (let browserKey in UniappUnit.browser) {
      UniappUnit.browser[browserKey] = false
    }

    // #ifdef VUE3
    UniappUnit.browser.isVue3 = true
    // #endif

    // #ifdef APP-PLUS
    UniappUnit.browser.isApp = true
    // #endif

    // #ifdef H5
    UniappUnit.browser.isH5 = true
    // #endif

    // #ifdef MP-WEIXIN
    UniappUnit.browser.isWx = true
    // #endif

    // #ifdef MP-ALIPAY
    UniappUnit.browser.isAli = true
    // #endif

    // #ifdef MP-BAIDU
    UniappUnit.browser.isBaidu = true
    // #endif

    // #ifdef MP-TOUTIAO
    UniappUnit.browser.isTouTiao = true
    // #endif

    // #ifdef MP-LARK
    UniappUnit.browser.isLark = true
    // #endif

    // #ifdef MP-QQ
    UniappUnit.browser.isQq = true
    // #endif

    // #ifdef MP-KUAISHOU
    UniappUnit.browser.isKuaiShou = true
    // #endif

    // #ifdef MP-JD
    UniappUnit.browser.isJd = true
    // #endif


    // #ifdef MP-360
    UniappUnit.browser.is360 = true
    // #endif

    // #ifdef MP
    UniappUnit.browser.isXiaoChengXu = true
    // #endif

  }
}
