import { createApp } from 'vue'
import DeclarativeRendering from './1-DeclarativeRendering.vue'
import Methods from './2-Methods.vue'
import VModel from './3-VModel.vue'
import VIf from './4-VIf.vue'
import VFor from './5-VFor.vue'

// createApp(DeclarativeRendering).mount('#app')
// createApp(Methods).mount('#app')
// createApp(VModel).mount('#app')
// createApp(VIf).mount('#app')
createApp(VFor).mount('#app')
