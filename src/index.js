import * as emoji from './filters/emoji'
// import qqWxEmotions from './filters/qq-wx-emotions'
import * as sbEmotions from './filters/sb-emotions'
import * as htmlEntity from './filters/html-entities'
import * as linebreak from './filters/linebreak'

const filtersInstall = function (Vue, options) {
  let filterList = [
    'emoji',
    // 'qqWxEmotions',
    'sbEmotions',
    'htmlEntity',
    'linebreak'
  ]
  let filterMap = {
    emoji,
    // 'qqWxEmotions': qqWxEmotions,
    sbEmotions,
    htmlEntity,
    linebreak
  }

  let needs = options.needs || filterList
  needs.forEach((filter) => {
    let filters = filterMap[filter]
    Object.keys(filters).forEach((key) => {
      Vue.filter(key, filters[key])
    })
  })
}

// late bind during install
let Vue

// init TextFilters
var TextFilters = {}

/* Installation */

TextFilters.installed = false

/**
 * Installation interface.
 * Install the necessary directives.
 */

TextFilters.install = function (externalVue, options = {}) {
  /* istanbul ignore if */
  if (TextFilters.installed) {
    console.warn('already installed.')
    return
  }

  Vue = externalVue

  filtersInstall(Vue, options)
  TextFilters.installed = true
}

export default TextFilters
