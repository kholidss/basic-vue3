import { createApp } from 'vue'
import DeclarativeRendering from './1-DeclarativeRendering.vue'
import Methods from './2-Methods.vue'
import VModel from './3-VModel.vue'
import VIf from './4-VIf.vue'
import VFor from './5-VFor.vue'
import BasicComponent from './6-BasicComponent.vue'
import PropsInComponent from './7-PropsInComponent.vue'
import ComponentLoop from './8-ComponentLoop.vue'

// createApp(DeclarativeRendering).mount('#app')
// createApp(Methods).mount('#app')
// createApp(VModel).mount('#app')
// createApp(VIf).mount('#app')
// createApp(VFor).mount('#app')
// createApp(BasicComponent).mount('#app')
// createApp(PropsInComponent).mount('#app')
createApp(ComponentLoop).mount('#app')
